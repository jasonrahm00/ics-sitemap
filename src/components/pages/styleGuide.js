import HeroBanner from "../cms-components/hero-banner/heroBanner";

function StyleGuide() {
  return (
    <>
      <div className="content-wrapper padding-top">
        <h1>Hybris Custom Component Style Guide</h1>
        <p>All components allow site editors to individually control the header and body copy colors, rudimentary control of the width of the component as well as background color or the inclusion of a background image (not recommended)</p>
        <section>
          <h2>Tile Collection</h2>
          <ul>
            <li>Collection Header</li>
            <li>Collection Subheader</li>
            <li>Full width or With Margins</li>
            <li>
              Tiles
              <ul>
                <li>Header</li>
                <li>Subhead</li>
                <li>Image</li>
                <li>Body Copy</li>
                <li>CTA Button</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Video with Adjacent Text</h2>
          <ul>
            <li>Adjacent Video (YouTube Hosting Only)</li>
            <li>Video/Text Placement (left, right)</li>
            <li>Video Span (25%, 50%, 75%)</li>
            <li>Header</li>
            <li>Subheader</li>
            <li>Body Copy</li>
            <li>Bullet List Section with Title</li>
            <li>Link List Section with Title</li>
            <li>CTA Button</li>
          </ul>
        </section>
        <section>
          <h2>Image with Adjacent Text</h2>
          <ul>
            <li>Adjacent Image</li>
            <li>Image/Text Placement (left, right)</li>
            <li>Image Span (25%, 50%, 75%)</li>
            <li>Header</li>
            <li>Subheader</li>
            <li>Body Copy</li>
            <li>Bullet List Section with Title</li>
            <li>Link List Section with Title</li>
            <li>CTA Button</li>
          </ul>
        </section>
        <section>
          <h2>User Segmentation</h2>
          <ul>
            <li>Image</li>
            <li>Header</li>
            <li>Subheader</li>
            <li>Body Copy</li>
            <li>Link Section with Title</li>
            <li>CTA Button</li>
          </ul>
        </section>
        <section>
          <h2>Paragraph with Header Subheader Body</h2>
          <ul>
            <li>Header</li>
            <li>Subheader</li>
            <li>Body Copy</li>
          </ul>
        </section>
        <section>
          <h2>Paragrph with Bullets</h2>
          <ul>
            <li>Header</li>
            <li>Subhead</li>
            <li>Body Copy</li>
            <li>Bullet Section Header</li>
            <li>
              Bullet Groups 
              <ul>
                <li>Group Title</li>
                <li>Bullets</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Paragaph with Links</h2>
          <ul>
            <li>**No actual paragraph or header to edit</li>
            <li>Link Column Header</li>
            <li>Link Column Subheader</li>
            <li>Link groups for each column</li>
          </ul>
        </section>
      </div>  
      <section>
        <div className="content-wrapper">
          <h2>Image with Text Overlay</h2>
          <ul>
            <li>Background image, full width or with margins</li>
            <li>Header</li>
            <li>Subhead</li>
            <li>Body Copy</li>
            <li>Text overlay alginment on Desktop (left, center, right)</li>
            <li>CTA Button</li>
            <li>Overlay Gradient Background</li>
          </ul>
        </div>
        <HeroBanner header="Header" />
      </section>
    </>
  );
}

export default StyleGuide;