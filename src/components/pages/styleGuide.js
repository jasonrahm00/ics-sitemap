import ImgTextOverlay from "../cms-components/image-text-overlay/imgTextOverlay";
import ImgAdjText from "../cms-components/img-adj-text/imgAdjText";
import ParagraphBullets from "../cms-components/paragraph-bullets/paragraphBullets";
import CardCollection from "../cms-components/vid-adj-text/vidAdjText";
import ParagraphHeadSubheadBody from "../cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import ParagraphLinks from "../cms-components/paragraph-links/paragraphLinks";
import UserSegmentation from "../cms-components/user-segmentation/userSegmentation";
import VideoAdjacentText from "../cms-components/vid-adj-text/vidAdjText";

function StyleGuide() {
  return (
    <>
      <div className="content-wrapper padding-top">
        <h1>Hybris Custom Component Style Guide</h1>
        <p>All components allow site editors to individually control the header and body copy colors, rudimentary control of the width of the component as well as background color or the inclusion of a background image (not recommended)</p>
      </div>  
      <ImgTextOverlay header="Header" showSpecs="true" />
      <div className="content-wrapper">
        <ImgAdjText />
        <ParagraphBullets />
        <CardCollection />
        <ParagraphHeadSubheadBody />
        <ParagraphLinks />
        <UserSegmentation />
        <VideoAdjacentText />
      </div>
      
    </>
  );
}

export default StyleGuide;