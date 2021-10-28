import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import './plp.css';
import Breadcrumbs from '../../base/breadcrumbs/breadcrumbs';
import imgPlaceholder from './no-image-available.png';
import { Product } from '../../../utility/constructors';

const placeholderProducts = [
  new Product('Product 1'),
  new Product('Product 2'),
  new Product('Product 3')
];

const ProductListing = props => {
  return(
    props.productList.map((product, index) => {
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
                  products: [product.name]
                },
              }}
            >
              {product.name}
            </Link> 
            <p><strong>Part# {'00000' + (index + 1)}</strong></p>
          </div>
      </li>
      )
    })
  )
}

function PLP({...props}) {

  return (
    <>
      <Breadcrumbs />
      <div className="content-wrapper product-listing-page">
        <Grid container spacing={6}>
          <Grid item md={4}>
            <h2>Filters</h2>
          </Grid>
          <Grid item md={8}>
            <h1>{props.title ? props.title : 'Product Listing Page'}</h1>
            <ul>
              {props.products && props.products.length ? (
                <ProductListing productList={props.products} />
              ) : (
                <ProductListing productList={placeholderProducts} />
              )}
            </ul>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PLP;