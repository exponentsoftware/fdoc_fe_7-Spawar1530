import React, {useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { projectFirestore } from '../firebase/config';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ImageGrid = ({ setSelectedImg }) => {
  const classes = useStyles();
  const { docs } = useFirestore('images');
  const [picid, setPicid] = useState('')

  const deleteImage = () => {
    projectFirestore
    .collection('images')
    .doc(picid)
    .delete()
    .then(res => {
       console.log('Product deleted Successfully');
     })
    .catch((error) => {
       console.error('Error removing document: ', error);
    });
  }

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
       <Card className={classes.root}>
       <CardActionArea>
         <CardMedia
           className={classes.media}
           image={doc.url}
           title={doc.title}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             {doc.title}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary"
         onMouseOverCapture={() => {
         setPicid(doc.id)
           console.log(picid)
         }}
         onClick={deleteImage}>
           Delete
         </Button>
       </CardActions>
     </Card>
      ))}
    </div>
  )
}

export default ImageGrid;

