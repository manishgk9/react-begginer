import React,{useState} from 'react'

function Todos ({todos}) {
  var[a,b]=useState(0);
  return (
    <div className="container">
      <h3> Todo List </h3>
      {/* {props.todos} */}
      <p>
        {a}
      </p>
      <button onClick={()=>b(a+1)} className="btn btn-sm btn-success m-2">Increament</button>
  
      <button onClick={()=>b(a-1)} className="btn btn-sm btn-danger">Decreament</button>
     <div>
       <ul>
       {todos.map((user)=>(<li>
        {user.Sno},{user.title},{user.discription}
       </li>))}
       </ul>
      </div>  
    </div>
  )
}

export default Todos 