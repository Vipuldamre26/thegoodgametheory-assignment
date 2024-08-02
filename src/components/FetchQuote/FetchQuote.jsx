import React, { useEffect, useState } from 'react'
import './FetchAdvice.css';
import axios from 'axios';
import { FaDiceFive } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";

const FetchAdvice = () => {

  const [data, setData] = useState('');

  const apiURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


  const fetchAdvice = async () => {
    try {
      const res = await axios.get(apiURL);
      // console.log(res.data[0]);
      setData(res.data[0])
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, [])


  return (
    <div className='fetch-advice'>
      <div className="fetch-main">
        <div className="id">
          <p>QUOTE</p>
        </div>
        <p>"{data}"</p>
        <CiPause1 className='icon1'/>
        <div className="icon2" onClick={fetchAdvice}>
          <FaDiceFive className='icon' />
        </div>
      </div>
    </div>
  )
}

export default FetchAdvice