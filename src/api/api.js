import axios from 'axios'

export const fetchProjects = async () => {
  try {
    const response = await axios.get('http://10.194.165.139:8000/api/projects')
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const getProejctById = async (projectId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/get_single_project/${projectId}`)
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}
