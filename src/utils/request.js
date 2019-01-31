import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Set Authorization header for requests
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function setAuthToken(token) {
	axios.defaults.headers.common['Authorization'] = token;
}
function setRechargeToken() {
    axios.defaults.headers.common['X-Recharge-Access-Token'] = '64d455fb70f02865e7e742c4d67e9bc288663d6ede2f111e9b89c589';
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(options) {
  return axios(options)
    .then(response => response)
    .catch(err => {
      const error = err.response;
      const errMessage = ((error || {}).data || {}).message || '';
      const errStatus = (error || {}).status || '';
      const statusText = (error || {}).statusText || '';

      const message = `Error status ${errStatus} Message: ${errMessage}`;
      console.log(error)
      return Promise.reject(errMessage || `${errStatus}: ${statusText}`)
    });
}

export { request, setAuthToken, setRechargeToken }