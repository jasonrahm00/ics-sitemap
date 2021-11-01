import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ParagraphBullets from "../cms-components/paragraph-bullets/paragraphBullets";
import ParagraphHeadSubheadBody from "../cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import ParagraphLinks from "../cms-components/paragraph-links/paragraphLinks";
import UserSegmentation from "../cms-components/user-segmentation/userSegmentation";
import TileCollection from '../cms-components/tile-collection/tileCollection';

//Component Defaults
import DefaulTileCollection from '../cms-components/tile-collection/default-tile-collection';
import { FullWidthImgTextOverlay, MarginsImgTextOverlay } from '../cms-components/image-text-overlay/default-img-text-overlay';
import { IWATDefault, VWATDefault } from '../cms-components/media-adj-text/default-media-adj-text';
import DefaultParagraphBullets from '../cms-components/paragraph-bullets/default-paragraph-bullets';

const components = [
  {
    value: 'Image with Text Overlay',
    component: [<FullWidthImgTextOverlay />, <MarginsImgTextOverlay />]
  },
  {
    value: 'Image with Adjacent Text',
    component: [<IWATDefault />]
  },
  {
    value: 'Paragraph with Bullets',
    component: [<DefaultParagraphBullets />]
  },
  {
    value: 'Tile Collection Component',
    component: [<TileCollection showSpecs="true" tileGroup={DefaulTileCollection} />]
  },
  {
    value: 'Paragraph with Header Subheader Body',
    component: [<ParagraphHeadSubheadBody showSpecs="true" />]
  },
  {
    value: 'Paragraph with Links',
    component: [<ParagraphLinks showSpecs="true" />]
  },
  {
    value: 'User Segmentation Component',
    component: [<UserSegmentation showSpecs="true" />]
  },
  {
    value: 'Video with Adjacent Text',
    component: [<VWATDefault />]
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
            {components[componentIndex].component.map((comp, index) => {
              return (
                <div key={index} className="padding-top">
                  {comp}
                </div>
              )
            })}
          </>
        )
      ) : ''}
    </>
  );
}

export default StyleGuide;