import React from 'react'
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <>
      <div>Welcome! {props.id}!!</div>
      <Link to="/"><button>๋ก๊ทธ์์</button></Link>
    </>
  )
}
