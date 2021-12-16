import ContentPage from '../../components/pages/contentPage';
import { RouteObject } from '../../utility/constructors';
import CategoryContent from '../../components/pages/categoryContentPage';
import ParagraphHeadSubheadBody from '../../components/cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody';
import { AllDocTiles } from '../../components/cms-components/tile-collection/tiles/document-tiles';
import TileCollection from '../../components/cms-components/tile-collection/tileCollection';
import { TileGroup } from '../../utility/constructors';
import { VWATVideoLibraryDefault } from '../../components/cms-components/media-adj-text/default-media-adj-text';
import ContactUs from '../../components/pages/contactUs';

const CustomerSupportRoutes = [
  new RouteObject('/contact-us', () => <ContactUs />),
  new RouteObject('/find-dealer', () => <ContentPage components={[
    <ParagraphHeadSubheadBody 
      headerTag='h1' 
      header='Find a Dealer' 
      bodyText={<p>Interested in purchasing an ICS product? Our network of dealers is here to help.</p>} 
      />,
    <ParagraphHeadSubheadBody bodyText='Insert Storepoint App here' />
  ]} />),
  new RouteObject('/product-registration', () => <ContentPage components={[
    <ParagraphHeadSubheadBody headerTag='h1' header='Register a Product' bodyText="Get ICS's full range of customer support, including product notices, maintenance reminders, troubleshooting tips and previews of new products. Register your cutting systems, power pack and accessories today." />,
    <ParagraphHeadSubheadBody headerTag='h2' header='Product Registration Form' bodyText='Insert HubSpot Product Registration Form' />
  ]} />),
  new RouteObject('/videos', 
  () => <ContentPage components={[
    <ParagraphHeadSubheadBody 
      header="Video Library" 
      headerTag='h1'
      bodyText={<p>Handy tips and tricks from the experts to help you get your job done right the first time.</p>}
    />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
    <VWATVideoLibraryDefault />,
  ]}/>
),
  new RouteObject('/demo-request', () => <ContentPage components={[
    <ParagraphHeadSubheadBody 
      headerTag='h1' 
      header='Request a Demo'
      bodyText={<p>Take us for a test drive.  Fill out the form below and one of our sales team will reach out.  </p>} 
    />
  ]} />),
  new RouteObject('/service-centers', () => <ContentPage components={[
    <ParagraphHeadSubheadBody 
      headerTag='h1' 
      header='Service Centers'
      bodyText={<p>At ICS, your satisfaction is paramount. If for some reason, your equipment is not performing as promised, we want to know. Please call 800.321.1240 or email ics.service@oregontool.com</p>} 
    />
  ]} />),
  new RouteObject('/document-library', 
    () => <CategoryContent components={[
      <ParagraphHeadSubheadBody 
        header="Document Library"
        bodyText={<p>Access to operator manuals, data sheets, parts list and more.</p>} 
      />,
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
