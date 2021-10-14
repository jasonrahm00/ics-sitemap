import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './cardComponent.css';

const placeholderText = "I'm baby artisan try-hard put a bird on it, literally tattooed banjo deep v salvia. Bushwick you probably haven't heard of them gluten-free selfies, tbh post-ironic scenester four dollar toast marfa umami. Meh coloring book etsy selvage mlkshk lumbersexual drinking vinegar photo booth pop-up. Chicharrones occupy poke, fixie cloud bread asymmetrical mixtape wayfarers typewriter hexagon intelligentsia.";

function CardComponent({...props}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardHeader component="h3" title={props.header} action={props.verified ? <CheckCircleIcon /> : ''}/>
        <Typography variant="body2" color="text.secondary">
          {props.description.length ? props.description : placeholderText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link 
            to={{
              pathname: props.link,
              state: { 
                products: props.products,
                pageTitle: props.header
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

export default CardComponent;