import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';
import CategoryContent from '../../components/pages/categoryContentPage';
import ParagraphHeadSubheadBody from '../../components/cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody';
import { AllDocTiles } from '../../components/cms-components/tile-collection/tiles/document-tiles';
import TileCollection from '../../components/cms-components/tile-collection/tileCollection';
import { TileGroup } from '../../utility/constructors';
import { VWATVideoLibraryDefault } from '../../components/cms-components/media-adj-text/default-media-adj-text';

const CustomerSupportRoutes = [
  new RouteObject('/contact-us', () => <ContentPage title={'Contact Us'}/>),
  new RouteObject('/find-dealer', () => <ContentPage title={'Find a Dealer'}/>),
  new RouteObject('/product-registration', () => <ContentPage title={'Product Registration'}/>),
  new RouteObject('/videos', 
  () => <ContentPage components={[
    <ParagraphHeadSubheadBody header="Video Library" bodyText="Display a handful of videos in VWTO component with either links to additional videos or a separate CTA somehwere on the page linking to the YouTube channel"/>,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
  ]}/>
),
  new RouteObject('/demo-request', () => <ContentPage title={'Request a Demo'}/>),
  new RouteObject('/service-centers', () => <ContentPage title={'Service Centers'}/>),
  new RouteObject('/document-library', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header="Document Library" />,
      <TileCollection tileGroup={new TileGroup('', '', AllDocTiles)} />
    ]}/>
  ),
  new RouteObject('/document-library/product-manuals', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Product Manuals' />
    ]}/>
  ),
  new RouteObject('/document-library/parts-lists', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Parts Lists' />
    ]}/>
  ),
  new RouteObject('/document-library/service-manuals', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Service Manuals' />
    ]}/>
  ),
  new RouteObject('/document-library/catalogs', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Catalogs' />
    ]}/>
  ),
  new RouteObject('/document-library/data-sheets', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Data Sheets' />
    ]}/>
  ),
  new RouteObject('/document-library/tip-sheets', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Tip Sheets' />
    ]}/>
  ),
  new RouteObject('/document-library/safety-sheets', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody header='Safety Data Sheets' />
    ]}/>
  ),
];

export default CustomerSupportRoutes;
