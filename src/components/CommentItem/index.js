import "./index.css"

function CommentItem(props) {
    const {commentDetails} = props
    const {name, commentName} = commentDetails
    return (
        <div>
            <li className="listItem">
                {name && <p className="para">{name[0].toUpperCase()}</p>}
                <div className="div">
                    <p className="para1">{name}</p>
                    <p className="para2">{commentName}</p>
                </div>
            </li>
            <hr />
        </div>
    )
}

export default CommentItem