const bcryptjs = require("bcryptjs")

/**
 * Password without encrypt
 * @param {*} passwordPlain
 */

const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10)
  return hash
}

/**
 * Password without encrypt and encrypted
 * @param {*} passwordPlain
 * @param {*} hashPassword
 */

const compare = async  (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = {encrypt, compare};
