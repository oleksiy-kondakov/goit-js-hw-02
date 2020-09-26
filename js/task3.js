function findLongestWord(string = "") {
  let biggestWord = " ";
  for (let word of string.split(" ")) {
    if (biggestWord.length < word.length) {
      biggestWord = word;
    }
  }
  return biggestWord;

  // получить суму каждого элемент масива
  //вернуть элемент с самым большим значением
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'

//Поиск самого длинного слово в строке с пробелами
//Напиши функцию findLongestWord(string = ""),
//которая принимает параметром произвольную строку
//(в строке будут только слова и пробелы)
//и возвращает самое длинное слово в этой строке.
