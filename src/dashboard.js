import React from 'react'
import QuestionsList from './QuestionsList';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase";

function Dashboard() {
    const [count , setCount] = useState(0);
    const[score , setScore] = useState(0);
    const [increment , setIncrement] = useState(false);
    const [showscore , setShowscore] = useState(false);
    const [nextdisabled , setNextdisabled] = useState(true);
    const [clicked , setClicked] = useState(false);
    const [answer , setAnswer] = useState("");
    const [datapush , setDatapush] = useState(false);
    
   
    const handleSubmission = () =>{
      firebase.firestore.Firestore.collection('data').add({
        name: "hello thi"
      });
    }


    const handleClickedOption  = (isCorrect)=>{
      setClicked(true);
      
      setNextdisabled(false);
      if(isCorrect){
        setIncrement(isCorrect);
      }
      else
      setIncrement(false);
    }
    const handleNextQuestion = ()=>{
  
      if(!nextdisabled){
        if(increment){
          setScore(score+1);
        }
        setIncrement(false);
        if(count+1<QuestionsList.length){
          setCount(count+1);
        }
        else{
        handleSubmission();
          setShowscore(true);
        }
        setNextdisabled(true);
      }
    }
    const [{user},dispatch] = useStateValue();
      
      
    return (
        <div className="App">
            {showscore?(
<>
<header class="site-header" id="header">
		<h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
	</header>

	<div class="main-content">
		<i class="fa fa-check main-content__checkmark" id="checkmark"></i>
		<p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
	</div>

	<footer class="site-footer" id="footer">
		<p class="site-footer__fineprint" id="fineprint">Copyright ©️2021 | All Rights Reserved</p>
	</footer>
            <div>Final score is {score}/{QuestionsList.length}
            </div>
            </>
            ):(

               
  
      
  <div>
 <div>
     <label>
      welcome <span className="name">{user.displayName}</span>
     </label>
     </div>









  <div className="question__heading">
    question {count+1} of {QuestionsList.length}
    </div>
    <div className="question__question">
        {QuestionsList[count].question}
    </div>

    <div className="question__answers">
        {
          QuestionsList[count].answersList.map((answerOption)=> (
            <li className="answer-list" key={uuidv4()}>
                  <button className={`answer-button ${clicked && answerOption.isCorrect?"correct":""}`} onClick={()=> handleClickedOption(answerOption.isCorrect)}>{answerOption.answer}</button>
            </li>
            
          )

          )
          
        }
    </div>
    <div>
      <button className="next-button" onClick={handleNextQuestion}>
          next 
      </button>
    </div>










  </div>
  


)}
            
        </div>
    )
}

export default Dashboard



















