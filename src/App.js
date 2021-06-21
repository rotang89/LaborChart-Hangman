import './App.css';
import {Title} from "./components/Title.js"
import  {HangmanContainer} from "./components/HangmanContainer.js"
import {GuessContainer} from "./components/GuessContainer.js"
import {LettersContainer} from "./components/LettersContainer.js"
import {useState, useEffect} from "react"

const wordList = ["kansas", "laborchart", "hangman"]

function App() {

  const [word, setWord] = useState(wordList[Math.floor(Math.random()*wordList.length)]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(()=> {
    if (wrongLetters.length === 6) {
      alert(`You lost.... Correct word was ${word}\nLets play again`)
      setCorrectLetters([]);
      setWrongLetters([]);
      setWord(wordList[Math.floor(Math.random() * wordList.length)])
    }
    if (word.split('').every(letter => correctLetters.includes(letter))) {
      alert('You Win');
      setCorrectLetters([]);
      setWrongLetters([]);
      setWord(wordList[Math.floor(Math.random() * wordList.length)])
    }
  },[correctLetters, word, wrongLetters])

  const handlePick = ({target}) => {
    const letter = target.innerText;
    if(word.includes(letter)) {
      setCorrectLetters(prev => [...prev, letter])
    } else {
      setWrongLetters(prev => [...prev, letter])
    }
  }

  return (
    <div className="App">
      <Title/>
      <HangmanContainer wrongLetterCount={wrongLetters.length}/>
      <GuessContainer word={word} correctLetters={correctLetters}/>
      <LettersContainer handlePick={handlePick} correctLetters={correctLetters} wrongLetters={wrongLetters}/>
    </div>
  );
}

export default App;
