import Breadcrumbs from '../base/breadcrumbs/breadcrumbs';

function CategoryContent({...props}) {
  return (
    <>
      <Breadcrumbs />
      {props.components && props.components.map((component, index) => {
        return (
          <div key={index}>
            {component}
          </div>
        )
      })}
      
    </>
  );
}

export default CategoryContent;