
import React from 'react';
import './Snow.css';

const Snow = () => {
    
    const snowEmojis = ['❄️']; 

    
    const snowflakeCount = 10; 

    
    const snowflakes = new Array(snowflakeCount).fill(null);
    const random = (min, max) => Math.random() * (max - min) + min;

    return (
        <div className="snow-container" aria-hidden="true">
            {snowflakes.map((_, index) => {
              
                const emoji = snowEmojis[Math.floor(random(0, snowEmojis.length))];
                
               
                const style = {
                    left: `${random(0, 100)}vw`,         
                    animationDuration: `${random(5, 15)}s`, 
                    animationDelay: `${random(0, 5)}s`,   
                    fontSize: `${random(0.5, 1.2)}rem`,    
                };

                return (
                    <span key={index} className="snowflake" style={style}>
                        {emoji}
                    </span>
                );
            })}
        </div>
    );
};

export default Snow;