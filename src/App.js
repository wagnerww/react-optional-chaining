import React, { Component } from 'react'
import axios from 'axios'
// yarn eslint --init
const user = {
  login: 'wagnerww',
  name: 'Wagner Ricardo Wagner',
  details: {
    email: 'wagnerricardonet@gmial.com',
  },
  repos: [
    {
      id: 1,
      name: 'Prisma-Training',
      stars: 1,
    },
    {
      id: 2,
      name: 'React-GarphQL',
    },
  ],
}

class App extends Component {
  render() {
    return (
      <div>
        <strong>Usuário</strong>
        <p>{user.login}</p>
        <p>{user.details.email}</p>
        <strong>Repositórios:</strong>
        {user.repos?.map((repo, index) => (
          <div>
            <p>{repo.name}</p>
          </div>
        ))}
        <p />
        <p />
      </div>
    )
  }
}

export default App
