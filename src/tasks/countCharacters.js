/**
 * Count the frequency of each character in both the title and the description of a todo list item.
 * 
 * @param {TodoListItem} item Newly added item. It contains a "title" (string), an optional "description" (string or undefined) and a numerical status. The status is irrelevant to this task.
 * @param {CharacterFrequencies} previousData An object in the form { character: { upperCase: number, lowerCase: number } }, containing the values calculated to far.
 * @returns An object in the form { character: { upperCase: number, lowerCase: number } }, containing new total numbers.
 */

function countCharacters(item, previousData) {
  var newData = { ...previousData };
  const allCharacters = item.title + (item.description || '');

  // All the Keys from NewData are in Capital, so it's needed to check for upperCase

  for (const character of allCharacters) {
    if(character === character.toUpperCase()){
      // Found an upercase Character, check the character itself is already exists
      if(character in newData){
        // the character exists already, just add +1 to uppercase
        newData[character].upperCase += 1
      }else{
        // the character doesn't exists at all, create a new one and set the value of upperCase to 1
        newData[character] = {lowerCase: 0, upperCase: 1}
      }
    }else{
      // Found a lowercase Character, check the character itself is already exists
      if(character.toUpperCase() in newData){
        // the character exists already, just add +1 to lowercase
        newData[character.toUpperCase()].lowerCase += 1
      }else{
        // the character doesn't exists at all, create a new one and set the value of lowerCase to 1
        newData[character.toUpperCase()] = {lowerCase: 1, upperCase: 0}
      }
    }
  }
  return newData;
}

export { countCharacters };
