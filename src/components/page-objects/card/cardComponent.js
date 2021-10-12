import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import icsProduct from './ics-product.jpg';

function CardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={icsProduct}
        alt=""
      />
      <CardContent>
        <CardHeader component="h3" title="Example Product"/>
        <Typography variant="body2" color="text.secondary">
          I'm baby artisan try-hard put a bird on it, literally tattooed banjo deep v salvia. Bushwick you probably haven't heard of them gluten-free selfies, tbh post-ironic scenester four dollar toast marfa umami. Meh coloring book etsy selvage mlkshk lumbersexual drinking vinegar photo booth pop-up. Chicharrones occupy poke, fixie cloud bread asymmetrical mixtape wayfarers typewriter hexagon intelligentsia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;