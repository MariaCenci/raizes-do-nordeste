import "./style.scss"; 

const Footer = () => {
  return (
    <>
 <section id="footer">
        <div className="footer-container">
          <div className="social-container">
            <div className="social">
              <div className="social-item">
                <img
                  className="social-img"
                  src="./icons/instagram.svg"
                  alt="instagram"
                />
              </div>
              <div className="social-item">
                {" "}
              </div>
              <div className="social-item">
                <img
                  className="social-img"
                  src="./icons/twitter.svg"
                  alt="twitter"
                />
              </div>
            </div>
          </div>

          <p className="footer-text">Copyright©2026</p>
        </div>
      </section>
    </>
  )
}

export default Footer
