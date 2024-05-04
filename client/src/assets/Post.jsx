import React, {useState} from 'react';
import Comment from './Comment';


function Post(props){
    
    const [likes, setLikes] = useState(0);

    function handleLike(){
        setLikes(likes + 1);
        
    }

    return(
        <div className="post-box">
            {props.content}
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <Comment />
        </div>
    )
}

export default Post