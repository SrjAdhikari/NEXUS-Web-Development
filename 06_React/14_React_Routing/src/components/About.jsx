import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                Delicious Bites is a family-owned restaurant that has been serving the
                local community for over 20 years. We pride ourselves on using fresh,
                high-quality ingredients to create delicious meals.
            </p>
            <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="About Us"
                style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover' 
                }}
            />
        </div>
    )
}

export default About