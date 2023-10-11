import { createMachine, assign } from 'xstate';
import axios from 'axios'; 


const fetchGalleryData = async (context) => {
    const page = context.page || 1;
    const url = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`;
  
    try {
      const response = await axios.get(url);
      const data = response.data.nodes;
      console.log('data', data); // Log the fetched data
      return data;
    } catch (error) {
      console.log('Failed to fetch data from the API', error);
      throw error; // Throw the error so XState can handle it
    }
  };

const apiMachine = createMachine(
  {
    id: 'api',
    initial: 'idle',
    context: {
      data: [],
      error: null,
      page: 1,
    },
    states: {
      idle: {
        on: {
          FETCH: 'loading',
        },
      },
      loading: {
        invoke: {
          src: fetchGalleryData,
          onDone: {
            target: 'success',
            actions: assign({
              data: (context, event) => [...context.data, ...event.data], 
              page: (context) => context.page + 1, 
            }),
          },
          onError: {
            target: 'failure',
            actions: assign({ error: (_, event) => event.data }),
          },
        },
      },
      success: {
        on: {
          FETCH: 'loading',
        },
      },
      failure: {
        on: {
          FETCH: 'loading',
        },
      },
    },
  },
  {
    actions: {
      resetPageAndData: assign({
        data: [],
        page: 1,
      }),
    },
  },
  {
    predictableActionArguments: false,
  }
);

export default apiMachine;
