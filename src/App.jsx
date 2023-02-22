import { useEffect, useState } from 'react'
import './App.css'
import ArticleComponent from './Article'
import { Puff } from 'react-loader-spinner'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data)
        setArticles(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {
        isLoading ?
        <Puff /> :
        articles.map((article) => {
          return <ArticleComponent key={article.id} {...article}></ArticleComponent>
        })
      }
    </div>
  )
}

export default App
