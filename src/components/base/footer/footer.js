import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import './footer.css';

import footerNavData from './footerNavData';

function Footer() {
  return (
    <footer>
      <nav className="content-wrapper">
        {footerNavData.map(column => {
          return (
            <div key={column.column}>
              {column.sections.map((section, secIndex) => {
                return (
                  <section key={secIndex}>
                    <h2>{section.sectionHeader}</h2>
                    <List component="ul" disablePadding={true}>
                      {section.sectionLinks.map((link, linkIndex) => {
                        return (
                          <ListItem key={linkIndex} disablePadding={true}>
                            {link} 
                          </ListItem>
                        )
                      })}
                    </List>
                  </section>
                )
              })}
            </div>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;