import React, { useState } from 'react'
import axios from 'axios';
import './Home.css'


export const Home = () => {
    const [trans,setTrans]=useState("");
    const[toLn, setToLn]=useState('mr');
    const[fromLn,setFromLn]=useState('en')
    async function setVal(e){
       const word= setTrans(e.target.value);
    

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', fromLn);
encodedParams.set('target_language', toLn);
encodedParams.set('text', word);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '6463543da2mshe828655994016cbp1b2cd9jsn4c8bcf5f1861',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};
const response = await axios.request(options);
	console.log(response.data.data.translatedText );
    setTrans(response.data.data.translatedText)
    }
  return (
        <div className='trans'>
            <span>
               <b>Translation APK</b>
            </span>
            <div className='pleaseSel'>
            <span>Please select source langeuage:</span>
            <select onChange={(e)=>setFromLn(e.target.value)}>
                <option value='en'>en</option>
                <option value='mr'>mr</option>
                <option value='id'>id</option>
                <option value='es'>es</option>
                <option value='fr'>fr</option>
                <option value='ko'>ko</option>
            </select><br/>
            <span>Please select target langeuage</span>
            <select onChange={(e)=>setToLn(e.target.value)}>
                <option value='mr'>mr</option>
                <option value='id'>id</option>
                <option value='es'>es</option>
                <option value='fr'>fr</option>
                <option value='ko'>ko</option>
            </select>
            </div>
            {console.log(toLn)}
            <input type='text' placeholder="What you want to Translate?" onChange={(e)=>setVal(e)}/>
            <span>{trans}</span>
            {console.log(trans)}
        </div>
  )
}
