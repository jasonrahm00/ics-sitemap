function ContentPage({...props}) {
  return (
    <>
      <div className="padding-top">
        {props.title && (
          <h1 className="content-wrapper">{props.title}</h1>
        )}
        {props.components && props.components.map((component, index) => {
        return (
          <div key={index}>
            {component}
          </div>
        )
        })}
      </div>
    </>
  );
}

export default ContentPage;