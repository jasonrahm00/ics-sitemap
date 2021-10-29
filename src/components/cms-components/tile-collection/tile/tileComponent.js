import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from '@mui/material/CardMedia';

import { PlaceholderText } from '../../../../utility/variables';

import './tileComponent.css';

function TileComponent({...props}) {

  return (
    <Card sx={{ maxWidth: 345 }} raised={true}>
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
        <Button size="small">
          <Link 
            to={{
              pathname: props.link,
              state: {
                products: props.products,
                pageTitle: props.header,
                customCrumbs: props.customCrumbs ? props.customCrumbs : null
              },
            }}
          >
            {props.dest}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default TileComponent;