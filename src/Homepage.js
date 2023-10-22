import React from 'react';
import './Homepage.css';
function Homepage() {
  return (
    <div className='box1'>
      <div className='box11'>
        <img src="./images/Avatar.png" alt="" srcset="" className='avatar'/>
        
        <div className='headline'>
          <h1 className='homeH1'>
            <span className='s'>S</span>
            <span className='r'>R</span>
            <span className='i'>I</span>
            <span className='r2'>R</span>
            <span className='a'>A</span>
            <span className='m'>M</span> 
            <span className='moving'></span> 
            <span className='k'>K</span>
            <span className='a2'>A</span>
            <span className='n'>N</span>
            <span className='n2'>N</span>
            <span className='a3'>A</span>
            <span className='n3'>N</span> 
          </h1>
          <h3 className='homeH3'>Aspiring to work as a Full Stack Developer in a dynamic and collaborative team environment to create cutting-edge <br /> web applications.</h3>
        </div>
      </div>

      <div className='text'>
        <div  className='icon'> <a href="https://github.com/SriramKannan04" ><img src="./images/github.png" alt="" srcset="" className='icon1'/></a>    </div> <span className='move'></span>
        <div  className='icon'> <a href="https://www.linkedin.com/in/sriram-kannan-913458247/"><img src="./images/linkedin.png" alt="" srcset="" className='icon1'/></a>  </div> <span className='move'></span> 
        <div  className='icon'> <a href="https://instagram.com/sriram_mr.imperfect?igshid=MzRlODBiNWFlZA=="><img src="./images/instagram.png" alt="" srcset="" className='icon1'/></a> </div> <span className='move'></span>
        <div  className='icon'> <a href="https://www.facebook.com/sriram.suka"><img src="./images/facebook.png" alt="" srcset="" className='icon1'/></a>  </div>     
      </div>

    </div>
    
  )
}

export default Homepage