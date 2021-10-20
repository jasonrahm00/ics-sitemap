import Breadcrumbs from '../base/breadcrumbs/breadcrumbs';

function CategoryContent({...props}) {
  return (
    <>
      <Breadcrumbs />
      <div className="content-wrapper">
        <h1>{props.title ? props.title : 'Category Content Page'}</h1>
        {/* Create json objects for each page including commponents and data. objects and object file = CMS */}
      </div>
      
    </>
  );
}

export default CategoryContent;