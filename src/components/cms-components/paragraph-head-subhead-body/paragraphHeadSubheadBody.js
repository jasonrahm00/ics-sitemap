import './paragraphHeadSubheadBody.css';

function ParagraphHeadSubheadBody({...props}) {
  return (
    <section>
      <h2>Paragraph with Header Subheader Body</h2>
      <ul>
        <li>Header</li>
        <li>Subheader</li>
        <li>Body Copy</li>
      </ul>
    </section>
  );
}

export default ParagraphHeadSubheadBody;