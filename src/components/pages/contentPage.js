import Grid from '@mui/material/Grid';

import CardComponent from "../cms-components/card/cardComponent";
import HeroBanner from '../cms-components/hero-banner/heroBanner';
import Breadcrumbs from '../base/breadcrumbs/breadcrumbs';

function ContentPage({...props}) {
  let cards = props.cards;
  return (
    <>
      <Breadcrumbs breadcrumbs={props.breadcrumb} />
      <HeroBanner header={props.title} />
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
                      dest={x.destination} 
                      link={x.link} 
                      products={x.productList} 
                      description={x.description}
                      verified={x.verified} 
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

export default ContentPage;