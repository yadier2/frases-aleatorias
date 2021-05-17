import React, { useEffect } from 'react'
import { useFetch } from '../hook/useFetch'
import { useQuote } from '../hook/useQuote';

function App() {
  
  const { loading, data } = useFetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/`)

  const {  getQuote,post,text,color} =  useQuote(data) 
  
  useEffect(() => {
    if (!loading) {
     getQuote() 
    
    }

  }, [data]) 

   useEffect(() => {
       document.body.style.backgroundColor = color;
      document.body.style.color = color;
    return () => {
      document.body.style.backgroundColor = null;
    } 
  }, [color]) 


  return (
    <div className="app"> 
    <h1>Maquina de frases aleatorias</h1>
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i><span id="text">{text.quote }</span>
        </div>
        <div className="quote-author">- <span id="author">{ text.author }</span></div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            href={post.twitter}
            title="Tweet this quote!"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
             href={post.tumblr}
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote" onClick={() => {
             if (!loading) getQuote() 
          }
          }>Nueva Cita</button>
        </div>
      </div>
      <div className="footer">by <a href="https://codepen.io/hezag/">Yadier</a></div>

    </div>
    </div>
  )
}

export default App
