import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import './plp.css';
import Breadcrumbs from '../../base/breadcrumbs/breadcrumbs';
import imgPlaceholder from './no-image-available.png';

function PLP() {

  const location = useLocation();
  const productList = location.state && location.state.products ? location.state.products : ['Product 1', 'Product 1', 'Product 1'];
  const pageTitle = location.state && location.state.pageTitle ? location.state.pageTitle : 'Product Listing Page';

  return (
    <>
      <Breadcrumbs />
      <div className="content-wrapper product-listing-page">
        <Grid container spacing={6}>
          <Grid item md={4}>
            <h2>Filters</h2>
          </Grid>
          <Grid item md={8}>
            <h1>{pageTitle}</h1>
            {productList.length ? (
              <ul>
                {productList.map((product, index) => {
                  return (
                    <li key={index}>
                      <div className="image-wrapper">
                        <img src={imgPlaceholder} alt="" />
                      </div>
                      <div>
                        <Link
                          to={{
                            pathname: '/pdp',
                            state: { 
                              products: [product]
                            },
                          }}
                        >
                          {product}
                        </Link> 
                        <p><strong>Part# {'00000' + (index + 1)}</strong></p>
                      </div>
                      
                  </li>
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