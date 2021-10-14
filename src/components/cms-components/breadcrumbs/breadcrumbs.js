import './breadcrumbs.css';

function Breadcrumbs({...props}) {
  return (
    <div className="content-wrapper breadcrumbs">
      <p>{props.breadcrumbs}</p>
    </div>
  );
}

export default Breadcrumbs;