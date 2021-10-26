import './userSegmentation.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>User Segmentation</h2>
      <ul>
        <li>Image</li>
        <li>Header</li>
        <li>Subheader</li>
        <li>Body Copy</li>
        <li>Link Section with Title</li>
        <li>CTA Button</li>
      </ul>
    </section>
  )
}

function UserSegmentation({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
    
  );
}

export default UserSegmentation;