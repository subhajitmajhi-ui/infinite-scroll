import React from 'react'
import { dateConverter } from '../helpers/helper'
const SinglePost = ({ list }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg flex mb-4 overflow-hidden hover:bg-slate-300 hover:cursor-pointer hover:border-gray-400 border transition duration-300">
        <div className="flex-shrink-0 w-64">
          <img
            src={list.node.ImageStyle_thumbnail}
            alt={list.node.nid}
            className="w-64 h-36 object-cover"
          />
        </div>
        <div className="ml-4 p-4">
          <h2 className="text-xl font-semibold">
          {list.node.title.length > 80
            ? `${list.node.title.substring(0, 80)}...`
            : list.node.title}
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            {dateConverter(list.node.last_update)}
          </p>
        </div>
      </div>
    </>
  );
}

export default SinglePost
