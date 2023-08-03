import Axios from "./core/Axios";
function createInstance() {
  const context = new Axios();
  const instance = async function () {
    return await context.request(...arguments)
  }
  return instance
}

const axios = createInstance()


export default axios