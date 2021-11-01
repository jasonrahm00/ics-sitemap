import { BullletListGroup, LinkListGroup, BulletList } from './listGroups';
import { Link } from "react-router-dom";

export const DefaultBulletGroup = () => {
  return (
    <BullletListGroup 
      groupHeader='Bullet Group Header'
      bulletLists={[
        <BulletList listHeader='Column 1 Header' bullets={['Column 1, Bullet 1', 'Column 1, Bullet 2', 'Column 1, Bullet 3']} />,
        <BulletList listHeader='Column 2 Header' bullets={['Column 2, Bullet 1', 'Column 2, Bullet 2', 'Column 2, Bullet 3']} />
      ]}
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
