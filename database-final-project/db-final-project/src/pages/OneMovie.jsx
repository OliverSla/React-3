import React from 'react'
import { useParams } from 'react-router-dom'

const OneMovie = () => {

  const {movieID} = useParams()

  console.log(movieID)

  return (
    <div>{movieID}</div>
  )
}

export default OneMovie