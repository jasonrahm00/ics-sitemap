function Homepage({...props}) {
  return (
    <>
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

export default Homepage;