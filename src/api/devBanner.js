import axios from 'axios';
import * as URLUtils from '../utils/url';

const API_ENDPOINT = "https://devbanner.center/generate/banner";

const getBanner = (username, text) => {
  const URL = URLUtils.getURL(API_ENDPOINT, {username, text});
  console.log(URL);
  axios.get(URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export { getBanner };