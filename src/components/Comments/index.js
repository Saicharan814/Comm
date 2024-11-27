import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import "./index.css"
import CommentItem from "../CommentItem"

function Comments() {
    const [name, setName] = useState("")
    const onChangeInput = event => setName(event.target.value)

    const [commentName, commentSet] = useState("")
    const onChangeComment = event => commentSet(event.target.value)

    const [extraName, extraSet] = useState([])

    const onAddComment = event => {
        event.preventDefault()
        const newComment = {
            id:uuidv4(),
            name,
            commentName
        }
        extraSet(previousList => [...previousList, newComment])
        setName("")
        commentSet("")
    }

    return(
        <div className="div">
          <p className="paragraph">Comments</p>
          <form className="form" onSubmit={onAddComment}>
            <input className="nameInput" type="text" placeholder="Your Name" value={name} onChange={onChangeInput}/>
            <textarea className="commentInput" placeholder="Your Comment" rows='6' value={commentName} onChange={onChangeComment} />
            <button className="button" type="submit">Comment</button>
          </form>
          <ul className="ull">
            {extraName.map((eachComment) => (
                <CommentItem key={eachComment.id} commentDetails={eachComment}/>
            ))}
          </ul>
        </div>
    )
}
export default Comments