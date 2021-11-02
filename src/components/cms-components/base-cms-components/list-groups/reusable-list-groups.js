import { BullletListGroup, LinkListGroup, BulletList } from './listGroups';
import { Link } from "react-router-dom";

export const DefaultBulletGroup = () => {
  return (
    <BullletListGroup 
      groupHeader='Bullet Group Header'
      bulletLists={[
        <BulletList listHeader='List 1 Header' bullets={['List 1, Bullet 1', 'List 1, Bullet 2', 'List 1, Bullet 3']} />,
        <BulletList listHeader='List 2 Header' bullets={['List 2, Bullet 1', 'List 2, Bullet 2', 'List 2, Bullet 3']} />
      ]}
    />
  )
};

export const DefaultLinkGroup = () => {
  return (
    <LinkListGroup 
      header='Link Group Header'
      links={[
        <Link to="#">Link 1</Link>,
        <Link to="#">Link 2</Link>,
        <Link to="#">Link 3</Link>,
      ]}
    />
  )
};
