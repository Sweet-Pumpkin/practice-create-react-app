import React from 'react'
import { useParams } from 'react-router-dom'

const contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'CSS', description:'CSS is ...'},
  {id:3, title:'JS', description:'JS is ...'}
]

export default function Item() {
  let params = useParams();
  console.log(params)
  return (
    <div>
      {contents.map(v => (<div>{v.title}</div>))}
    </div>
  )
}
