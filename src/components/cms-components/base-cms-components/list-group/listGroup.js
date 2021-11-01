import './listGroup.css';

function ListGroup({...props}) {
  return (
    <section className="list-group-component">
      {props.groupHeader ? (<h3>{props.groupHeader}</h3>) : ''}
    </section>
  )
}

export default ListGroup;
