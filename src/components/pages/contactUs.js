import ParagraphHeadSubheadBody from "../cms-components/paragraph-head-subhead-body/paragraphHeadSubheadBody";
import TileCollection from "../cms-components/tile-collection/tileCollection";
import { AddressTilesGroup } from "../cms-components/tile-collection/tiles/tile-groupings";

function ContactUs() {
  return (
    <div className="padding-top">
      <ParagraphHeadSubheadBody headerTag='h1' header='Contact Us' bodyText='Please use the form below to contact us.  Please allow us up to 24 hours to make sure we properly route your message.  If you need immediate assistance, contact our customer service team.' />
      <TileCollection tileGroup={AddressTilesGroup} />
      <ParagraphHeadSubheadBody header='Get In Touch' bodyText="Insert HubSpot Contact Us Form" />
    </div>
  )
}

export default ContactUs;