// import React, { useEffect } from 'react'
// import { useState } from 'react'
import './style.css'

export const CreateNFT = () => {

    // const [walletAddress, setWalletAddress] = useState('');
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [url, setURL] = useState('');

    // useEffect(async () => { //TODO: implement
    
    // }, []);
  
    const onMintPressed = async () => { //TODO: implement
      
    };


    return (
        <div className='Minter'>
            
            <h1>Flow NFT</h1>
            <p>
                Simply add your asset's link, name, and description, then press "Mint."
            </p>
            <form>
                <h4>🖼 Link to asset: </h4>
                    <input
                        className='nft-input'
                        type="text"
                        placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                        // onChange={(event) => setURL(event.target.value)}
                    />
                <h4>🤔 Name: </h4>
                    <input
                        className='nft-input'
                        type="text"
                        placeholder="e.g. My first NFT!"
                        // onChange={(event) => setName(event.target.value)}
                    />
                <h4>✍️ Description: </h4>
                    <input
                        className='nft-input'
                        type="text"
                        placeholder="e.g. Even cooler than cryptokitties ;)"
                        // onChange={(event) => setDescription(event.target.value)}
                    />
            </form>
            <br></br>
            <button className="mintButton" onClick={onMintPressed}>Mint NFT</button>
            <br></br>
            <a href='/home' className='link-go-back'>🔙</a>
            
        </div>
    )
}
