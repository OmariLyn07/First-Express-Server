import React, {useState} from 'react';
import Post from './Post';

function Feed(props){

    const [showPost, setShowPost] = useState(true)

    function handleView(){
        if(!showPost){
            setShowPost(true)
        }else{
            setShowPost(false)
        }
    }

    let rows = props.content.map( (data)=>{
        return(
            <tr>
                <td>{data.auth}</td>
                <td>{data.title}</td>
                <td>{showPost ? <Post content={data.text}/> : null}</td>
            </tr>
        )
    })

    return(
        <table>
          <thead>
              <tr>
                  <th>Author</th>
                  <th>Show Posts?
                    <input className="show-button"type="button" onClick={handleView}/>
                    </th>
              </tr>
          </thead>
          <tbody>
              {rows}
          </tbody>
         </table>
    )
}
export default Feed