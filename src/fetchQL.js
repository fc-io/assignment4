export default (query) => {
  return fetch('https://api.geographql.rudio.dev/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        // now: new Date().toISOString(),
      },
    })
  })
}
