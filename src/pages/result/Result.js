import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "./result.css"

export const Result = ({score}) => {
  const navigate = useNavigate();

  return (
    <div className='result'>
      <span className='title'>Final Score: {score}</span>
      <Button
        variant='contained'
        size='large'
        color='primary' // Corrected color prop
        onClick={() => navigate('/')} // Corrected href to onClick for routing
        style={{ alignSelf: 'center', marginTop: 20 }}
      >
        Go to Homepage
      </Button>
    </div>
  )
}
