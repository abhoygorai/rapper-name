const data = require('./data/data.js');

/**
 * Generates a random rapper name from the data array.
 * @returns {string} A random rapper name.
 */
function getName(){
    const l = data.length;
    const idx = Math.floor(Math.random() * l);
    return data[idx];
}

module.exports = getName;
