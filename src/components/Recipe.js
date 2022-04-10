import React, { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    
    root: {
      borderRadius: 12,
      background: 'linear-gradient(#FFFFFF 30%, #D2B48C 90%)',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
        useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/recipes');
        const items = await data.json();
        setItems(items);
    };

  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (

      <Card className={classes.root}>
              <div class="recipes">
                 <h1 class="mt-5">Recipes</h1>
                 <h5 class="mt-5"> Browse our recipes or submit your own</h5>
                 <form method="POST" action="/addRecipe">
                     <div class="input-group justify-content-center">
                         <div class="input-group-prepend">                             <input type="text" name="recipeName" placeholder="Recipe Name" class="form-control" />
                             <input type="text" name="recipeIngredients" placeholder="Ingredients" class="form-control" />
                             <input type="text" name="recipeSteps" placeholder="Steps" class="form-control" />
                             <input type="text" name="recipeURL" placeholder="Link" class="form-control" />
                             <input type="submit" value="Send" class="btn btn-primary mb-2" />

                         </div>
                     </div>
    
                 </form>
                 <Sidebar />
                 </div>


        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  

// function Recipe() {
//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const [items, setItems] = useState([]);

//     const fetchItems = async () => {
//         const data = await fetch('/recipes');
//         const items = await data.json();
//         setItems(items);
//     };

//     return (
//         <body style={{
//             background: "linear-gradient(#FFFFFF, #D2B48C)",
//             height: '1000px'

//         }}>
//         <section>
//             <div class="recipes">
//                 <h1 class="mt-5">Recipes</h1>
//                 <h5 class="mt-5"> Browse our recipes or submit your own</h5>
//                 <form method="POST" action="/addRecipe">
//                     <div class="input-group justify-content-center">
//                         <div class="input-group-prepend">

//                             <input type="text" name="recipeName" placeholder="Recipe Name" class="form-control" />
//                             <input type="text" name="recipeIngredients" placeholder="Ingredients" class="form-control" />
//                             <input type="text" name="recipeSteps" placeholder="Steps" class="form-control" />
//                             <input type="text" name="recipeURL" placeholder="Link" class="form-control" />
//                             <input type="submit" value="Send" class="btn btn-primary mb-2" />

//                         </div>
//                     </div>
    
//                 </form>
//                 <Sidebar />

//                 {
                    
//                     items.map(item => (
//                         <div class="accordion" id="accordionExample">
//                             <div class="card">
//                                 <div class="card-header" id="headingOne">
//                                     <h2 class="mb-0">
//                                         <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                             <i> Recipe for {item.name} </i>
//                                         </button>
//                                     </h2>
//                                 </div>

//                                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//                                     <div class="card-body">
//                                         <img src={item.imageURL} height="150" width="150" />
//                                         <div> <b>Steps:</b> <li>{item.steps}</li> </div>


//                                         <div> <b>Ingredients:</b> <li>{item.ingredients}</li> </div>
                                        



//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     ))
//                 }
//             </div>
//         </section>
//         </body>
//     );
// }

// export default Recipe;


// <i class="fa fa-user mr-2"></i> <i> imageURL: {item.imageURL} Recipe for {item.name} ... Steps {item.steps} </i>