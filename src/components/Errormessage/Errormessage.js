import React from 'react'

export const Errormessage = ({children}) => {
  return (
    <div style={
        {
            width:'100%',
            padding:10,
            marginBottom:10,
            backgroundColor:'orangered',
            textAlign : 'center',
            color: 'white',
            textTransform : 'capitalize'
        }
    }> {children}</div>
  )
}
