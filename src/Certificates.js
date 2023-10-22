import React from 'react';
import './Certificates.css';

function Certificates() {
  return (
    <div className='certiBox'>
        <div className='certiOne'>
            <div className="wow">
                <div className='showCerti'>
                    <img src="./images/certificate Full Stack.PNG" alt="" srcset="" className='seeMy'/>
                </div>
               
                <div className='certiDetails'>
                    <article className='myCourse'>Full Stack Development</article>
                    <a href="./images/certificate Full Stack.PNG" className='hereBtn'><button className='hereBtn2'>HERE</button></a>
                </div>
            </div> 

            <div className="wow">
                <div className='showCerti'>
                    <img src="./images/certificate angular.jpg" alt="" srcset="" className='seeMy'/>
                </div>
               
                <div className='certiDetails'>
                    <article className='myCourse'>Angular Beginner Course</article>
                    <a href="./images/certificate angular.jpg" className='hereBtn'><button className='hereBtn2'>HERE</button></a>
                </div>
            </div> 

            <div className="wow">
                <div className='showCerti'>
                    <img src="./images/certificate python.png" alt="" srcset="" className='seeMy'/>
                </div>
               
                <div className='certiDetails'>
                    <article className='myCourse'>Python Programming</article>
                    <a href="./images/certificate python.png" className='hereBtn'><button className='hereBtn2'>HERE</button></a>
                </div>
            </div> 
        </div>
 


        <div className="certiTwo">
            <div className="wow">
                <div className='showCerti'>
                    <img src="./images/certificate  web development bootcamp.jpg" alt="" srcset="" className='seeMy'/>
                </div>
               
                <div className='certiDetails'>
                    <article className='myCourse'>Web Development Basics</article>
                    <a href="./images/certificate  web development bootcamp.jpg" className='hereBtn'><button className='hereBtn2'>HERE</button></a>
                </div>
            </div>

            <div className="wow">
                <div className='showCerti'>
                    <img src="./images/certificate c++.jpg" alt="" srcset="" className='seeMy'/>
                </div>
               
                <div className='certiDetails'>
                    <article className='myCourse'>C++ Programming</article>
                    <a href="./images/certificate  web development bootcamp.jpg" className='hereBtn'><button className='hereBtn2'>HERE</button></a>
                </div>
            </div>

            <div className="wow">
                <div className='showCerti'>
                    <img src="./images/certificate Java.png" alt="" srcset="" className='seeMy'/>
                </div>
               
                <div className='certiDetails'>
                    <article className='myCourse'>Java Programming  </article>
                    <a href="./images/certificate Java.png" className='hereBtn'><button className='hereBtn2'>HERE</button></a>
                </div>
            </div>

        </div> 

        
    </div>
  )
}

export default Certificates;