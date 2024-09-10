import { useState } from "react"
import "./App.css"

const App = ()=>{
  const [question, setQuestion] = useState([
    {
      quest:" What is React.js?",
      opt_A :"Open-source JavaScript back-end library",
      opt_B :" JavaScript front-end library to create a database",
      opt_C:"Free and open-source JavaScript front-end library",
      opt_D:" None of the mentioned",
      Ans:"Free and open-source JavaScript front-end library"
    },
    {
      quest:" Which of the following acts as the input of a class-based component?",
      opt_A :"Class",
      opt_B :"Props",
      opt_C:"Factory",
      opt_D:" None of the mentioned",
      Ans:"Props"

    },
    {
      quest:"JSX stands for...",
      opt_A :"JavaScript XML",
      opt_B :" JavaScript Syntax",
      opt_C:"Java Syntax Extension",
      opt_D:"Java Structured XML",
      Ans:"JavaScript XML"

    },
    {
      quest:"What are Props in React?",
      opt_A :"Data passed from a parent component to a child component",
      opt_B :"External libraries used in React",
      opt_C:"Internal state of a component",
      opt_D:"Functions inside a component",
      Ans:"Data passed from a parent component to a child component"

    }
  ])
  const [isVisible,setVisible]=useState(false)
  console.log(question)
  const [index ,setIndex] = useState(0)
  const [score,setScore] = useState(0)
  const next =()=>{
    if(index < question.length-1){
      setIndex(index + 1)
    }
    else{

    }
    const check = document.querySelectorAll(".checkedbox");
    check.forEach((cur)=>{
    cur.check=false
  })
  }
 
  const handleclick =(e)=>{
    const userValue = e.target.value;
    console.log(userValue)
    if(userValue === question[index].Ans){
          setScore(score+10)
    }
  }
  console.log(score)
  const viewRes=()=>{
    setVisible(true)

  }

  return(
    <div className="main_body">
      <div className="quiz_box">
        <div className="question_div">
          <h1>{question[index].quest}</h1>
        </div>
        <div className="option_and_ans">
          <input name="value" type="radio" onChange={handleclick} className="checkedbox" value={question[index].opt_A} /> 
          <p>{question[index].opt_A}</p>
        </div>
        <div className="option_and_ans">
          <input name="value" type="radio" onChange={handleclick} className="checked" value={question[index].opt_B} /> 
          <p>{question[index].opt_B}</p>
        </div>
        <div className="option_and_ans">
          <input name="value" type="radio" onChange={handleclick} className="checked" value={question[index].opt_C} /> 
          <p>{question[index].opt_C}</p>
        </div>
        <div className="option_and_ans">
          <input name="value" type="radio" onChange={handleclick} className="checked" value={question[index].opt_D} /> 
          <p>{question[index].opt_D}</p>
        </div>

        <div className="result">
          <button className="result_box" onClick={viewRes}>Check result</button>
        </div>
        <div className={isVisible ? "res" :"visible"} >
          
            <span>Score</span>
            {
            score
          }
        </div>
        <div className="btn">
          <button onClick={next}>Next</button>
        </div>

      </div>

    </div>
  )

}


export default App