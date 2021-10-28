import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ImgTextOverlay from "../cms-components/image-text-overlay/imgTextOverlay";
import ImgAdjText from "../cms-components/img-adj-text/imgAdjText";
import ParagraphBullets from "../cms-components/paragraph-bullets/paragraphBullets";
import ParagraphHeadSubheadBody from "../cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import ParagraphLinks from "../cms-components/paragraph-links/paragraphLinks";
import UserSegmentation from "../cms-components/user-segmentation/userSegmentation";
import VideoAdjacentText from "../cms-components/vid-adj-text/vidAdjText";
import TileCollection from '../cms-components/tileCollection/tileCollection';

const components = [
  {
    value: 'Image with Text Overlay',
    component: <ImgTextOverlay showSpecs="true" header="Header" />
  },
  {
    value: 'Image with Adjacent Text',
    component: <ImgAdjText showSpecs="true" />
  },
  {
    value: 'Paragraph with Bullets',
    component: <ParagraphBullets showSpecs="true" />
  },
  {
    value: 'Tile Collection Component',
    component: <TileCollection showSpecs="true" />
  },
  {
    value: 'Paragraph with Header Subheader Body',
    component: <ParagraphHeadSubheadBody showSpecs="true" />
  },
  {
    value: 'Paragraph with Links',
    component: <ParagraphLinks showSpecs="true" />
  },
  {
    value: 'User Segmentation Component',
    component: <UserSegmentation showSpecs="true" />
  },
  {
    value: 'Video with Adjacent Text',
    component: <VideoAdjacentText showSpecs="true" />
  }
];

function StyleGuide() {

  const [componentIndex, setComponent] = React.useState(0);

  const handleChange = (event) => {
    setComponent(event.target.value);
  };

  return (
    <>
      <div className="content-wrapper padding-top">
        <h1>Hybris Custom Component Style Guide</h1>
        <p>All components allow site editors to individually control the header and body copy colors, rudimentary control of the width of the component as well as background color or the inclusion of a background image; use of a background image for anything other than the Image with Text Overlay component is not recommended.</p>
        <Box sx={{ width: 400, paddingTop: 2.5, paddingBottom: 2.5 }}>
          <FormControl fullWidth>
            <InputLabel id="component-selector-label">Component</InputLabel>
            <Select
              labelId="component-selector-label"
              id="component-selector"
              value={componentIndex}
              label="Component"
              onChange={handleChange}
            >
              {components.map((component, index) => {
                return (
                  <MenuItem key={index} value={index}>{component.value}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
      {componentIndex !== null ? (
        (
          <>
            {components[componentIndex].component}
          </>
        )
      ) : ''}
    </>
  );
}

export default StyleGuide;