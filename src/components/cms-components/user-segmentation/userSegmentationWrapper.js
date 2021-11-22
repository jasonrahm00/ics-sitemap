import { Grid } from "@mui/material";

import './userSegmentation.css';

function UserSegmentationWrapper ({...props}) {
  return (
    <div className="content-wrapper user-segmentation">
      <Grid container justifyContent="center" spacing={2} >
        {props.cards && props.cards.map((card, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              {card}
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
};

export default UserSegmentationWrapper;