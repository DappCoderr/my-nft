// File: ./src/auth-cluster.js

import React, {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl"
import { Redirect } from "react-router-dom"
import './style.css'

export function Login() {
  const [user, setUser] = useState({loggedIn: null})
  useEffect(() => fcl.currentUser().subscribe(setUser), [])

  if (!user.loggedIn) {
    return (
      <div>
        <h1>Welcome to Mint NFT</h1>
        <p>Login to Mint you frist NFT onflow</p>
        <button className='btn' onClick={fcl.logIn}>Log In</button>
      </div>
    ) } else {
      return(
        <Redirect to='/home'/>
      )}
  }