import './App.css';
import DiscussionCreate from './components/DiscussionCreate';
import Discussions from './components/Discussions';
import { useEffect, useState } from 'react'
import Pagination from './components/Pagination';

function App() {
  const disInPage = 10
  const [pageCount, setPageCount] = useState(0)
  const [discussions, setDiscussions] = useState([])
  const [pageNum, setPageNum] = useState(0)

  function getDiscussions() {
    fetch('http://localhost:4000/discussions')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const temp = []
        setPageCount(Math.floor(data.length / 10))
        for (let i = disInPage * pageNum; i < disInPage * pageNum + disInPage; i++) {
          if (data[i] !== undefined) {
            temp.push(data[i])
          }
        }
        setDiscussions(temp)
      })
  }
  // eslint-disable-next-line
  useEffect(() => getDiscussions(), [pageNum])

  return (
    <div className="App">
      <h1>My Agora States</h1>
      <DiscussionCreate getDiscussions={getDiscussions} />
      <Discussions discussions={discussions} />
      <Pagination setPageNum={setPageNum} pageNum={pageNum} pageCount={pageCount} />
    </div>
  );
}

export default App;
