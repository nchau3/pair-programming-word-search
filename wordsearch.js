const wordSearch = (letters, word) => {
    //horizontal check
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    //vertical check
    const verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++) {
      let col = "";
      for (let j = 0; j < letters.length; j++) {
        col += letters[j][i];
      } verticalJoin.push(col);
    }
    for (const l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    //return false by default if word is not present
    return false;
  };
  
  module.exports = wordSearch;