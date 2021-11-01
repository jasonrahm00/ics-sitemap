import './mediaAdjText.css';
import AdjText from '../base-cms-components/adj-text/adjText';
import AdjMedia from '../base-cms-components/adj-media/adjMedia';
import { PlaceholderText } from '../../../utility/variables';
import largePlaceholderImg from '../../../media/placeholder-image-large.png';
import LinkButton from '../base-cms-components/link-button/linkButton'; 

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Image with Adjacent Text</h2>
      <ul>
        <li>Adjacent Image</li>
        <li>Image/Text Placement (left, right)</li>
        <li>Image Span (25%, 50%, 75%)</li>
        <li>Header</li>
        <li>Subheader</li>
        <li>Body Copy</li>
        <li>Bullet List Section with Title</li>
        <li>Link List Section with Title</li>
        <li>CTA Button</li>
      </ul>
    </section>
  )
}
function MediaAdjText({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      <div className={props.withMargins === true ? 'content-wrapper' : ''}>
        <div className="media-adj-text-content content-wrapper">
          <div className='media-wrapper'>
            <img src={largePlaceholderImg} alt="" />
          </div>
          <div className='text-wrapper'>
            <h2>Header</h2>
            <h3>Subheader</h3>
            <p>{PlaceholderText}</p>
            <LinkButton to="/" ctaText="CTA Text" />

            {/* Bullet Section */}
            <section className="list-group-component">
              <h3>Bullet Section Header</h3>
              <section className="list-group">
                <h4>Left Column Bullets</h4>
                <ul>
                  <li>Bullet 1</li>
                  <li>Bullet 2</li>
                  <li>Bullet 3</li>
                </ul>
              </section>
              <section className="list-group">
                <h4>Right Column Bullets</h4>
                <ul>
                  <li>Bullet 1</li>
                  <li>Bullet 2</li>
                  <li>Bullet 3</li>
                </ul>
              </section>
            </section>

            {/* Link Group */}
            <section className="list-group-component">
              <h3>Link Section Header</h3>
              <section className="list-group links">
                <ul>
                  <li><a href="/">Link 1</a></li>
                  <li><a href="/">Link 2</a></li>
                  <li><a href="/">Link 3</a></li>
                </ul>
              </section>
              <section className="list-group links">
                <ul>
                  <li><a href="/">Link 1</a></li>
                  <li><a href="/">Link 2</a></li>
                  <li><a href="/">Link 3</a></li>
                </ul>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaAdjText;