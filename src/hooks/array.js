export function useArray() {
  function getNumbersArray(from, to) {
    let result = [];
  
    for (let i = from; i <= to; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
  
      array[i] = array[j];
      array[j] = temp;
    }
  
    return array;
  }

  return { getNumbersArray, shuffleArray };
}