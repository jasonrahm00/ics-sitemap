function ContentPage({...props}) {
  return (
    <>
      <p className="content-wrapper">{props.breadcrumb}</p>
      <h1>{props.title}</h1>
      <p>Hero banner</p>
      <div className="content-wrapper">
        <p>Tiles and other stuff</p>
      </div>
      
    </>
  );
}

export default ContentPage;