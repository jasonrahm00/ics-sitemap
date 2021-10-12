import './heroBanner.css';
import HeroImage from './hero-banner.jpg';

function HeroBanner({...props}) {
  return (
    <div className="hero-banner">
      <img src={HeroImage} alt="" />
      <section>
        <h1>{props.header}</h1>
        <p>Adaptogen chia occupy yr street art hoodie iceland kickstarter brooklyn ethical vape. Subway tile PBR&B man bun kinfolk gentrify flexitarian. Raw denim shabby chic yuccie sartorial, venmo etsy tilde taiyaki letterpress next level franzen wayfarers yr. Hoodie butcher cliche ennui.</p>
      </section>
    </div>
  );
}

export default HeroBanner;