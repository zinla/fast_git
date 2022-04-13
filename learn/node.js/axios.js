'use strict'
const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

async function downloadImage () {  
  const url = 'https://ww1.sinaimg.cn/bmiddle/006O8woRgy1gq9ocn80xpj30gf57b4p6.jpg'
  const path = Path.resolve(__dirname, 'downloads', 'code.jpg')
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

downloadImage()  