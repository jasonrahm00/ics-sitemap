import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import LinkButton from '../base-cms-components/link-button/linkButton';

import './userSegmentation.css';

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

function UserSegmentation({...props}) {
  return (
    <>
      { props.showSpecs && <ComponentSpecs /> }
      <Card>
        {props.header && (
          <CardHeader component="h2">
            {props.header}
          </CardHeader>
        )}
        {props.image && (
          <CardMedia component="img" media={props.image} />
        )}
        {props.subheder && (
          <CardHeader component="h3">
            {props.subheader}
          </CardHeader>
        )}
        {props.bodyText && (
          <Typography component="div" variant="body2" color="text.secondary">
            {props.bodyText}
          </Typography>
        )}
        {props.ctaURL && props.ctaText.length && (
          <CardActions>
            <LinkButton ctaText={props.ctaText} to={props.ctaURL} />
          </CardActions>
        )}
        {props.linkGroup && props.linkGroup}
      </Card>
    </>
    
  );
}

export default UserSegmentation;