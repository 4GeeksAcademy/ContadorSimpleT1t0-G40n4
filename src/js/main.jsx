import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SimpleCounter from './components/counter.jsx';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

let counter = 0;
setInterval(function (){
  let digitsix = Math.floor(counter / 100000) 
  let digitfive = Math.floor(counter / 10000) 
  let digitfour = Math.floor(counter / 1000) 
  let digitthree = Math.floor(counter / 100) 
  let digittwo = Math.floor(counter / 10) 
  let digitone = Math.floor(counter / 1) 
  counter = counter +1;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SimpleCounter digitsix={digitsix}
        digitfive={digitfive}
        digitfour={digitfour}
        digitthree={digitthree}
        digittwo={digittwo}
        digitone={digitone} />
    </React.StrictMode>
  );
}, 1000);
