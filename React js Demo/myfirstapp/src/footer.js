import { Button, Card } from "react-bootstrap";

function Footer() {
    return (
        <div>
                  <footer className="bg-dark mt-5 p-3">
        <div className="container bg-light p-4">
          <div className="row">
            <div className="col-lg-2 mb-3">
              <span className="fs-3">GlowGrove</span>
              <ul className="list-unstyled small">
                <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam dolore nisi
                  est ipsum cumque.</li>
                <li className="mb-2">Code licensed MIT, docs CC BY 3.0.</li>
                <li className="mb-2">Currently v5.3.2</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-2 ms-auto">
              <div className="col-6 col-lg-2 mb-2">
                <h5>LINKS</h5>
                <ul className="list-unstyled ">
                  <li className="mt-2"><a className="icon-link text-decoration-none text-dark" href="#"><i
                    className="fa-brands fa-instagram"></i>Instagram</a></li>
                  <li className="mt-2"><a className="icon-link text-decoration-none text-dark" href="#"><i
                    className="fa-brands fa-facebook"></i>Facebook</a></li>
                  <li className="mt-2"><a className="icon-link text-decoration-none text-dark" href="#"><i
                    className="fa-brands fa-linkedin"></i>Linkedin</a></li>
                  <li className="mt-2"><a className="icon-link text-decoration-none text-dark" href="#"><i
                    className="fa-brands fa-twitter"></i>Twitter</a></li>
                  <li className="mt-2"><a className="icon-link text-decoration-none text-dark" href="#"><i
                    className="fa-brands fa-github"></i>Github</a></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 mb-2">
              <h5>PRODUCTS</h5>
              <ul className="list-unstyled">
                <li className="mt-2">Skin Care Store</li>
                <li className="mt-2">Trending Products</li>
                <li className="mt-2">Skin Toner</li>
                <li className="mt-2">Healthy Soap</li>
                <li className="mt-2">Shampoo</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-2">
              <h5>CUSTOMER CARE</h5>
              <ul className="list-unstyled">
                <li className="mt-2">Contact Us</li>
                <li className="mt-2">FAQs</li>
                <li className="mt-2">Return & Exchange</li>
                <li className="mt-2">Shopping And Handling</li>
                <li className="mt-2">Terms & Service</li>
                <li className="mt-2">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-2">
              <h5>ABOUT US</h5>
              <ul className="list-unstyled">
                <li className="mt-2">Company</li>
                <li className="mt-2">Leadership</li>
                <li className="mt-2">Customers</li>
                <li className="mt-2">Career</li>
                <li className="mt-2">Blog</li>
                <li className="mt-2">Sitemap</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="container-fluid text-center">
          {/* <hr  className="lh-1"> */}
          <p>Copyright © 20242020 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i></p>
        </div>
      </footer>
        </div>
    );
}
export default Footer;