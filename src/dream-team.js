const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const array = [];
  
  if (!Array.isArray(members)) {
    return false;
  } 
    
  for (let i = 0; i < members.length; i++) {
      let item = members[i];
        if(typeof item === 'string') {
          item = item.trim().toUpperCase();
          array.push(item[0]);
        } 
    }
    
  return array.sort().join('');
}

module.exports = {
  createDreamTeam
};
