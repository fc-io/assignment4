export default ({ title: space_title, summary, url, publishedAt }) => {
  // console.log(article)
  // debugger
  return <div>
    <h1>{space_title}</h1>
    <p>{publishedAt}</p>
    <p>{summary}</p>
    <a href={url}>Länk</a >
  </div>
}
