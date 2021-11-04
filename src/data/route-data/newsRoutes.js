import CategoryContent from "../../components/pages/categoryContentPage";
import { RouteObject, TileGroup } from '../../utility/constructors';
import TileCollection from "../../components/cms-components/tile-collection/tileCollection";
import ParagraphHeadSubheadBody from "../../components/cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import { PlaceholderText } from "../../utility/variables";
import { AllNewsTiles } from "../../components/cms-components/tile-collection/tiles/news-tiles";

const NewsRoutes = [
  new RouteObject('/news-features', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="News & Features"
        bodyText={PlaceholderText}
      />,
      <TileCollection tileGroup={new TileGroup('', '', AllNewsTiles)} />
    ]} />
  ),
  new RouteObject('/success-stories/battle-tested', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Battle Tested"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/change-is-good', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Change is Good"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/pentruder-beats-clock', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Pentruder Beats the Clock"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/bridging-gap', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Bridging the Gap"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/precision-required', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Precision Required"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/concrete-pipe-tap', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Concrete Pipe Tap"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/egress-window', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Egress Window"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/small-openings', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Smalll Openings"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/kickback-study', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        headerTag="h1"
        header="Kickback Study"
        bodyText={PlaceholderText}
      />,
    ]} />
  ),
  new RouteObject('/success-stories/overview-crosslink', 
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