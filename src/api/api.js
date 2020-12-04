import * as axios from 'axios';
let instance = axios.create({
  baseURL: ``,
});

export const example = {
  getExample(q = 'black hole') {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${q}`)
      .then((data) => {
        return data;
      });
  },
};
