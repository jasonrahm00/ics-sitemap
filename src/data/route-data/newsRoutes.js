import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject } from '../../utility/constructors';
import ParagraphHeadSubheadBody from "../../components/cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import { PlaceholderText } from "../../utility/variables";
import ReusableTileCollections from "../../components/cms-components/tile-collection/reusableTileCollections";

const NewsRoutes = [
  new RouteObject('/news-features', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="News & Features"
        bodyText={`Find feature articles, new product information, photos, how-to-videos and ways ICS is changing the industry.`}
      />,
      ReusableTileCollections.newsFeatures,
      ReusableTileCollections.newsProducts,
      ReusableTileCollections.newsGuides
    ]} />
  ),
  new RouteObject('/news-features/battle-tested', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Battle Tested"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/change-is-good', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Change is Good"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/pentruder-beats-clock', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Pentruder Beats the Clock"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/bridging-gap', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Bridging the Gap"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/precision-required', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Precision Required"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/concrete-pipe-tap', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Concrete Pipe Tap"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/egress-window', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Egress Window"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/small-openings', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Smalll Openings"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/kickback-study', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Kickback Study"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/news-features/overview-crosslink', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Overview: Crosslink"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
];

export default NewsRoutes