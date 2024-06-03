
import './App.css';
import { Header } from './components/header/header';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/home/Home';
import { Quiz } from './pages/quiz/quiz';
import { Result } from './pages/result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name ,setName] = useState("")
  const [question ,setQuestion] = useState()
  const [score,setScore] = useState(0)

  const fetchQuestion = async(category,difficulty) => {

    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)

    setQuestion(data.results)
  }
  

  return (

    <Router>

       <div className="App" style={{backgroundImage : "url(./ques1.png)"}}>
      <Header/>

      <Routes>
        <Route path='/' element ={<Home name={name} setName={setName} fetchQuestion= {fetchQuestion} />}/>
        <Route path='/quiz' element ={<Quiz question={question} setQuestion={setQuestion} score={score} setScore={setScore} name={name}/>}/>
        <Route path='/result' element ={<Result name={name} score={score}/>}/>
      </Routes>
  
   
    </div>

    <Footer/>


    </Router>


   
  );
}

export default App;
