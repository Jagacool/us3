import {useContext} from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

const TaskList= ()=> {
  const {tasks, deleteTask} = useContext(GlobalContext)



  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        {
          tasks.map(task => (
            <div key={task.id} className="bg-gray-900 px-5 py-5 text-white shadow-2x1 mb-4 flex justify-between">
              <div>
                <h1>{ task.title }</h1>
                <p>{ task.description }</p>
              </div>
              <div className=" flex">
                <Link to={`/edit/${task.id}`} className="bg-gray-600 hover:bg-red-500 py-2 px-4 mr-2">Edit</Link>
                <button onClick={()=>deleteTask(task.id)} className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2">Delete</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default TaskList