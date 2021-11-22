import UserSegmentationWrapper from "./userSegmentationWrapper";
import PlaceholderImage from '../../../media/placeholder-image-large.png'
import { PlaceholderText } from "../../../utility/variables";
import UserSegmentationCard from "./userSegmentationCard";
import { Link } from "react-router-dom";
import { LinkListGroup } from "../base-cms-components/list-groups/listGroups";

const TestLinkGroup = () => {
  return (
    <LinkListGroup 
      links={[
        <Link to="#">Link 1</Link>,
        <Link to="#">Link 2</Link>,
        <Link to="#">Link 3</Link>,
        <Link to="#">Link 4</Link>,
      ]}
    />
  )
}

const ComponentSpecs = () => {
  return (
    <section className="content-wrapper">
      <h2>User Segmentation</h2>
      <p>*Designed to only be used on the homepage in the available space below the hero banner. There are constraints to that part of the template that will prevent this component from stretching the entie page; otherwise alignment willl be wonky and the image will stretch and pixelate.</p>
      <p>**The surrounding container also does not allow for much flexibillity. It expects three components to be added and divides the space into thirds. Fewer than three, the conponents each only take up a third of the space. Add more than three and the components are shrunk; they do not wrap.</p>
      <ul>
        <li>Image</li>
        <li>Header</li>
        <li>Subheader</li>
        <li>Body Copy</li>
        <li>Link Section with Title</li>
        <li>CTA Button</li>
      </ul>
    </section>
  )
}

function DefaultSegmentation() {
  return (
    <>
      <ComponentSpecs />
      <UserSegmentationWrapper cards={[
        <UserSegmentationCard 
          header='Header 1' 
          subheader='Subheader 1'
          image={PlaceholderImage}
          bodyText={PlaceholderText}
          ctaURL='#'
          ctaText='CTA Text'
          linkGroup={<TestLinkGroup />}
        />,
        <UserSegmentationCard 
          header='Header 2' 
          subheader='Subheader 2'
          image={PlaceholderImage}
          bodyText={PlaceholderText}
          ctaURL='#'
          ctaText='CTA Text'
          linkGroup={<TestLinkGroup />}
        />,
        <UserSegmentationCard 
          header='Header 3' 
          subheader='Subheader 3'
          image={PlaceholderImage}
          bodyText={PlaceholderText}
          ctaURL='#'
          ctaText='CTA Text'
          linkGroup={<TestLinkGroup />}
        />,
      ]} />
    </>
    
  );
}

export default DefaultSegmentation;