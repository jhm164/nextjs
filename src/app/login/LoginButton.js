"use client"
import React from 'react'

export default function LoginButton() {
    function login(e){
        e.preventDefault()
alert(login)
    }
  return (
    <button onClick={(e)=>login(e)}>Login</button>
  )
}
