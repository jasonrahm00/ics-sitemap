import Breadcrumbs from '../page-objects/breadcrumbs/breadcrumbs';

function PLP({...props}) {
  return (
    <>
      <Breadcrumbs breadcrumbs={props.breadcrumb} />
      <h1>{props.title}</h1>
      <div>Facets</div>
      <div>Product List</div>
    </>
  );
}

export default PLP;