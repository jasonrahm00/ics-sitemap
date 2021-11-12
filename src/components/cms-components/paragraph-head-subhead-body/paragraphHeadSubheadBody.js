import './paragraphHeadSubheadBody.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Paragraph with Header Subheader Body</h2>
      <ul>
        <li>Header</li>
        <li>Subheader</li>
        <li>Body Copy</li>
        <li>Text Alignment (left, center)</li>
        <li>Background Width (full width, with margins)</li>
      </ul>
    </section>
  )
}

function ParagraphHeadSubheadBody({...props}) {

  const HeaderTag = props.headerTag ? props.headerTag : 'h2';
  const SubHeaderTag = props.subheaderTag ? props.subheaderTag : 'h3';

  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      <section className="content-wrapper phsb-component">
        <div className={props.withMargins ? 'content-wrapper' : ''}>
          {props.header ? (<HeaderTag>{props.header}</HeaderTag>) : ''}
          {props.subheader ? (<SubHeaderTag>{props.subheader}</SubHeaderTag>) : ''}
          {props.bodyText ? <>{props.bodyText}</> : ''}
        </div>
      </section>
    </>
  );
}

export default ParagraphHeadSubheadBody;