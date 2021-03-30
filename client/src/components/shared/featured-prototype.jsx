import React from 'react'
import './featured-prototype.styles.scss'

const FeaturedPrototype = (prototype) => {
    const { title, imageUrl, size } = prototype;
    
    return (
        <div className='featured-prototype'>
            <div className='featured-image'>
                <img src={imageUrl} alt='prototype' />
            
            </div>
            <div className='name-size'>
                <h3> {title} </h3>
                <p> {size} </p>
                <button className='button is-black noname-btn'>Use this</button>
            </div>
        </div>
    );
} 

export default FeaturedPrototype;