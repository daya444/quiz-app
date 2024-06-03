import { Button} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Errormessage } from '../Errormessage/Errormessage'
import'./question.css'

export const Question = ({
    currentquestion,
    setCurrentquestion,
    question,
    setQuestion,
    correct,
    option,
    score,
    setscore
  }) => {


      const[selected ,setSelected] = useState()
      const [error ,setError] = useState(false)

      const navigate = useNavigate()

      const quit = ()=>{
        navigate("/")
      }

      const  nextquestion =()=>{
        if (currentquestion > 8){
          navigate('/result')
        }else if (selected) {
          setCurrentquestion (currentquestion +1)
          setSelected()
        }else {
          setError ("Please select an option")
        }
      }

      const handleselect= (i)=>{
        if(selected ===i && selected===correct){
          return "select"
        }else if (selected ===i && selected !== correct){
          return 'wrong'
        }else if (i === correct){
          return"select"
        }
       
      }


      const handlecheck =(i) => {
       setSelected(i);
       if (i === correct) setscore(score+1);
       setError(false)

      }
 
      

  return (
    <div className='question'>
        <h1> Question:{currentquestion +1}</h1>

        <div className='singleQuestion'> <h2>{question[currentquestion].question}</h2> 
          

          <div className='options'>
               {
                error && <Errormessage>{error}</Errormessage>
               }

               {
                option && option.map((i)=>
                
                <button

                onClick= { () =>handlecheck(i)}
                className={`singleOption ${selected && handleselect(i)}`}

                key={i}
                disabled ={selected}

              
                >{i}</button>


                )
               }
          </div>

          <div className='controls'>

            <Button  variant='contained' 
                    style={{width : 185}}
                    size='large'
                    color='secondary'
                    onClick={quit}
                  >
                    quit</Button>
            <Button
            variant='contained' 
            style={{width : 185}}
            size='large'
            color='primary'
            onClick={nextquestion}
            >
              Next Question</Button>
          </div>
        
        </div>
    </div>
  )
}
