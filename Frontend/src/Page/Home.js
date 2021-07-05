// File: ./src/auth-cluster.js

import React, {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl"
import { useHistory } from "react-router-dom"
import './style.css'

export function Home() {
  const [user, setUser] = useState({loggedIn: null})
  useEffect(() => fcl.currentUser().subscribe(setUser), [])

  const history = useHistory()

  const routeChange =()=> {
    let path = `/create-nft`
    history.push(path)
  }

  if (!user.loggedIn) {
    return (
    //   <Redirect path='/'/>
    <div>
        <h1>404</h1>
        <p>Page not found!!</p>
        <a href='/' className='link-go-back'> 🔙 Go Back</a>
    </div>
    
    ) } else {
      return(
        <div>
          <a>Donate❤️</a>
          <br></br>
          <p>Your Account: {user.addr}</p>
          <button className='btn' onClick={fcl.unauthenticate}>Log out</button>
          <div>
          <button className='create-nft-btn' onClick={routeChange}>Create NFT</button>
          </div>

          <div>
              <h2>My NFT</h2>
          </div>
        </div>
      )}
  }