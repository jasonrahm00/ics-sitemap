import './imgTextOverlay.css';
import HeroImage from './hero-banner.jpg';

const ComponentSpecs = () => {
  return (
    <div className="content-wrapper">
      <h2>Image with Text Overlay</h2>
      <ul>
        <li>Background image, full width or with margins</li>
        <li>Header</li>
        <li>Subhead</li>
        <li>Body Copy</li>
        <li>Text overlay alginment on Desktop (left, center, right)</li>
        <li>CTA Button</li>
        <li>Overlay Gradient Background</li>
      </ul>
    </div>
  )
};

function ImgTextOverlay({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      <div className="hero-banner">
        <img src={HeroImage} alt="" />
        <section>
          {props.header ? (
            <h1>{props.header}</h1>
          ) : ''}
          <p>Adaptogen chia occupy yr street art hoodie iceland kickstarter brooklyn ethical vape. Subway tile PBR&B man bun kinfolk gentrify flexitarian. Raw denim shabby chic yuccie sartorial, venmo etsy tilde taiyaki letterpress next level franzen wayfarers yr. Hoodie butcher cliche ennui.</p>
        </section>
      </div>
    </>
  );
}

export default ImgTextOverlay;