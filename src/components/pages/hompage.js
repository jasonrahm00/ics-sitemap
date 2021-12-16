import ImgTextOverlay from "../cms-components/image-text-overlay/imgTextOverlay";
import UserSegmentationWrapper from "../cms-components/user-segmentation/userSegmentationWrapper";
import UserSegmentationCard from "../cms-components/user-segmentation/userSegmentationCard";
import TileCollection from "../cms-components/tile-collection/tileCollection";
import { FeaturedProducts, TopActionsTileGroup } from "../cms-components/tile-collection/tiles/tile-groupings";
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
              bodyText="ICS’s growing line of industrial cutting systems includes gas, hydraulic, and pneumatic powerheads, guide bars, and our patented diamond chains for concrete, utility pipe, stone, and masonry work."
              ctaURL='/products/ics'
              ctaText='ICS Brand Page'
            />,
            <UserSegmentationCard 
              header='Merit Brand Products'
              image={PlaceholderImage}
              bodyText="Founded by professional concrete cutters for professional concrete cutters, Merit’s heavy-duty, high-performing floor saws are intuitive to operate and easy to maintain."
              ctaURL='/products/merit'
              ctaText='Merit Brand Page'
            />,
            <UserSegmentationCard 
              header='Pentruder Brand Products'
              image={PlaceholderImage}
              bodyText="Pentruder is considered the gold standard for high-frequency wall and wire saws by professional concrete cutters worldwide. ICS is proud to be the exclusive distributor of Pentruder for the Americas."
              ctaURL='/products/pentruder'
              ctaText='Pentruder Brand Page'
            />,
          ]
        }/>
      </div>

      <TileCollection tileGroup={FeaturedProducts} />

      <MediaAdjText 
        header='Born for the Tough Stuff'
        bodyText={<p>If we’re not talking about getting the job done, then why are we talking? We don’t bother with any other BS. Because the only thing that matters is doing the work the right way – and we’ll do whatever it takes to make sure it’s done.</p>}
        textPlacement='right'
        videoId='NnaJTRqgXWE'
      />

      <TileCollection tileGroup={TopActionsTileGroup} />
      
    </>
  );
}

export default Homepage;