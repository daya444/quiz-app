import { Button, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import Categories from '../../Data/category'
import './home.css'
import {useNavigate} from "react-router-dom"
import { Errormessage } from '../../components/Errormessage/Errormessage'


export const Home = ({name,setName,fetchQuestion}) => {

    const [category ,setCategory] = useState('')
    const [difficulty , setDifficulty] = useState('')
    const [error ,setError] = useState(false)

      const navigate = useNavigate()

    const handleSubmit = () =>{
      if(!category || !difficulty || !name){
        setError(true);
        return
      }else{
        setError(false);
        fetchQuestion(category,difficulty)
        navigate("/quiz")
      }
  }


  return (
    <div className='content'>

          <div className='settings'>
              <span>   Quiz Settings </span>

              <div className='settings_select' >

              {error && <Errormessage>please fill the all field</Errormessage>}
                <TextField 
               
                    variant='outlined'
                    label='Your Name' 
                    style={{marginBottom : 20}}
                    onChange = {(e) => setName(e.target.value)}
                    
                 />


                <TextField 
                  select  
                  label='choose category' 
                  variant='outlined' 
                  style={{marginBottom : 20}}
                  onChange = {(e) => setCategory(e.target.value)}
                  value= {category}>
                   

                    {
                        Categories.map((cat, index) => 
                        
                         <MenuItem key={cat.index} value={cat.value}>
                           {cat.category}
                         </MenuItem>
                         )
                    }
                         
                    

                </TextField>



                <TextField 
                  select  
                  label='Select difficulty' 
                  variant='outlined' 
                  style={{marginBottom : 20}}
                  onChange = {(e) => setDifficulty(e.target.value)}
                  value={difficulty}>
                  
                  

                        <MenuItem  value="easy">
                           Easy
                         </MenuItem>

                         <MenuItem  value='medium'>
                           Medium
                         </MenuItem>

                         <MenuItem value='hard' >
                           Hard
                         </MenuItem>


                 </TextField>   

              <Button variant='contained' color='primary'  size='large' onClick={handleSubmit}>
                Start Quiz
              </Button>


              </div>
          </div>

          <img  className='banner' src='/quiz.svg'alt=''/>
    </div>
  )
}
