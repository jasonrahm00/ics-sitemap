import Grid from '@mui/material/Grid';

import CardComponent from "../page-objects/card/cardComponent";
import HeroBanner from '../page-objects/hero-banner/heroBanner';
import Breadcrumbs from '../page-objects/breadcrumbs/breadcrumbs';

function ContentPage({...props}) {
  return (
    <>
      <Breadcrumbs breadcrumbs={props.breadcrumb} />
      <HeroBanner header={props.title} />
      <section className="content-wrapper">
        <h2>Section Header</h2>
        <p>Section Ddescription</p>
        <Grid container spacing={12}>
          <Grid item>
            <CardComponent />
          </Grid>
          <Grid item>
            <CardComponent />
          </Grid>
          <Grid item>
            <CardComponent />
          </Grid>
          <Grid item>
            <CardComponent />
          </Grid>
          <Grid item>
            <CardComponent />
          </Grid>
          <Grid item>
            <CardComponent />
          </Grid>
        </Grid>
      </section>
      
    </>
  );
}

export default ContentPage;