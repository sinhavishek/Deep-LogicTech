import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App () {

  const [story, setStory]=useState('');
  
  const showStory = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/show/stories')
      setStory(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    showStory();
  },[])

  const handleHamburger=(e)=>{
    e.classList.toggle("change");
  }
  return (
    <div className='app'>
      <div className='topnav'>
        <div className="container">
          <div className="bar" onClick={handleHamburger}>
          <div class='bar1'></div>
          <div class='bar2'></div>
          <div class='bar3'></div>
          </div>
         <a className='active' href='#home'>
          TIME
         </a>
        </div>
        <div className="search">
        <input type='text' placeholder='Search..' />
        </div>
      </div>
      <div className="bodypart">
          <div className="voice">
            <h2>FEATURED VOICES</h2>
            <div className="voices">
              <div className="voices-first">
                <div className="voices-one">
                  <h4>Niraj Chaurasiya</h4>
                  <p>nirajpkc142316@gm</p>
                </div>
                <div className="voices-one">
                  <h4>Abshishek Sinha</h4>
                  <p>paragraph here</p>
                </div>
                <div className="voices-one">
                  <h4>Mohit Raj</h4>
                  <p>paragraph here</p>
                </div>
              </div>
              <div className="voices-last">
              <div className="voices-one">
                  <h4>Gaurav Kumar Singh</h4>
                  <p>paragraph here</p>
                </div>
              <div className="voices-one">
                  <h4>Prince Agrawal</h4>
                  <p>paragraph here</p>
                </div>
              <div className="voices-one">
                  <h4>Nancy Goswamy</h4>
                  <p>paragraph here</p>
                </div>
              </div>
            </div>
          </div>
          <div className="story">
            <h4>LATEST STORIES</h4>
            {story && story.map(s=> <div className="stories">
              <a href={s.link}>{s.title}</a>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default App
