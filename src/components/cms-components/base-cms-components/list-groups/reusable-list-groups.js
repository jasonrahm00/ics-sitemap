import { BullletListGroup, LinkListGroup } from './listGroups';
import { Link } from "react-router-dom";

export const DefaultBulletGroup = () => {
  return (
    <BullletListGroup 
      groupHeader='Bullet Group Header'
      column1Header='Column 1 Header'
      column1Bullets={['Column 1, Bullet 1', 'Column 1, Bullet 2', 'Column 1, Bullet 3']}
      column2Header='Column 2 Header'
      column2Bullets={['Column 2, Bullet 1', 'Column 2, Bullet 2', 'Column 2, Bullet 3']}
    />
  )
};

export const DefaultLinkGroup = () => {
  return (
    <LinkListGroup 
      groupHeader='Link Group Header'
      links={[
        <Link to="#">Link 1</Link>,
        <Link to="#">Link 2</Link>,
        <Link to="#">Link 3</Link>,
      ]}
    />
  )
};
