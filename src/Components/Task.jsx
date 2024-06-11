import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Task({id,task,handleDelete,handleEdit}) {
    let [isCheck,stCheck]=useState(false);
  return (
    <div>
      <div className="todos my-3">
            <div className="todo flex items-center gap-5">
                <input type="checkbox" checked={isCheck} onChange={()=>stCheck(!isCheck)}/>
              <div className={`txt w-32 ${isCheck&&'line-through'}`}>{task}</div>
              <div className="btns">
                <button
                  onClick={()=>handleEdit(id)}
                  className="px-5 py-2 border mx-5  bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
                  type="submit"
                >
                  Edit
                </button>
                <button
                  onClick={()=>{handleDelete(id)}}
                  className="px-5 py-2  bg-red-500 text-white font-semibold hover:bg-red-600 "
                  type="submit"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}
