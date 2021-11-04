import MediaAdjText from "./mediaAdjText";
import LargePlaceholderImage from '../../../media/placeholder-image-large.png';
import { PlaceholderText } from "../../../utility/variables";
import { DefaultLinkGroup, DefaultBulletGroup } from "../base-cms-components/list-groups/reusable-list-groups";
import { BulletList, BullletListGroup } from "../base-cms-components/list-groups/listGroups";

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

export const MWATMeritFlatSaws = () => {
  return (
    <MediaAdjText 
      header='Merit Flat Saws'
      ctaUrl='/products/flat-saws'
      ctaText='Merit Flat Saws'
      bodyText={PlaceholderText}
      textPlacement='right'
      image={LargePlaceholderImage}
    />
  )
}

export const MWATPentruderSaws = () => {
  return (
    <MediaAdjText 
      header='Pentruder Saws'
      ctaUrl='/products/pentruder/saws'
      ctaText='Pentruder Saws'
      bodyText={PlaceholderText}
      textPlacement='right'
      image={LargePlaceholderImage}
    />
  )
}

export const MWATICS680Cutters = () => {
  return (
    <MediaAdjText 
      header='680 Series Power Cutters'
      ctaUrl='/products/ics/gas-power-cutters/680-series'
      ctaText='680 Series Power Cutters'
      bodyText={PlaceholderText}
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          groupHeader='Key Features of the 680 Series'
          bulletLists={[
            <BulletList bullets={['List 1, Bullet 1', 'List 1, Bullet 2', 'List 1, Bullet 3']} />
          ]}
        />
      }
    />
  )
}

export const MWATICS695Cutters = () => {
  return (
    <MediaAdjText 
      header='695 Series Power Cutters'
      ctaUrl='/products/ics/gas-power-cutters/695-series'
      ctaText='695 Series Power Cutters'
      bodyText={PlaceholderText}
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          groupHeader='Key Features of the 695 Series'
          bulletLists={[
            <BulletList bullets={['List 1, Bullet 1', 'List 1, Bullet 2', 'List 1, Bullet 3']} />
          ]}
        />
      }
    />
  )
}

export const MWATICS890Cutters = () => {
  return (
    <MediaAdjText 
      header='890 Series Power Cutters'
      ctaUrl='/products/ics/gas-power-cutters/890-series'
      ctaText='890 Series Power Cutters'
      bodyText={PlaceholderText}
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          groupHeader='Key Features of the 890 Series'
          bulletLists={[
            <BulletList bullets={['List 1, Bullet 1', 'List 1, Bullet 2', 'List 1, Bullet 3']} />
          ]}
        />
      }
    />
  )
}

export const MWATICS890FCutters = () => {
  return (
    <MediaAdjText 
      header='890F Series Power Cutters'
      ctaUrl='/products/ics/gas-power-cutters/890-f-series'
      ctaText='890F Series Power Cutters'
      bodyText={PlaceholderText}
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          groupHeader='Key Features of the 890F Series'
          bulletLists={[
            <BulletList bullets={['List 1, Bullet 1', 'List 1, Bullet 2', 'List 1, Bullet 3']} />
          ]}
        />
      }
    />
  )
}