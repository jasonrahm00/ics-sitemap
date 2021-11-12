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
  const HeaderTag = props.headerTag ? props.headerTag : 'h2';
  const SubheaderTag = props.subheaderTag ? props.subheaderTag : 'h3';
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      <section className="paragraph-bullets content-wrapper">
        {props.header && (
          <header>
            <HeaderTag>{props.header}</HeaderTag>
            {props.subheader ? (<SubheaderTag>{props.subheader}</SubheaderTag>) : ''}
          </header>
        )}
        {props.bodyText ? (<p>{props.bodyText}</p>) : ''}
        {props.bulletGroup ? props.bulletGroup : ''}
      </section>
    </>
  );
}

export default ParagraphBullets;
