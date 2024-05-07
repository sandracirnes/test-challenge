// users.js
const { isValidDNA} = require('../users.js');
function isValidDNA(str) {
    if (typeof str !== 'string' || str === '') {
        return false;
    }
    return /^[CTAG]+$/.test(str);
}

module.exports = { fetchUserData, isValidDNA };
