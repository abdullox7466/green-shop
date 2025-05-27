import React from 'react'
import './footer.css'

function feature() {
  return (
    <div className='green-shop-container'>
        <div className="about-item">
            <div className="about-header">
                <div className="about">
                    <h1>Our Blog Posts</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                </div>
                </div><div className="about-link">
            
                    <div className="about_1">
                        <img src="./src/assets/img-22.svg" alt="" />
                        <div className="about-wrapper">
                            <p className='about-p'>September 12  I Read in 6 minutes</p>
                            <h3 className='about-h'>Cactus & Succulent  Care Tips</h3>
                            <p className='about_p'>Cacti are succulents are easy care plants for any home or patio. </p>
                            <button className='about-img'>Read More <img src="./src/assets/img-31.svg" alt="" /></button>
                        </div>
                    </div>
            
                            <div className="about_2">
                   
                        <img src="./src/assets/img-23.svg" alt="" />
                        <div className="about-wrapper">
                        <p className='about-p'>September 13  I Read in 2 minutesl</p>
                        <h3 className='about-h'>Top 10 Succulents Your Home</h3>
                        <p className='about_p'>Best in hanging baskets. Prefers medium to high light.</p>
                        <button className='about-img'>Read More <img src="./src/assets/img-31.svg" alt="" /></button>
                    </div>
            
                            </div>
                            <div className="about_3">
                    
                        <img src="./src/assets/img-24.svg" alt="" />
                        <div className="about-wrapper">
                        <p className='about-p'>September 15  I Read in 3 minutes</p>
                        <h3 className='about-h'>Cacti & Succulent Care Tips</h3>
                        <p className='about_p'>Cacti and succulents thrive in containers and because most are..</p>
                        <button className='about-img1'>Read More <img src="./src/assets/img-31.svg" alt="" /></button>
                        
                    </div> </div>
                            <div className="about_4">
                    <img src="./src/assets/img-25.svg" alt="4" />
                    <div className="about-wrapper">
                        <p className='about-p'>September 15  I Read in 2 minutes</p>
                        <h3 className='about-h'>Best Houseplants  Room by Room</h3>
                        <p className='about_p'>The benefits of houseplants are endless. In addition to..</p>
                        <button className='about-img'>Read More <img src="./src/assets/img-31.svg" alt="" /></button>
                    </div>
                            </div>
                </div>
        </div>
    </div>
  )
}

export default feature;