import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './linkButton.css';

function LinkButton({...props}) {
  return (
    <Button size="small" className="link-button">
      <Link to={props.to}>
        {props.linkText}
      </Link>
    </Button>
  )
}

export default LinkButton;
