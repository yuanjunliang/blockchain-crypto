const EthCrypto = require("eth-crypto")
const CryptoJS = require("crypto-js")
const randomBytes = require("randombytes")

module.exports = {
    ...EthCrypto,
    ...CryptoJS,
    randomBytes

}