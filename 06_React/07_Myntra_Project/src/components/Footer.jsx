function Footer() {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>ONLINE SHOPPING</h3>
                    <ul className="footer-list">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home & Living</li>
                        <li>Beauty</li>
                        <li>Gift Cards</li>
                        <li>Myntra Insider</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>USEFUL LINKS</h3>
                    <ul className="footer-list">
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Site Map</li>
                        <li>Corporate Information</li>
                        <li>Whitehat</li>
                        <li>Cleartrip</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>CUSTOMER POLICIES</h3>
                    <ul className="footer-list">
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>T&C</li>
                        <li>Terms Of Use</li>
                        <li>Track Orders</li>
                        <li>Shipping</li>
                        <li>Cancellation</li>
                        <li>Returns</li>
                        <li>Privacy policy</li>
                        <li>Grievance Redressal</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>KEEP IN TOUCH</h3>
                    <p>Follow us on social media and stay updated with the latest trends.</p>

                    <ul className="social-links">
                        <li>
                            <a className="footer-link" href="#">
                                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="#">
                                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="#">
                                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                    </ul>

                    <div className="footer-terms">
                        <p><strong>100% ORIGINAL</strong> guarantee for all products</p>
                        <p><strong>Return within 14 days</strong> of receiving order</p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>Copyright &copy; 2025 Myntra Clone, All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;