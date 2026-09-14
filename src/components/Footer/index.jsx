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
                  src="./message.png"
                  alt="email"
                />
              </div>
              <div className="social-item">
               <img
                  className="social-img"
                  src="./telephone.png"
                  alt="instagram"
                />
              </div>
              <div className="social-item">
                <img
                  className="social-img"
                  src="./instagram.png"
                  alt="instagram"
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
