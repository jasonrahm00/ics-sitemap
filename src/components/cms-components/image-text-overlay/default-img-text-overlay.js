import ImgTextOverlay from "./imgTextOverlay";
import { PlaceholderText } from "../../../utility/variables";

export const FullWidthImgTextOverlay = () => {
  return (
    <ImgTextOverlay 
      header='Full Width Image with Text Overlay'
      subheader='Subheader'
      ctaText={'CTA Text'}
      text={PlaceholderText}
      to={'#'}
      showSpecs={true}
    />
  )
}

export const MarginsImgTextOverlay = () => {
  return (
    <ImgTextOverlay 
      header='Image Text Overlay with Margins'
      subheader='Subheader'
      ctaText='CTA Text'
      to='#'
      withMargins={true}
      text={PlaceholderText}
    />
  )
}