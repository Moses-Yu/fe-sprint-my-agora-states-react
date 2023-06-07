import './styles/Discussion.css'
function Discussion({ discussion }) {
    return (
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image"
                    src={discussion.avatarUrl}
                    alt={`avatar of ${discussion.author}`}/>
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title"><a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">{discussion.title}</a></h2>
                <div className="discussion__information">{discussion.author}/{discussion.createdAt}</div>
            </div>
            <div className="discussion__answered center-single-content"><p>☑</p></div>
        </li>
    )
}

export default Discussion