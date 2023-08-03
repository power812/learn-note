import dispatchRequest from './../request/xhr'
class Axios {
  constructor() {

  }
  async request(configOrUrl) {
    const config = Object.assign({}, configOrUrl)
    const res = await dispatchRequest.call(this, config);
    return res
  }
}
export default Axios