import { useState } from "react"

function DiscussionCreate({ getDiscussions }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')

    const handleChange_title = (event) => {
        setTitle(event.target.value)
    }
    const handleChange_author = (event) => {
        setAuthor(event.target.value)
    }
    const handleChange_content = (event) => {
        setContent(event.target.value)
    }
    const upLoad = () => {
        if (title.length !== 0 && author.length !== 0 && content.length !== 0) {
            fetch('http://localhost:4000/discussions', {
                method: 'POST',
                body: JSON.stringify({
                    title, author, content,
                    createdAt: `${new Date().toISOString()}`
                }),
                headers: { "Content-Type": "application/json" }
            }).then(() => {
                getDiscussions()
                setContent('')
                setTitle('')
            })
        }else {
            alert('내용을 입력해주세요')
        }
    }

    return (
        <div class="form__container">
            <form action="" method="get" class="form">
                <div class="form__input--wrapper">
                    <span class="form__input--title">
                        <label for="title">Enter your title: </label>
                        <input type="text" name="title" id="title" required value={title}
                            onChange={handleChange_title} />
                    </span>
                    <span class="form__input--name">
                        <label for="name">Enter your name: </label>
                        <input type="text" name="name" id="name" required
                            value={author}
                            onChange={handleChange_author} />
                    </span>
                    <div class="form__textbox">
                        <label for="story">Your question: </label>
                        <textarea id="story" name="story" placeholder="질문을 작성하세요" required
                            value={content}
                            onChange={handleChange_content}></textarea>
                    </div>
                </div>
                <div class="form__submit">
                    <input class="send" type="button" value="submit"
                        onClick={upLoad} />
                </div>
            </form>
        </div>
    )
}
export default DiscussionCreate