 const appReducer = (state, action) => {
  console.log(action, state)

  switch(action.type) {
    case 'ADD_TASK':
        return  {
          tasks: [...state.tasks, action.payLoad]
        }
    case 'DELETE_TASK':
      return  {
        tasks: state.tasks.filter(task => task.id !== action.payLoad)
      }
    case 'UPDATE_TASK':
      const updateTask = action.payLoad
      const updatedTask = state.tasks.map(task => {
        if(task.id === updateTask.id) {
          task.title = updateTask.title
          task.description = updateTask.description
          
        }
        return task
      })
      return {
        tasks: updatedTask
      }
    default:
      break
  }

}

export default appReducer