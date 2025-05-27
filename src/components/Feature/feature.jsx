import React from 'react'
import './feature.css'

const main = () => {
  return (
    <div className='green-shop-container'>
      <div className='main-all'>
       <div className='main-flex'>
         <div className='main-1'>
         <img className='feature-img-2' src="./src/assets/img-20.svg" alt="" />
         <img className='feature-img-3' src="./src/assets/img-21.svg" alt="" />
            <img src="./src/assets/img-18.svg" alt="" />
            <div className='main-img-texts'>
               <h1 className='cactus'>SUMMER CACTUS & SUCCLENTS</h1>
               <p className='cactus-p'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
               <button className='find'>Find More</button>
            </div>
         </div>
         
         <div className='main-2'>
         <img  className='feature-img' src="./src/assets/img-20.svg" alt="" />
            <img className='feature-img-1' src="./src/assets/img-21.svg" alt="" />
            <img src="./src/assets/img-19.svg" alt="" />
            <div className='main-img-texts'>
               <h1 className='summer'>SUMMER CACTUS & SUCCLENTS</h1>
               <p className='summer-p'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
               <button className='find'>Find More </button>
         </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default main;