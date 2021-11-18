import MediaAdjText from "./mediaAdjText";
import LargePlaceholderImage from '../../../media/placeholder-image-large.png';
import { PlaceholderText } from "../../../utility/variables";
import { DefaultLinkGroup, DefaultBulletGroup } from "../base-cms-components/list-groups/reusable-list-groups";
import { BulletList, BullletListGroup } from "../base-cms-components/list-groups/listGroups";
import ChemicalWarning from "../../base/chemicalWarning";

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
      bodyText={<p>{PlaceholderText}</p>}
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
      bodyText={<p>{PlaceholderText}</p>}
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
      header='Flat Saws'
      ctaUrl='/products/flat-saws'
      ctaText='Merit Flat Saws'
      bodyText={<p>Our flat saws are available multiple configurations and power sources to fit your job requirements. Hand crafted, machined, assembled, and fully welded with high grade steel in the USA.</p>}
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
      bodyText={<p>{PlaceholderText}</p>}
      textPlacement='right'
      image={LargePlaceholderImage}
    />
  )
}

export const MWATICS680Cutters = () => {
  return (
    <MediaAdjText 
      header='680ES Series Gas Power Cutters'
      ctaUrl='/products/ics/gas-power-cutters/680-series'
      ctaText='680ES Series Gas Power Cutters'
      bodyText={
        <p>Built to meet the operation and flexibility demands of the general construction user, the 680ES stands alone in terms of reliability and value. Easy to start with a new multifunction lever to control choke, run, and stop functions. The powerhead houses specially designed carburetion and ignition systems that work together for easy starting, cooler operation, and dependable performance at just about any elevation. Available with 12 in. (30 cm) and 14 in. (35 cm) guide bars and the entire line of FORCE3® Series diamond chain.</p>
      }
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          bulletLists={[
            <BulletList bullets={[
              'Polyester air filter designed specifically for wet cutting',
              'Operates FORCE3™ diamond chain consumables up to 14 in. (35cm)',
              'Multifunction lever controls choke, throttle advance, run and stop modes', 
              'Extended drive sprocket adapter offers easy chain assembly', 
              'Deep cutting solution for obstructed or small openings', 
              'Cut squares as small as 4 in. x 4 in. (10 cm x 10 cm)', 
              'Easy-to-start in all weather' 
            ]} />
          ]}
        />
      }
    />
  )
}

export const MWATICS695Cutters = () => {
  return (
    <MediaAdjText 
      header='695XL Series Gas Power Cutters'
      ctaUrl='/products/ics/gas-power-cutters/695-series'
      ctaText='695XL Series Gas Power Cutters'
      bodyText={<>
        <p>The new 695XL features an easy-to-start engine with a higher energy ignition system and durable, long-lasting components including a new muffler, carburetor, and piston and cylinder. Based on the best-selling 695 saw platform, the 695XL is the highest horsepower ICS gas power cutter for frequent-use by general construction, utility contractors, and concrete professionals. Available with 12 in. (30 cm), 16 in. (40cm) guide bars and the entire line of FORCE3®, FORCE4®, and PowerGrit® Series diamond chains.</p>
        <ChemicalWarning />
      </>}
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          bulletLists={[
            <BulletList bullets={[
              'Use on concrete, stone, masonry, ductile iron pipe, cast iron pipe, and more',
              'Most versatile gas-power cutter',
              'New piston and cylinder lowers engine temperature',
              'Longer life muffler with reinforced internal baffle',
              'Easy-to-start with higher energy ignition system',
              'New easy-to-tune carburetor',
            ]} />
          ]}
        />
      }
    />
  )
}

export const MWATICS890Cutters = () => {
  return (
    <MediaAdjText 
      header='890F4 Series'
      ctaUrl='/products/ics/gas-power-cutters/890-series'
      ctaText='890F4 Series'
      bodyText={
        <>
          <p>The ICS 890 Series hydraulic cutting system offers the superior strength of FORCE4® technology. From the redesigned, more durable rear handle, to the easy to replace drive sprocket, this power cutter is engineered to stand up to your toughest jobs. In a package that exceeds industry standards, this sleek powerhouse is packed with features designed to make it work as hard as you do.</p>
          <ChemicalWarning />
        </>
      }
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          bulletLists={[
            <BulletList bullets={[
              'Redesigned rear handle offers improved ergonomic cutting and greater durability',
              '3 scratch resistant bubble levels for more accurate vertical and horizontal cutting',
              'New drive sprocket design allows for quick replacement in the field',
              'Universal motor across 890 series power cutter platforms and compatible with ICS 880 series power cutter',
              'Available with 1 ft and 8 ft hoses; ½ in quick disconnects included for convenience',
              'New secondary water shut off valve for flow metering and water conservation',
            ]} />
          ]}
        />
      }
    />
  )
}

export const MWATICS890FCutters = () => {
  return (
    <MediaAdjText 
      header='890F4-FLUSH Series'
      ctaUrl='/products/ics/gas-power-cutters/890-f-series'
      ctaText='890F4-FLUSH Series'
      bodyText={
        <>
          <p>The ICS 890 Series hydraulic cutting system offers the superior strength of FORCE4® technology. From the redesigned, more durable rear handle, to the easy to replace drive sprocket, this power cutter is engineered to stand up to your toughest jobs. In a package that exceeds industry standards, this sleek powerhouse is packed with features designed to make it work as hard as you do.</p>
          <ChemicalWarning />
        </>
      }
      textPlacement='right'
      image={LargePlaceholderImage}
      bulletGroup={
        <BullletListGroup 
          bulletLists={[
            <BulletList bullets={[
              'Cuts within 3/16 in of a wall',
              'Redesigned rear handle offers improved ergonomic cutting and greater durability',
              '3 scratch resistant bubble levels for more accurate vertical and horizontal cutting',
              'New drive sprocket design allows for quick replacement in the field',
              'Universal motor across 890 series power cutter platforms and compatible with ICS 880 series power cutter',
              'Available with 1 ft or 8 ft hoses; 1/2 in quick disconnects included for convenience',
              'New secondary water shut off valve for flow metering and water conservation',
            ]} />
          ]}
        />
      }
    />
  )
}

export const VWATVideoLibraryDefault = () => {
  return (
    <MediaAdjText 
      header='Some Popular Brand Video'
      bodyText={<p>{PlaceholderText}</p>}
      textPlacement='left'
      videoId='NnaJTRqgXWE'
      linkGroup={<DefaultLinkGroup />}
    />
  )
}