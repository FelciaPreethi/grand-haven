import { useEffect } from "react";
import "./HomePage.scss";

function HomePage({ setSelectedPage }) {
  useEffect(() => {
    setSelectedPage("Home");
  });

  return (
    <main>
      <section className="hero-banner">
        <div className="hero-banner__overlay"></div>
        <div className="hero-banner__text">
          <h2 className="hero-title__sub">Welcome to</h2>
          <h1 className="hero-title">GRAND HAVEN</h1>
        </div>
      </section>
      <section className="intro">
        <article className="intro__content">
          <h2 className="intro__title">Welcome to your home away from home</h2>
          <p className="intro__details">
            Escape to our serene beach hotel, where the soothing waves and warm
            hospitality create a home away from home. Relax in cozy, ocean-view
            rooms and experience comfort, just like home—but with a breathtaking
            seaside view.
          </p>
        </article>
        <img
          src="/src/assets/images/lounge.jpg"
          alt="Beach lounge area"
          className="intro__image"
        />
      </section>
      <section className="comments">
        <div class="comments__overlay"></div>
        <div className="comments__section">
          <h2 className="comments__title">In the Press</h2>
          <div className="comments__details">
            <article className="comments__item">
              <p className="comments__item-content">
                A true coastal paradise, offering the perfect blend of luxury
                and comfort with breathtaking ocean views.
              </p>
              <p className="comments__item-author"> – Travel Weekly</p>
            </article>
            <article className="comments__item">
              <p className="comments__item-content">
                The ultimate home away from home—impeccable service, stunning
                beachfront location, and a warm, welcoming atmosphere.
              </p>
              <p className="comments__item-author">
                {" "}
                – Luxury Escapes Magazine
              </p>
            </article>
            <article className="comments__item">
              <p className="comments__item-title">
                A hidden gem where the sound of the waves and world-class
                hospitality create an unforgettable retreat.
              </p>
              <p className="comments__item-author"> – The Globe Traveler</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
