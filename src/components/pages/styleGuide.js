import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

import ParagraphHeadSubheadBody from "../cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import ParagraphLinks from "../cms-components/paragraph-links/paragraphLinks";
import TileCollection from '../cms-components/tile-collection/tileCollection';

//Component Defaults
import {DefaulTileCollectionFew, DefaulTileCollectionSeveral} from '../cms-components/tile-collection/default-tile-collection';
import { FullWidthImgTextOverlay, MarginsImgTextOverlay } from '../cms-components/image-text-overlay/default-img-text-overlay';
import { IWATDefault, VWATDefault } from '../cms-components/media-adj-text/default-media-adj-text';
import DefaultParagraphBullets from '../cms-components/paragraph-bullets/default-paragraph-bullets';
import { PlaceholderText } from '../../utility/variables';
import DefaultSegmentation from '../cms-components/user-segmentation/defaultSegmentation';

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
    component: [
      <TileCollection showSpecs="true" tileGroup={DefaulTileCollectionFew} />,
      <TileCollection tileGroup={DefaulTileCollectionSeveral} />,
    ]
  },
  {
    value: 'Paragraph with Header Subheader Body',
    component: [
      <ParagraphHeadSubheadBody 
        showSpecs={true} 
        header="Paragraph with Header Subheader Body" 
        subheader="Full Width" 
        bodyText={PlaceholderText} 
      />,
      <ParagraphHeadSubheadBody 
        header="Paragraph with Header Subheader Body" 
        subheader="With Margins" 
        bodyText={PlaceholderText}
        withMargins={true} 
      />,
    ]
  },
  {
    value: 'Paragraph with Links',
    component: [
      <ParagraphLinks 
        showSpecs={true}
        column1Header='Column 1 Header'
        column1Subheader='Column 1 Subheader' 
        column1Links={[
          <Link to="#">Column 1, Link 1</Link>,
          <Link to="#">Column 1, Link 2</Link>,
          <Link to="#">Column 1, Link 3</Link>
        ]}
        column2Header='Column 2 Header'
        column2Subheader='Column 2 Subheader'  
        column2Links={[
          <Link to="#">Column 2, Link 1</Link>,
          <Link to="#">Column 2, Link 2</Link>,
          <Link to="#">Column 2, Link 3</Link>
        ]}
      />,
    ]
  },
  {
    value: 'User Segmentation Component',
    component: [<DefaultSegmentation />]
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
        <p>All components allow site editors to individually control the header and body copy colors, rudimentary control of the width of the component as well as background color or the inclusion of a background image; use of a background image for anything other than the Image with Text Overlay component is not recommended. Most components also include a Body Text field that is a WYSIWYG Editor, so additional text effects and layouts are available beyond what is controlled by the component template.</p>
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