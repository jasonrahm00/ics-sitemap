import TileComponent from './tile/tileComponent';

import './tileCollection.css';

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Tile Collection</h2>
      <ul>
        <li>Collection Header</li>
        <li>Collection Subheader</li>
        <li>Full width or With Margins</li>
        <li>
          Tiles
          <ul>
            <li>Header</li>
            <li>Subhead</li>
            <li>Image</li>
            <li>Body Copy</li>
            <li>CTA Button</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
function TileCollection({...props}) {
  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
    </>
  );
}

export default TileCollection;