import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm= ()=> {
  
  let history = useNavigate()
  let params = useParams()

  const { addTask, tasks, updateTask } = useContext(GlobalContext)

  const [task, setTask] = useState({
    id:'',
    title:'',
    description:''
  })

  const handleChange = e => 
    setTask({...task ,[e.target.name]: e.target.value})

  const handleSubmit = e => {
    e.preventDefault()

    if(task.id) {
      updateTask(task)
    }else {
      addTask(task)
    }
    history('/')
  }

  useEffect(()=> {
    const tasksFound = tasks.find(task => task.id === params.id)
    console.log(tasksFound)

    if (tasksFound){
      setTask(tasksFound)
    }

  }, [params.id, tasks])
 

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1">
          {
            task.id 
            ? 'Editing a task' : 'Creating A task'
          }
        </h2>
        <div>
           <div className="mb-5">
            <input 
              type="text" 
              name="title" 
              placeholder="Write a title" 
              value={task.title}
              onChange={handleChange}
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full" />
           </div>
           <div className="mb-5">
            <textarea 
              name="description" 
              rows="2" 
              value={task.description}
              onChange={handleChange}
              placeholder="Write a description" 
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full" />
           </div>

           <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
           {
            task.id 
            ? 'Edit' : 'Create'
          }
           </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm