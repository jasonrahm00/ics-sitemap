import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from '@mui/material/CardMedia';

import { PlaceholderText } from '../../../../utility/variables';
import LinkButton from '../../base-cms-components/linkButton/linkButton';
import './tileComponent.css';

function TileComponent({...props}) {

  let to = {
    pathname: props.link,
    state: {
      products: props.products,
      pageTitle: props.header,
      customCrumbs: props.customCrumbs ? props.customCrumbs : null
    },
  };

  return (
    <Card sx={{ width: props.width }} raised={true}>
      {props.image ? (
        <CardMedia 
          component="img"
          image={props.image}
        />
      ) : ''}
      <CardContent>
        <CardHeader component="span" title={props.header} subheader={props.subheader} action={props.verified ? <CheckCircleIcon /> : ''}/>
        <Typography variant="body2" color="text.secondary" className={!props.description.length ? 'no-description' : ''}>
          {props.description.length ? props.description : PlaceholderText}
        </Typography>
      </CardContent>
      <CardActions>
        <LinkButton linkText={props.dest} to={to} />
      </CardActions>
    </Card>
  );
}

export default TileComponent;