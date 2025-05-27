import React from 'react'
import './hero.css'

function Hero() {
    return (
    <div className='hero-shop-container'>
        <div className="mains">
            <div className="hero-1">
                <div className="doira-texts">
                    <img className='doira' src="./src/assets/img-30.svg" alt="" />
                     <img className='group ' src="./src/assets/img-27.svg" alt="" />
                    <img className='frame' src="./src/assets/img-26.svg" alt="" />
                    <h3 className='main-h3'>Garden Care</h3>
                    <p >We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                   <span className='hero-span'></span>
                </div>
            </div>

            <div className="hero-2">
            <div className="doira-texts">
                <img className='doira1' src="./src/assets/img-30.svg" alt="" />
                   <img className='kaktus' src="./src/assets/img-28.svg" alt="" />
                    <h3 className='main-h3' >Plant Renovation</h3>
                    <p >We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                  <span className='hero-span'></span>
            </div>
            </div>
         
            <div className="hero-3">
            <div className="doira-texts">
                <img className='doira2' src="./src/assets/img-30.svg" alt="" />
                <img className='choynak' src="./src/assets/img-29.svg" alt="" />
                    <h3 className='main-h3' >Watering Graden</h3>
                    <p >We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                 <span className='hero-span'></span>
            </div>  
            </div>
    
            <div className="hero-4">
                <h2 className='main-h2'>Would you like to join newsletters?</h2>
                <div className="main-input">
                <input className='hero-input' type="text" name="" id="" placeholder='enter your email address...' />
                <button className='hero-button'>JOIN</button>
                </div>
                <p className='we'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>

        </div>

        
        <div className="hero-logo">
                <img src="./src/assets/img-1.svg" alt="" />

                <div className="lacation">
                <img className='footer' src="./src/assets/img-34.svg" alt="" />
                <p className='laca'>70 West Buckingham Ave.   Farmingdale, NY 11735</p>
                </div>

                <div className="message">
                <img className='footer' src="./src/assets/img-35.svg" alt="" />
                <p className='laca'>contact@greenshop.com</p>
                </div>

                <div className="calling">
                <img className='footer' src="./src/assets/img-32.svg" alt="" />
                <p className='laco'>+88 01911 717 490</p>
                </div>
            </div>

            <div className="hero-footer">
                <div className="full">
                <h2 className='account'>My Account</h2>
                <p className='class'>My Account</p>
                <p className='class'>Our stores</p>
                <p className='class'>Contact us</p>
                <p className='class'>Career</p>
                <p className='class'>Specials</p>
                </div>

                <div className="full">
                    <h2 className='account'>Help & Guide</h2>
                    <p className='class'>Help Center</p>
                    <p className='class'>How to Buy </p>
                    <p className='class'>SHipping & Delivery</p>
                    <p className='class'>Product Policy</p>
                    <p className='class'>HOw to Return</p>
                </div>
<div className="full">
    
                    <h2 className='account'>Categores</h2>
                    <p className='class'>House Plants</p>
                    <p className='class'>Potter PLants</p>
                    <p className='class'>Seeds</p>
                    <p className='class'>Small Plants</p>
                    <p className='class'>Accessories</p>
</div>

                <div className="fulls">
                    <h2 className='account'> Social Media</h2>
                    <div className="fulls-img">
                        <img className='imgess' src="./src/assets/img-33.svg" alt="" />
                        <img className='imgs' src="./src/assets/img-36.svg" alt=""  />
                        <img className='imgs' src="./src/assets/img-37.svg" alt="" />
                        <img
                         className='imgs' src="./src/assets/img-38.svg" alt="" />
                        <img className='imgs' src="./src/assets/img-39.svg" alt=""  />
                    </div>
                    <h2 className='account'>We accept</h2>
                    <img className='div' src="./src/assets/img-40.svg" alt="" width={224} height={26} />
                </div>
            </div>
           <hr />
           <p className='hero-p2'>© 2021 GreenShop. All Rights Reserved.</p>
    </div>
  
)
};


export default Hero;