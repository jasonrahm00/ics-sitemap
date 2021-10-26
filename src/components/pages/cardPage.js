import Grid from '@mui/material/Grid';

import CardComponent from "../cms-components/cardCollection/card/cardComponent";
import ImgTextOverlay from '../cms-components/image-text-overlay/imgTextOverlay';
import Breadcrumbs from '../base/breadcrumbs/breadcrumbs';

function CardPage({...props}) {
  const {cards} = props;
  return (
    <>
      <Breadcrumbs />
      <ImgTextOverlay header={props.title} />
      {cards && cards.map((item, index) => {
        return (
          <section className="content-wrapper" key={index}>
            <h2>{item.group}</h2>
            <Grid container spacing={12}>
              {item.cards && item.cards.map((x, i) => {
                return(
                  <Grid item key={i}>
                    <CardComponent 
                      header={x.header} 
                      dest={x.ctaText} 
                      link={x.ctaUrl} 
                      products={x.productList} 
                      description={x.description}
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
        )
      })}
    </>
  );
}

export default CardPage;