import './paragraphBullets.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Paragraph with Bullets</h2>
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
      <section className="paragraph-bullets content-wrapper">
        <header>
          {props.header ? (<h2>{props.header}</h2>) : ''}
          {props.subheader ? (<h3>{props.subheader}</h3>) : ''}
        </header>
        {props.bodyText ? (<p>{props.bodyText}</p>) : ''}
        {props.bulletGroup ? props.bulletGroup : ''}
      </section>
    </>
  );
}

export default ParagraphBullets;
