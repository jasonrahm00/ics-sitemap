function ContentPage({...props}) {
  return (
    <>
      <div className="content-wrapper">
        <h1>{props.title ? props.title : 'Content Page'}</h1>
        {/* Create json objects for each page including commponents and data. objects and object file = CMS */}
      </div>
    </>
  );
}

export default ContentPage;