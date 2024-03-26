import axios from 'axios';

export function getList() {
  return axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res)
}