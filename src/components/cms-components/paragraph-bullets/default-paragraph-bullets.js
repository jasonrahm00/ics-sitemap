import ParagraphBullets from "./paragraphBullets";
import { BullletListGroup, BulletList } from "../base-cms-components/list-groups/listGroups";
import { PlaceholderText } from "../../../utility/variables";

const DefaultParagraphBullets = () => {
  return (
    <ParagraphBullets 
      showSpecs={true}
      header='Paragraph with Bullets Component'
      subheader='Subheader'
      bodyText={PlaceholderText}
      bulletGroup={
        <BullletListGroup 
          groupHeader='Bullet List Group Header'
          bulletLists={[
            <BulletList listHeader='List 1 Header' bullets={['List 1, Bullet 1', 'List 1, Bullet 2', 'List 1, Bullet 3']} />,
            <BulletList listHeader='List 2 Header' bullets={['List 2, Bullet 1', 'List 2, Bullet 2', 'List 2, Bullet 3']} />,
            <BulletList listHeader='List 3 Header' bullets={['List 3, Bullet 1', 'List 3, Bullet 2', 'List 3, Bullet 3']} />,
            <BulletList listHeader='List 4 Header' bullets={['List 4, Bullet 1', 'List 4, Bullet 2', 'List 4, Bullet 3']} />,
            <BulletList listHeader='List 5 Header' bullets={['List 5, Bullet 1', 'List 5, Bullet 2', 'List 5, Bullet 3']} />,
            <BulletList listHeader='List 6 Header' bullets={['List 6, Bullet 1', 'List 6, Bullet 2', 'List 6, Bullet 3']} />,
          ]}
        />
      }
    />
  )
}

export default DefaultParagraphBullets;