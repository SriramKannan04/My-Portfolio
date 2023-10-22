import React from 'react';
import './Certificates.css';

function Certificates() {
  return (
    <div className='certiBox'>
        <div className="wow">
            <div className='content'>
                <p className='course'>Full stack development</p>
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
    background-image: url("./certificate Full Stack.PNG");
    width: 350px;
    height: 250px;
    background-position: center;
    background-size: cover;
}
.wow:hover
{
    filter: blur(5px);
    transition: filter 0.9s ease;
}

.content 
{
    opacity: 0;
    transition: opacity 0.5s ease;
}
.wow:hover .content
{
    opacity: 1;
} */