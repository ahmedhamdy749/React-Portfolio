import { useEffect, useState } from 'react'

import Header from './components/1-header/header'
import Hero from './components/2-hero/hero'
import Main from './components/3-main/main'
import Contact from './components/4-contact/contact'
import Footer from './components/5-footer/footer'




function App() {
   useEffect(()=>{
    window.addEventListener("scroll",() => {
      if (window.scrollY> 300) {
        setShowScrollBtn(true)
        
      }else{
        setShowScrollBtn(false)

      }

      
    }
    )
   }, []);
  const[showScrollBtn, setShowScrollBtn] = useState(false);
  

  return (
    <div id='up' className='container'>
      <Header />
      

      <Hero />
      <div className="divider"  />

      <Main />
      <div className="divider"  />
      <Contact />
      <div className="divider"  />
      <Footer />
      
              <a style={{opacity:showScrollBtn? 1:0,  transition:"1.0s"}} href="#up">
              <button className='icon-arrow-up-circle scrollTop'></button>
              </a>
         
     



    </div>
  )
}

export default App
