import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import SharedLinks from '../reusableNavLinks';
import { SocialLink } from '../../../utility/constructors';


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
          SharedLinks.icsBrandLink, 
          SharedLinks.meritBrandLink, 
          SharedLinks.pentruderBrandLink,
          SharedLinks.powerCutters,
          SharedLinks.flatSaws,
          SharedLinks.wallWireSaws,
          SharedLinks.diamondChains,
          SharedLinks.partsAccessories
        ]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'About',
        sectionLinks: [SharedLinks.aboutICS, <CareersLink />]
      },
      {
        sectionHeader: 'Where to Buy',
        sectionLinks: [SharedLinks.findDealer]
      }
    ]
  },
  {
    sections: [
      {
        sectionHeader: 'Resources',
        sectionLinks: [
          SharedLinks.contactUs, 
          SharedLinks.productRegistration, 
          SharedLinks.proCorner, 
          SharedLinks.docLibrary,
          SharedLinks.styleGuide
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