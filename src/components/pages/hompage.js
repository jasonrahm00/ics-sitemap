function Homepage({...props}) {
  return (
    <>
      {props.components && props.components.map((component, index) => {
      return (
        <div key={index}>
          {component}
          <ul className="content-wrapper">
            <li>Homepage
              <ul>
                <li>Hero banner</li>
                <li>User segmentation > Brands with CTA to individual shop by brand page</li>
                <li>Featured Products Row of Tils</li>
                <li>Someway to link to Request Demo page (tile or other method)</li>
                <li>Video of something (get people to interact) - Splash Video</li>
              </ul>
            </li>
            <li>Top actions
              <ul>
                <li>Find a dealer</li>
                <li>Request a Demo</li>
                <li>Download Whitepaper</li>
              </ul>
            </li>
          </ul>
        </div>
      )
      })}
    </>
  );
}

export default Homepage;