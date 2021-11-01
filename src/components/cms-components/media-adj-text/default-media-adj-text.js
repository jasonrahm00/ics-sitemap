import MediaAdjText from "./mediaAdjText";
import LargePlaceholderImage from '../../../media/placeholder-image-large.png';
import { PlaceholderText } from "../../../utility/variables";
import { DefaultLinkGroup, DefaultBulletGroup } from "../base-cms-components/list-groups/reusable-list-groups";

const IWATComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Image with Adjacent Text</h2>
      <p>Image width will stretch/shrink to fit the available space with height scaling porportionately. If the source image is too small for the intended space, it will warp or pixelate</p>
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
  )
};

export const VWATComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>Video with Adjacent Text</h2>
      <p>Video will open in a popup window as opposed to play inline. Dev is required to make it play inline.</p>
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
  )
};

export const IWATDefault = () => {
  return (
    <MediaAdjText 
      header='Image with Adjacent Text'
      subheader='Subheader'
      image={LargePlaceholderImage}
      showSpecs={true}
      specs={<IWATComponentSpecs />}
      ctaUrl='#'
      ctaText='CTA Text'
      bodyText={PlaceholderText}
      textPlacement='right'
      bulletGroup={<DefaultBulletGroup />}
      linkGroup={<DefaultLinkGroup />}
    />
  )
}

export const VWATDefault = () => {
  return (
    <MediaAdjText 
      header='Video with Adjacent Text'
      subheader='Subheader'
      showSpecs={true}
      specs={<VWATComponentSpecs />}
      ctaUrl='#'
      ctaText='CTA Text'
      bodyText={PlaceholderText}
      textPlacement='left'
      videoId='NnaJTRqgXWE'
      bulletGroup={<DefaultBulletGroup />}
      linkGroup={<DefaultLinkGroup />}
    />
  )
}
