import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('config is ',config)
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const doLike = async newObject => {
  const url = `${baseUrl}/${newObject._id}`
  const config = {
    headers: { Authorization: token },
  }
  const blogObject = {
    title:newObject.title,
    author:newObject.author,
    url:newObject.url,
    likes:newObject.likes+1,
    user:newObject.user
  }

  console.log("didlike????")
  const response = await axios.put(url, newObject, config)
  return response.data
}

export default { getAll, create, setToken, doLike }
