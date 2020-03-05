import axios from 'axios'

export const setGlobalData = (payload) => ({
  type: 'SETGLOBALDATA',
  payload
})

export function getUsers () {
  return async dispatch => {
    const { data } = await axios.get('http://localhost:4000/api/users')
    dispatch(setGlobalData({
      users: data
    }))
  }
}