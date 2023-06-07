import Discussion from './Discussion'
import './styles/Discussions.css'

function Discussions({discussions}) {
    
    return (
        <section className="discussion__wrapper">
            <ul className="discussions__container">
                {discussions.map(el => <Discussion key={el.id} discussion={el} />)}
            </ul>
            <div className="pagination">
                <button className="pagination__button left">이전</button>
                <span className="pagination__info">page <span className="pagination__number">1</span></span>
                <button className="pagination__button right">다음</button>
            </div>
        </section>
    )
}

export default Discussions