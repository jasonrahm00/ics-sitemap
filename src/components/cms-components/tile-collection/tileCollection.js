import Grid from '@mui/material/Grid';

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

  let {tileGroup} = props;
  let tiles = tileGroup.tiles;

  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      {tileGroup ? (
        <section className="content-wrapper">
          {tileGroup.header ? (<h2>{tileGroup.header}</h2>) : ''}
          {tileGroup.subheader ? (<h3>{tileGroup.subheader}</h3>) : ''}
          
          <Grid container spacing={12}>
            {tiles && tiles.map((x, i) => {
              return(
                <Grid item key={i}>
                  <TileComponent 
                    header={x.header} 
                    dest={x.ctaText} 
                    link={x.ctaUrl}
                    description={x.description}
                    products={x.productList}
                    verified={x.verified}
                    showBrand={props.showBrand}
                    brand={x.subheader}
                    customCrumbs={x.crumbs} 
                  />
                </Grid>
              )
            })}
          </Grid>
        </section>
      ) : ''}
      
    </>
  );
}

export default TileCollection;