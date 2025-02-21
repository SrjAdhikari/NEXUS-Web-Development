import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out to us using the details below:</p>
            <ul>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Email: info@deliciousbites.com</li>
                <li>Address: 123 Food Street, Tasty City, USA</li>
            </ul>

            <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Contact Us"
                style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover' 
                }}
            />
        </div>
    )
}

export default Contact