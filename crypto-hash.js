const crypto = require("crypto")
const hexToBinary = require("hex-to-binary");
const cryptoHash = (...inputs) => {
    const hash = crypto.createHash("sha256");
    hash.update(inputs.sort().join(""));
    return hash.digest("hex");
};
result = cryptoHash("world", "hallo"); // helloworld, worldhello will be generate same hex code because of 'sort()' fuction use.

module.exports = cryptoHash;
//console.log(result);