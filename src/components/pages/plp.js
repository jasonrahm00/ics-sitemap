import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Breadcrumbs from '../cms-components/breadcrumbs/breadcrumbs';

function PLP({...props}) {

  const location = useLocation();
  const productList = location.state.products;
  const pageTitle = location.state.pageTitle;

  return (
    <>
      <Breadcrumbs breadcrumbs={props.breadcrumb} />
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