import sharedLinks from '../../../data/reusableNavLinks';
import { SocialLink } from '../../../utility/constructors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';


const CareersLink = () => {
  return (
    <a href="https://www.oregontool.com/careers/">Careers</a>
  )
};

const socialChannels = [
  new SocialLink('Facebook', 'https://www.facebook.com/icsdiamondtools/', <FacebookIcon />),
  new SocialLink('Youtube', 'https://www.youtube.com/user/concretechainsaw', <YouTubeIcon />),
  new SocialLink('Instagram', 'https://www.instagram.com/icsdiamondtools/', <InstagramIcon />),
  new SocialLink('LinkedIn', 'https://www.linkedin.com/company/icsdiamondtools/', <LinkedInIcon />)
];

const footerNavData = [
  {
    sections: [
      {
        sectionHeader: 'products',
        sectionLinks: [
          sharedLinks.icsBrandLink, 
          sharedLinks.meritBrandLink, 
          sharedLinks.pentruderBrandLink,
          sharedLinks.powerCutters,
          sharedLinks.flatSaws,
          sharedLinks.wallWireSaws,
          sharedLinks.diamondChains,
          sharedLinks.partsAccessories
        ]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'About',
        sectionLinks: [sharedLinks.aboutICS, <CareersLink />]
      },
      {
        sectionHeader: 'Where to Buy',
        sectionLinks: [sharedLinks.findDealer]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'Resources',
        sectionLinks: [
          sharedLinks.contactUs, 
          sharedLinks.productRegistration, 
          sharedLinks.proCorner, 
          sharedLinks.docLibrary,
          sharedLinks.styleGuide
        ]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'Contact',
        sectionLinks: ['Phone', 'Email']
      },
      {
        sectionHeader: 'Follow Us',
        sectionLinks: socialChannels.map((channel, index) => {
                        return(
                          <a href={channel.url} title={channel.channel} key={index}>
                            {channel.icon}
                          </a>
                        )
                      })
      }
    ]
  }
];

export default footerNavData;