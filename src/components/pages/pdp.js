import { useLocation } from 'react-router-dom';

import './pageStyles.css';

function PDP({...props}) {
  const location = useLocation();
  const productName = location.state.products[0];
  return (
    <>
      <div className="red-bar-header">
        <div className="header content-wrapper">
          Products
        </div>
      </div>
      <div className="content-wrapper">
        <h1>{productName}</h1>
      </div>
    </>
    
      
  );
}

export default PDP;