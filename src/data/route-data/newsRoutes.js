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