import { useEffect, useState } from 'react'
import './App.css'
import ArticleC from './Article'
import { Puff as PuffComponet } from './Article'
import { Puff } from 'react-loader-spinner'
import fetchQL from './fetchQL'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchQL(`
      {
        countries(page: {first: 4}){
          edges {
            node {
              name
              id
              capital
              cities(page:{first: 3}) {
                edges{
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    `).then((response) => {
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
          articles.data.countries.edges.map((article) => {
            console.log(article.node)
            if (!article.node) {
            debugger

          }
          return <ArticleComponent key={article.node.id} {...article.node}></ArticleComponent>
        })
      }
    </div>
  )
}

export default App
