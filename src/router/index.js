import {gitlab, github, aliyundocker} from './../libs'

/**
 * a router for incoming request
 * 
 * @param {Request} req - The Request interface of the Fetch API represents a resource request.
 * https://developer.mozilla.org/en-US/docs/Web/API/Request

 * request properties:
 *    method - GET POST etc.
 *    headers (Headers) https://developer.mozilla.org/en-US/docs/Web/API/Headers
 *        get() - Returns a ByteString sequence of all the values of a header within a Headers object with a given name.
 *        has() - Returns a boolean stating whether a Headers object contains a certain header.
 *    credentials 
 *    url
 *    body( ReadableStream )
 * 
 * request methods:
 *    formdata() - Returns a promise that resolves with a FormData representation of the request body.
 *    json() - Returns a promise that resolves with a JSON representation of the request body.
 *    text() - Returns a promise that resolves with an USVString (text) representation of the request body.
 * 
 */
const router = async (req) => {
  /**
   * url proerties:
   * + hash
   * + host www.example.com:8080
   * + hostname www.example.com
   * + pathname /ip
   * + protocol https
   * + searchParams
   *      methods:
   *      + get()
   *      + has()
   *      + keys()
   */
  const url = new URL(req.url)

  const from = url.searchParams.get('from')
  const to = url.searchParams.get('to')
  let message
  // 处理from

  if (req.method === 'POST' && from === 'gitlab') {

    const data = await req.json()

    message = gitlab.parse(data)

  } else if (req.method === 'POST' && from === 'github') {

    const event = req.headers.get('X-GitHub-Event')
    const data = await req.json()
    message = github.parse(data, 'push')
    console.log(message)
  } else if (req.method === 'POST' && from === 'aliyundocker') {

    const data = await req.json()

    message = aliyundocker.parse(data)

  } else {

    return new Response(JSON.stringify({
      error: 404,
      errorMsg: `not supported from param, only github, gitlab, aliyundocker are supported.`
    }), { status: 200 })

  }

  /**
   * to参数现在仅接受一个url message会以?content的形式拼接在url后面
   */
  if (to) {
    // TODO: should call sth.
    if (to.indexOf('https://qyapi.weixin.qq.com') !== -1) {
      // 如果是企业微信的接口，则message会以企业微信的方式调用
      message = message
      await fetch(to, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          msgtype: 'text',
          text: {
            content: message
          }
        })
      })
    } else {
      // 默认是微信群的hook地址
      message = encodeURIComponent(message)
      // console.log(`${to}?content=${message}`)
      await fetch(`${to}?content=${message}`, {
        method: 'GET'
      })
    }
    return new Response('dummy', {status: 200})
  } else {
    return new Response(message, {status: 200})
  }

}

export default router
