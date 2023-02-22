import { useEffect, useState } from 'react'
import './App.css'
import ArticleComponent from './Article'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data)
        setArticles(data)
      })
  }, [])

  return (
    <div className="App">
      {articles.map((article) => {
        return <ArticleComponent key={article.id} {...article}></ArticleComponent>
      })}
    </div>
  )
}

export default App
