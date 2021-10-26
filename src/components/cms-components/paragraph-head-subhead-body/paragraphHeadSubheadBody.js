import './paragraphHeadSubheadBody.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Paragraph with Header Subheader Body</h2>
      <ul>
        <li>Header</li>
        <li>Subheader</li>
        <li>Body Copy</li>
      </ul>
    </section>
  )
}

function ParagraphHeadSubheadBody({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
  );
}

export default ParagraphHeadSubheadBody;