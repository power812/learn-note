export async function dispatchRequest(config) {
  
  const fullPath = config.url
  let request = new XMLHttpRequest();
  request.open(config.method.toUpperCase(), fullPath, true);
 // Send the request
  request.send("foo=bar&lorem=ipsum" || null);

 //监听请求变化
 request.onreadystatechange = function handleLoad() {
  // 请求错误
  if (!request || request.readyState !== 4) {
    return 
  }

  return onloadend()

}



// 函数
function onloadend() {
  console.log('响应：', request.response)
  return request.response
}
}


class Axios {
  constructor() {

  }
  async request(configOrUrl) {
    const config = Object.assign({}, configOrUrl)
    const res = await dispatchRequest.call(this, config);
    return res
    // return {
    //   data: {
    //     msg: '请求成功'
    //   }
    // }

  }
}
export default Axios