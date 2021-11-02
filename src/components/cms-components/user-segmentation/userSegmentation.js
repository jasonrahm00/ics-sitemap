import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from '@mui/material/CardMedia';

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
      {/* Dev notes: Use MUI Grid and Card to build out. Limit grid to 3. */}
    </>
    
  );
}

export default UserSegmentation;