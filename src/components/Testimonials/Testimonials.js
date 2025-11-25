import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "John Carter",
      role: "Frontend Developer",
      img: "https://i.imgur.com/4ZQZ4qD.jpeg",
      text: "Awesome portfolio! Clean UI, smooth animations, and very professional work.",
    },
    {
      name: "Sophie Miller",
      role: "UI/UX Designer",
      img: "https://i.imgur.com/N1x0H1W.jpeg",
      text: "Very impressive design sense and modern layout. Highly recommended!",
    },
    {
      name: "Michael Smith",
      role: "Software Engineer",
      img: "https://i.imgur.com/9yHbdnY.jpeg",
      text: "Fast, responsive and beautifully built website. Great skills!",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h1 data-aos="fade-up">
        Client <span>Reviews</span>
      </h1>

      <div className="review-container">
        {reviews.map((item, index) => (
          <div className="review-card" data-aos="zoom-in" key={index}>
            <img src={item.img} alt={item.name} className="review-img" />

            <h2>{item.name}</h2>
            <h4>{item.role}</h4>

            <p>{item.text}</p>

            <div className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
