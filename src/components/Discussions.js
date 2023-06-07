import Discussion from './Discussion'
import './styles/Discussions.css'

function Discussions({discussions}) {
    return (
        <section className="discussion__wrapper">
            <ul className="discussions__container">
                {discussions.map(el => <Discussion key={el.id} discussion={el} />)}
            </ul>
        </section>
    )
}

export default Discussions