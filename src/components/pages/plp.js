import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Breadcrumbs from '../base/breadcrumbs/breadcrumbs';

function PLP() {

  const location = useLocation();
  const productList = location.state && location.state.products ? location.state.products : ['Product 1', 'Product 1', 'Product 1'];
  const pageTitle = location.state && location.state.pageTitle ? location.state.pageTitle : 'Product Listing Page';

  return (
    <>
      <Breadcrumbs />
      <div className="content-wrapper">
        <Grid container spacing={6}>
          <Grid item md={4}>
            <h2>Facets</h2>
          </Grid>
          <Grid item md={8}>
            <h1>{pageTitle}</h1>
            {productList.length ? (
              <ul>
                {productList.map((product, index) => {
                  return (
                    <li key={index}>{product}</li>
                  )
                })}
              </ul>
            ) : ''}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PLP;