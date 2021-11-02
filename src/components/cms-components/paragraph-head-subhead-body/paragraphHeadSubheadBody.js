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
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      <section className="content-wrapper phsb-component">
        <div className={props.withMargins ? 'content-wrapper' : ''}>
          {props.header ? (<h2>{props.header}</h2>) : ''}
          {props.subheader ? (<h3>{props.subheader}</h3>) : ''}
          {props.bodyText ? (<p>{props.bodyText}</p>) : ''}
        </div>
      </section>
    </>
  );
}

export default ParagraphHeadSubheadBody;