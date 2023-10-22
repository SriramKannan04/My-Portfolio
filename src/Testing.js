import React from 'react';
import './Certificates.css';

function Certificates() {
  return (
    <div className='certiBox'>
        <div className="wow">
            <div className='showCerti'>
                <img src="./images/certificate Full Stack.PNG" alt="" srcset="" className='seeMy'/>
            </div>
            <div className='certiDetails'>
                <article>Full Stack Development</article>
            </div>
        </div>
    </div>
  )
}

export default Certificates;

/* .certiBox
{
    position: absolute;
    width: 1300px;
    height: 650px;
    margin-top: 50px;
    margin-left: 200px;
    display: flex;

    border: 2px solid blueviolet;
}

.wow
{
    background-color: blanchedalmond;
    width: 350px;
    height: 250px;
}

.seeMy
{
    width: 350px;
    height: 250px;
}
.showCerti
{
    display: block;
    transition: filter 0.3s ease;
}
.certiDetails
{
    display: none;
    font-family: 'Alkatra', cursive;
    word-spacing: 3px;
    font-size: 25px;
    padding-left: 50px;
    padding-top: 70px;
}
.wow:hover .certiDetails
{
    display: block;
}
.wow:hover .showCerti
{
    display: none;
} */