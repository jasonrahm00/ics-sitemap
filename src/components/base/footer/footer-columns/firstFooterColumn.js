import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { ICSBrandNavLink, MeritBrandNavLink, PentruderBrandNavLink } from '../../reusableNavLinks';

function FirstFooterColumn() {
  return (
    <div>
      <section>
        <h2>Products</h2>
        <List component="ul" disablePadding={true}>
          <ListItem disablePadding={true}>
            <ICSBrandNavLink /> 
          </ListItem>
          <ListItem disablePadding={true}>
            <MeritBrandNavLink />
          </ListItem>
          <ListItem disablePadding={true}>
            <PentruderBrandNavLink />
          </ListItem>
        </List>
      </section>
    </div>

  );
}

export default FirstFooterColumn;