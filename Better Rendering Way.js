import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
async function fetchArticles(){
  const {data} = await axios.get(URL)    
  return data
}
function Articles(){
  const {data, error, isError, isLoading } = useQuery('articles', fetchArticles)
 
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error! {error.message}</div>
  }
  return(
    <div>
      ...
    </div>
  )
}
export default Articles