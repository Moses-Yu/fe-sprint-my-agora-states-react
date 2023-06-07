import './styles/Discussion.css'
function Discussion({ discussion }) {
    return (
        <li class="discussion__container">
            <div class="discussion__avatar--wrapper">
                <img class="discussion__avatar--image"
                    src={discussion.avatarURL}
                    alt={`avatar of ${discussion.author}`}/>
            </div>
            <div class="discussion__content">
                <h2 class="discussion__title"><a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">{discussion.title}</a></h2>
                <div class="discussion__information">{discussion.author}/{discussion.createdAt}</div>
            </div>
            <div class="discussion__answered center-single-content"><p>☑</p></div>
        </li>
    )
}

export default Discussion