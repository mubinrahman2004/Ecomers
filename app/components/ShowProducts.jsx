import React from 'react'
import { AiTwotoneAppstore } from 'react-icons/ai'

const ShowProducts = () => {
  return (
    <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
            <AiTwotoneAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show">
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
  )
}

export default ShowProducts