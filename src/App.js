import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios"
// import dotenv from 'dotenv'

import { API_KEY } from "./api"
import Header from "./Components/Header/Header.jsx"
import Headlines from "./Components/HeadlineCard/Headlines.jsx"
import ArticleSummary from "./Components/Article/ArticleSummary"

// import sampleHeadlines from "./mockNewsData.json"

export const fetchData = async () => {
  return await axios.get(`https://content.guardianapis.com/search?` + `q=property&show-fields=body&api-key=${API_KEY}` + `&show-fields=bodyText,thumbnail`)
  // return await axios.get(`https://content.guardianapis.com/search?api-key` + process.env.REACT_APP_GUARDIAN_API_KEY + `&show-fields=bodyText,thumbnail`)
}

function App() {

  const [headlines, setHeadlines] = useState([]);
  // const [article, setArticle] = useState([]);


  useEffect(() => {
    const getHeadlines = async () => {
      const response = await fetchData();
      setHeadlines(response.data.response.results)
      // setHeadlines(sampleHeadlines.response.results);
    }
    setTimeout(() => getHeadlines(), 500);
  }, []);


  return (
    <Router>
      <div className="App">
        <Header />
        <div className="headlines">
          <Routes>
            <Route path="/" element={<Headlines results={headlines} />} />
            <Route path="/:id" element={<ArticleSummary results={headlines} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;