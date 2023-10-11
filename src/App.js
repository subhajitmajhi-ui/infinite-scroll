import './App.css';
import SinglePost from './component/SinglePost';
import Header from './component/Header';
import { useMachine } from '@xstate/react';
import axios from 'axios';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './component/Loader';
import EndList from './component/EndList'

import { Machine, assign } from 'xstate';

const galleryMachine = Machine({
  id: 'gallery',
  initial: 'idle',
  context: {
    photos: [],
    page: 1,
    lists: [],
    loading: false,
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        src: 'fetchPhotos',
        onDone: {
          target: 'loaded',
          actions: assign({
            lists: (context, event) => [...context.lists, ...event.data],
            page: (context) => context.page + 1,
            loading: false,
          }),
        },
        onError: 'error',
      },
    },
    loaded: {
      on: {
        FETCH: 'loading',
      },
    },
    error: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});

const fetchPhotos = async (context) => {
  const response = await axios.get(
    `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${context.page}`
  );
  return response.data.nodes;
};

function App() {
  const [state, send] = useMachine(galleryMachine, {
    services: {
      fetchPhotos,
    },
  });

  useEffect(() => {
    send('FETCH');
  }, [send]);

  useEffect(() => {
    console.log('List Count: ', state.context.lists.length);
  }, [state]);

  const fetchMoreData = () => {
    if (state.context.loading) return;
    send('FETCH');
  };

  return (
    <>
      <Header />

      <div className='container max-w-3xl mx-auto py-8 mt-20'>
        <InfiniteScroll
          dataLength={state.context.lists.length}
          next={fetchMoreData}
          hasMore={true}
          loader={state.context.page === 6? <EndList /> : <Loader />}
        >
          {state.context.lists.map((list) => (
            <SinglePost list={list} key={list.node.nid} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
