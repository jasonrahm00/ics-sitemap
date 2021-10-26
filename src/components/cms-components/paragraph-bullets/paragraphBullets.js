import './paragraphBullets.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Paragrph with Bullets</h2>
      <ul>
        <li>Header</li>
        <li>Subhead</li>
        <li>Body Copy</li>
        <li>Bullet Section Header</li>
        <li>
          Bullet Groups 
          <ul>
            <li>Group Title</li>
            <li>Bullets</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

function ParagraphBullets({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
  );
}

export default ParagraphBullets;