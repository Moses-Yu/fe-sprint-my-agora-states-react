import './App.css';
import DiscussionCreate from './components/DiscussionCreate';
import Discussions from './components/Discussions';
import { useEffect, useState } from 'react'

function App() {
  const [discussions, setDiscussions] = useState([])

  const getDiscussions = () => {
    fetch('http://localhost:4000/discussions')
      .then((res) => {
        return res.json()
      })
      .then((data) => setDiscussions(data))
  }

  useEffect(()=> getDiscussions(),[])

  return (
    <div className="App">
      <h1>My Agora States</h1>
      <DiscussionCreate getDiscussions={getDiscussions}/>
      <Discussions discussions={discussions}/>
    </div>
  );
}

export default App;
