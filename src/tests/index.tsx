import React, { useReducer, useState} from 'react'


export default function Test() {
  {
    /*
      const [count, setCount] = useState({
      count: 0,
      name: 'Juan'
    })
    function handleIncrement(){
      setCount(state =>{
        return{
          ...state,
          count: state.count + 1,
          name: state.name
        }
      })
      }
    return (
  <>
      <h1>{count.count} </h1>
      <h2>{count.name}</h2>
      
      <button onClick={handleIncrement}>Incrementar</button>
  </>)*/
  }
  {
    /**
     *  const [resourceType, setResourceType] = useState("Posts")
  useEffect(() =>{
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
      .then(response => response.json())
      .then(json => console.log(json))
  },[resourceType])
  

  function handleChangeResourceType(resourceType: string){
      setResourceType(resourceType)
  }

  return (<>
  <h1>{resourceType}</h1>
      <div style={{display: "flex", alignContent:"center"}}>
      <button onClick={() => handleChangeResourceType("posts")}>Posts</button>
      <button onClick={() => handleChangeResourceType("comments")}>Comments</button>
      <button onClick={() => handleChangeResourceType("todos")}>Todos</button>
      </div>
  </>)
    */
  }
  {
    /**
     * const [name, setName] = useState("")
  const inputRef = useRef();

  const focusInput = ()=>{
    inputRef.current.focus();
  }

  return(
  <>
  <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
  <button onClick={focusInput}>Focus input</button>
  <p>Hello! My name is {name}</p>
  </>
  )
    */
  }
  {
    /**
     *   const [state, dispatch] = useReducer((state, action) =>{
    switch(action.type){
      case 'INCREMENT':
        return{
          counter: state.counter + 1
        };
      case 'DECREMENT':
        return{
          counter: state.counter - 1
        }
        default: 
        return state;
    }
  }, {counter: 0})
  return(
    <>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({
          type: 'INCREMENT',
        })}>Incrementar</button>

      <button onClick={() => dispatch({
        type: 'DECREMENT',
      })}>Decrementar</button>
    </>
  )
     */
  }

  const [state, dispatch] = useReducer((state, action) =>{
    switch(action.type){
      case "ADD_TASK":
        return{
          tasks:[
            ...state.tasks,
            {name: action.payload, isCompleted: false}
          ]
        }
    }
  }, {tasks:[]})

  const [tasks, setTasks] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setTasks(e.target.value)}/>
      <button onClick={()=>{
        dispatch({
          type: 'ADD_TASK',
          payload: tasks
        })
        setTasks('');
      }}>add-tasks</button>

      <ul>
        {state?.tasks.map((task) =>{
          return(
            <li key={task.name}>{task.name} - {task.isCompleted? 'Completed' : 'Not Completed'}</li>
          )
        })}
      </ul>
    </div>
  );

}


