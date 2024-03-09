import { data } from 'autoprefixer'
import { IProjectData, Signin, Signup } from './BackendTypes'
import { api } from './clients'

export const Backend = {
 
  Post: {
    getAllPosts: () => {
      return api.get(`posts/`)
    },
   
  }
}

export default Backend
