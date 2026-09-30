import { useState } from "react";
import "./style.scss";

const Carrossel = () => {
  const customers = [
    {
      name: "Jane Smith",
      feedback: " Very good products!",
      image: "/bolo.jpg",
    },
    {
      name: "John Doe",
      feedback: "A fantastic experience!",
      image: "/bolo.jpg",
    },
    {
      name: "Meredith Gray",
      feedback: "Always fresh and beautifully decorated.",
      image: "/bolo.jpg",
    },
    {
      name: "Michael Johnson",
      feedback: "Highly recommended!",
      image: "/bolo.jpg",
    },

    {
      name: "Tom Davis",
      feedback: "I can never stop at just one!",
      image: "/bolo.jpg",
    },
    {
      name: "Ethan Wilson",
      feedback: "My family loves the pastries.",
      image: "/bolo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 252;
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (prevIndex = customers.length - visibleCards)
        : prevIndex - 1
    );
  };

  const transformValue = `translateX(-${currentIndex * cardWidth}px)`;

  return (
    <>
      <section id="carousel-section">
        <div className="title-carousel">
          <h1 className="title-section">Promoções!</h1>
        </div>
        <div className="carousel-section-wrapper">
          <button id="prev-btn" className="carousel-btn" onClick={prevSlide}>
            <img src="/lower.svg" alt="" />
          </button>
          <div className="carousel-container">
            <div
              className="carousel-wrapper"
              style={{ transform: transformValue }}
            >
              {customers.map((customer, index) => (
                <div
                  className="carousel-card"
                  key={index}
                >
                  <img
                    id="customer-img"
                    src={customer.image}
                    alt="customer image"
                  />
                  <h3>{customer.name}</h3>
                  <p>{customer.feedback}</p>
                  <div className="star-icon-wrapper">
                    {[...Array(5)].map((i) => (
                      <img
                        key={i}
                        id="star-icon"
                        src="./icons/iconStar.svg"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button id="next-btn" className="carousel-btn" onClick={nextSlide}>
            <img src="/greater.svg" alt="" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Carrossel;
