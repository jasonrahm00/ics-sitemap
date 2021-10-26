import './imgAdjText.css';

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
function ImgAdjText({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
  );
}

export default ImgAdjText;