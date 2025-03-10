import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[count, setCount]=useState(0);

  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res)=>res.json())
         .then((data)=>{
                setPosts(data);
                return;
         })
         .catch((error)=>{
          console.log("error 404")
         })
  },[])
  

  return (
    <>
    <h1>Counter:: {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <hr />
    <div>
      <h2>Posts</h2>
      <ul>
        {posts?.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
