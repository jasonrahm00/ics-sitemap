import { useLocation } from 'react-router-dom';

import Breadcrumbs from '../base/breadcrumbs/breadcrumbs';

function CategoryContent({...props}) {
  const location = useLocation();
  const pageTitle = location.state && location.state.pageTitle ? location.state.pageTitle : 'Product Listing Page';

  return (
    <>
      <Breadcrumbs />
      <div className="content-wrapper">
        <h1>{props.title ? props.title : pageTitle ? pageTitle : 'Category Content Page'}</h1>
        {/* Create json objects for each page including commponents and data. objects and object file = CMS */}
      </div>
      
    </>
  );
}

export default CategoryContent;