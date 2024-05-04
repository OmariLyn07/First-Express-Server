import React, {useState} from 'react';

function Create(props){
    const [text, setPost] = useState("")
    const [auth, setAuth] = useState("")
    const [title, setTitle] = useState("")

    function handleSubmission(){
        event.preventDefault()
        props.onSubmit({text, auth, title})
    }

    let handlePost = (event) =>{
        console.log(event.target.value)
        setPost(event.target.value)
    }

    let handleAuthor = (event) =>{
        setAuth(event.target.value)
    }

    let handleTitle = (event) =>{
        setTitle(event.target.value)
    }
    
    return(
        <form className="form-data" onSubmit={handleSubmission}>
            <label className="title"for="author">Post Author</label>
            <input type="text" name="author" onChange={handleAuthor}/>
            <label className="title"for="Title">Post Title</label>
            <input type="text" name="Title" onChange={handleTitle}/>
            <br/>
            <label for="Text"></label>
            <textarea className="post-area"name="Text" rows="10" cols="70" onChange={handlePost}/>
            <input className="sub-button" type="submit" disabled={text === ""}/>
        </form>
    )
}

export default Create