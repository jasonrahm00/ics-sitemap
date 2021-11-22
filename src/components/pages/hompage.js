import ImgTextOverlay from "../cms-components/image-text-overlay/imgTextOverlay";
import UserSegmentationWrapper from "../cms-components/user-segmentation/userSegmentationWrapper";
import UserSegmentationCard from "../cms-components/user-segmentation/userSegmentationCard";
import TileCollection from "../cms-components/tile-collection/tileCollection";
import { FeaturedProducts } from "../cms-components/tile-collection/tiles/tile-groupings";
import { PlaceholderText } from "../../utility/variables";
import PlaceholderImage from '../../media/placeholder-image-large.png';
import MediaAdjText from "../cms-components/media-adj-text/mediaAdjText";

function Homepage() {
  return (
    <>
      <ImgTextOverlay 
        header={'ICS Diamond Tools'} 
        headerTag="h1"
        subheaderTag="h2"
        subheader="Don’t Just Cut. Conquer"
        text={<p>As the world leader and pioneering force in Diamond Chain Technology, ICS concrete chainsaws and diamond chains have revolutionized concrete cutting in the construction industry.  At ICS, we know you don’t have time for tools that are just “good enough”. Your tools had better not just show up, but measure up. Like you, we believe there are no substitutes for hard work and absolutely no shortcuts to getting the job done right. All our products are designed, engineered and manufactured for you to outwork your competition, outlast the toughest jobs, and outperform any challenge.  Your unfair advantage is here, and it’s brought to you by ICS.</p>} 
      />

      <div className="padding-top">
        <UserSegmentationWrapper cards={
          [
            <UserSegmentationCard 
              header='ICS Brand Products'
              image={PlaceholderImage}
              bodyText={PlaceholderText}
              ctaURL='/products/ics'
              ctaText='ICS Brand Page'
            />,
            <UserSegmentationCard 
              header='Merit Brand Products'
              image={PlaceholderImage}
              bodyText={PlaceholderText}
              ctaURL='/products/merit'
              ctaText='Merit Brand Page'
            />,
            <UserSegmentationCard 
              header='Pentruder Brand Products'
              image={PlaceholderImage}
              bodyText={PlaceholderText}
              ctaURL='/products/pentruder'
              ctaText='Pentruder Brand Page'
            />,
          ]
        }/>
      </div>

      <TileCollection tileGroup={FeaturedProducts} />

      <MediaAdjText 
        header='Video with Adjacent Text'
        bodyText={<p>{PlaceholderText}</p>}
        textPlacement='right'
        videoId='NnaJTRqgXWE'
      />
      
      {/* Notes */}
      <ul className="content-wrapper padding-top">
        <li>Homepage
          <ul>
            <li>Hero banner</li>
            <li>User segmentation, Brands with CTA to individual shop by brand page</li>
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
    </>
  );
}

export default Homepage;