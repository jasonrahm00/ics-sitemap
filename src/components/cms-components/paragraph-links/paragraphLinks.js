import './paragraphLinks.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Paragaph with Links</h2>
      <ul>
        <li>**No actual paragraph or header to edit</li>
        <li>Link Column Header</li>
        <li>Link Column Subheader</li>
        <li>Link groups for each column</li>
      </ul>
    </section>
  )
}
function ParagraphLinks({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
  );
}

export default ParagraphLinks;