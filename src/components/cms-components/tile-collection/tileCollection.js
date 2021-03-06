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
  let tileWidth = tiles && tiles.length > 3 ? 278 : 358

  return (
    <>
      {props.showSpecs ? <ComponentSpecs /> : ''}
      {tileGroup ? (
        <section className="content-wrapper tile-collection-component">
          {tileGroup.header && (
            <header>
              {<h2>{tileGroup.header}</h2>}
              {tileGroup.subheader && (<h3>{tileGroup.subheader}</h3>)}
            </header>
          )}
          <Grid container justifyContent="center" spacing={2}>
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
                    subheader={x.subheader}
                    customCrumbs={x.crumbs}
                    image={x.image}
                    width={tileWidth}
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