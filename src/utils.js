/* 
  Reverse the letters in every word in a string, if 
  reversed is true. Otherwise, return the string.
  NOTE: this function uses data from the store, but
  is not part of the initial state, since it does not change.
*/
export function formatText(words, reversed = false) {
  if (reversed) {
    return words
      .split(" ")
      .map(word => word.split("").reverse().join(""))
      .join(" ");
  }
  return words;
}
