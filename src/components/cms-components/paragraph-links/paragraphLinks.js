import './paragraphLinks.css';
import { LinkListGroup } from '../base-cms-components/list-groups/listGroups';

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
      { props.showSpecs && <ComponentSpecs /> }
      <div className="paragraph-links-component content-wrapper">
        <div className={props.withMargins ? 'content-wrapper' : ''}>
          <LinkListGroup
            headerTag='h2'
            subheaderTag='h3'
            header={props.column1Header} 
            subheader={props.column1Subheader} 
            links={props.column1Links}
          />
          <LinkListGroup
            headerTag='h2'
            subheaderTag='h3'
            header={props.column2Header} 
            subheader={props.column2Subheader} 
            links={props.column2Links}
          />
        </div>
      </div>
    </>
  );
}

export default ParagraphLinks;