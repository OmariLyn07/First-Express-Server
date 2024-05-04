import React, {useState} from 'react';
import './App.css';
import Create from './assets/CreatePost';
import Feed from './assets/Feed';


function App() {

  const[post, postContent] = useState([])
  
  let onSubmission = (data) => {
    postContent([...post, data])
  }

  return(
    <div>
      <h1>Social Media App</h1>
      <Create onSubmit={onSubmission}/>
      
      <Feed content={post}/>
      
    </div>
  )
}

export default App
