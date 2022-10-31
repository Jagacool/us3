import {createContext, useReducer} from 'react'
import appReducer from './AppReducer'
import { v4 } from 'uuid'

const initialState = {
  tasks:[
    {
      id:'1',
      title:'title one',
      description: 'some description',
      done: false
    },
    {
      id:'2',
      title:'title two',
      description: 'some description',
      done: true
    }
  ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({children})=> {

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = tasks => {
    //console.log(tasks)
    dispatch({type: 'ADD_TASK', payLoad: {...tasks, id: v4()}})
  }
  
  const deleteTask = id => {
    //console.log(tasks)
    dispatch({type: 'DELETE_TASK', payLoad: id})

  }

  const updateTask = task => {
    //console.log(tasks)
    dispatch({type: 'UPDATE_TASK', payLoad: task })

  }

  return (
    <GlobalContext.Provider value={{...state,addTask, deleteTask, updateTask}}>
      {children}
    </GlobalContext.Provider>
  )
}