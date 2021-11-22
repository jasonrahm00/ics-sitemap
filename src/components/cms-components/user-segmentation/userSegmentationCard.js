import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import LinkButton from '../base-cms-components/link-button/linkButton';

function UserSegmentationCard ({...props}) {
  return (
    <>
      <Card>
        {props.header && (
          <CardHeader component="h2" title={props.header} />
        )}
        {props.image && (
          <CardMedia component="img" image={props.image} />
        )}
        {props.subheader && (
          <CardHeader component="h3" title={props.subheader} />
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

export default UserSegmentationCard;