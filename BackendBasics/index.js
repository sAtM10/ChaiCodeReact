require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000
const githubdata ={
  "login": "sAtM10",
  "id": 100366942,
  "node_id": "U_kgDOBft6Xg",
  "avatar_url": "https://avatars.githubusercontent.com/u/100366942?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sAtM10",
  "html_url": "https://github.com/sAtM10",
  "followers_url": "https://api.github.com/users/sAtM10/followers",
  "following_url": "https://api.github.com/users/sAtM10/following{/other_user}",
  "gists_url": "https://api.github.com/users/sAtM10/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sAtM10/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sAtM10/subscriptions",
  "organizations_url": "https://api.github.com/users/sAtM10/orgs",
  "repos_url": "https://api.github.com/users/sAtM10/repos",
  "events_url": "https://api.github.com/users/sAtM10/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sAtM10/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "satwik",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 43,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2022-02-24T15:22:01Z",
  "updated_at": "2025-10-13T10:42:34Z"
}


app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Welcome to twitter')
})

app.get('/logout', (req, res) => {
    res.send('<h1>You have been logged out</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>') 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
