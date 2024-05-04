import React, {useState} from 'react';


function Comment(){
    const [coms, setComs] = useState("")
    const [arr, setArr] = useState([])

    let handleSub = () =>{
        event.preventDefault();
        setArr([...arr, {comment: coms}])
    }
    let handleCom = (event) =>{
        setComs(event.target.value)
    }

    let row = arr.map( (data)=> {
        return(
            <tr>
                <td>{data.comment}</td>
            </tr>
        )
    })
    return(
        <div>
            <form onSubmit={handleSub}>
                <label for="comment"/>
                <textarea name="comment" rows="3" cols="100" onChange={handleCom}/>
                <input className="sub-button" type="submit" disabled={coms === ""}/>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Comments:</th>
                    </tr>
                </thead>
                <tbody className="row-box">
                    {row}
                </tbody>
            </table>
        </div>
    )
}

export default Comment