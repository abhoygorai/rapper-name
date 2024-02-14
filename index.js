const data = require('./data/data.json');

/**
 * Generates a random rapper name from the data array.
 * @returns {string} A random rapper name.
 */
function getName(){
    const l = data.name.length;
    const idx = Math.floor(Math.random() * l);
    return data.name[idx];
}

module.exports = getName;
