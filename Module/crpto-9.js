const crypto =require('crypto')

const name ='Hello, World!'

const hasName =crypto.createHash('md5').update(name).digest('hex')
console.log(hasName)