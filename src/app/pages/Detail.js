import React from 'react'
import { useSelector } from 'react-redux'

export default function Detail() {
  const { users } = useSelector(state => state.global)

  return (
    <div>
      <h1>Detail Page</h1>
      <table className="table" border="1">
        <thead>
          <tr>
            <td>姓名</td>
            <td>等级</td>
            <td>称号</td>
            <td>武魂</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.rate}</td>
                <td>{user.title}</td>
                <td>{user.soul}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div> 
  ) 
}