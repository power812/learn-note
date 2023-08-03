export default async function dispatchRequest(config) {
  
  const fullPath = config.url
  let request = new XMLHttpRequest();
  request.open(config.method.toUpperCase(), fullPath, true);
 // Send the request
  request.send(config.params || null);

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