import Discussion from './Discussion'
import './styles/Discussions.css'

function Discussions({discussions}) {
    
    return (
        <section class="discussion__wrapper">
            <ul class="discussions__container">
                {discussions.map(el => <Discussion key={el.id} discussion={el} />)}
            </ul>
            <div class="pagination">
                <button class="pagination__button left">이전</button>
                <span class="pagination__info">page <span class="pagination__number">1</span></span>
                <button class="pagination__button right">다음</button>
            </div>
        </section>
    )
}

export default Discussions