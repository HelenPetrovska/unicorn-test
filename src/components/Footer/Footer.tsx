import React from 'react';

import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <a href="#" className="footer__logo-link">LOGO</a>
          </div>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item footer__item--title">USEFUL LINKS</li>
              <li className="footer__item">
                <ul className="footer__sub-list footer__sub-list--links">
                  <li className="footer__sub-item">
                    <a href="#" className="footer__sub-link">Cookie Policy</a>
                  </li>
                  <li className="footer__sub-item">
                    <a href="#" className="footer__sub-link">Terms &amp; Conditions</a>
                  </li>
                  <li className="footer__sub-item">
                    <a href="#" className="footer__sub-link">Privacy Policy</a>
                  </li>
                  <li className="footer__sub-item">
                    <a href="#" className="footer__sub-link">Complaints Policy</a>
                  </li>
                  <li className="footer__sub-item">
                    <a href="#" className="footer__sub-link">Contact Us</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item footer__item--title">contact us</li>
              <li className="footer__item">
                <ul className="footer__sub-list footer__sub-list--contact-us">
                  <li className="footer__sub-item">
                    Turner Little Limited
                    <br />
                    Registered in England No. 3490752
                    <br />
                    Vat No. 764466206
                  </li>
                  <li className="footer__sub-item">
                    Registered Office:
                    <br />
                    Fanshawe House
                    <br />
                    Pioneer Business Park
                    <br />
                    Amy Johnson Way
                    <br />
                    York
                    <br />
                    YO30 4TN
                  </li>
                  <li className="footer__sub-item">
                    Or message us on
                    <br />
                    <a href="#" className="footer__whatsApp-link">
                      <img src="imgs/Frame.png" alt="WhatsApp-link" />
                      WhatsApp
                    </a>
                    <br />
                    Licensed by the Financial Conduct
                    <br />
                    Authority No. 734784
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <img src="imgs/social1.png" alt="instagram-link" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <img src="imgs/social2.png" alt="basket-link" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <img src="imgs/social3.png" alt="twitter-link" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <img src="imgs/social4.png" alt="youtube-link" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
