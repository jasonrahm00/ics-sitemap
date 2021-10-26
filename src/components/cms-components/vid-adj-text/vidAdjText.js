import './vidAdjText.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Video with Adjacent Text</h2>
      <ul>
        <li>Adjacent Video (YouTube Hosting Only)</li>
        <li>Video/Text Placement (left, right)</li>
        <li>Video Span (25%, 50%, 75%)</li>
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

function VideoAdjacentText({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
  );
}

export default VideoAdjacentText;