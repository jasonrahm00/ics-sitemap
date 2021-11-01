import './imgTextOverlay.css';
import HeroImage from './hero-banner.jpg';
import LinkButton from '../base-cms-components/link-button/linkButton';

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
      <div className={'iwto-component ' + (props.withMargins === true ? 'content-wrapper' : '')}>
        <img src={HeroImage} alt="" />
        <div className="iwto-content-container">
          <div className="content-wrapper">
            <section>
              {props.header ? (
                <h1>{props.header}</h1>
              ) : ''}
              {props.subheader ? (<h2>{props.subheader}</h2>) : ''}
              {props.text ? (<p>{props.text}</p>) : ''}
              {props.to && props.ctaText ? (
                <LinkButton ctaText={props.ctaText} to={props.to} />
              ) : ''}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgTextOverlay;