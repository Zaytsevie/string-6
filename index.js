const userAnswer = prompt("Введите текст:");
let userText = userAnswer
userText = userText.trim()

const userAnswer2 = prompt("Введите слово из текста:");
let wordFromText = userAnswer2
wordFromText = wordFromText.trim()

indexOfWord = userText.indexOf(wordFromText)
string = userText.slice(0, indexOfWord)

alert("Результат: " + string)