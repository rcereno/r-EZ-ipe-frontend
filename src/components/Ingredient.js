import React, { useEffect, useState } from 'react';
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
      width: "50%",
      marginLeft:"25%",
      borderRadius: 40,
      background: 'linear-gradient(#FFFFFF 80%, #B1FAF6 110%)',
      marginTop:"5%",
      boxShadow: "1px 1px 25px #9E9E9E"
        
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
function Ingredient() {
    const [searchTerm, setSearch] = useState('')

    const classes = useStyles();
    const [setAnchorEl] = React.useState(null);
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
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return(
        <body style={{
            background: "linear-gradient(#FFFFFF)",
            height: '100%',
    
        }}>

        <section>
            
            <div class="ingredients">
            <Typography variant="h1" color="textSecondary">
                                    Find by ingredient
                                    <Typography variant="body1" color="textPrimary" component="p">
                                    Start typing to find matching ingrdients in our database
                                </Typography>
            </Typography>
                <form method="SEARCH" >
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="ingredientName" placeholder = "search..." class="form-control" onChange = {event => {setSearch(event.target.value)}} />
                        </div>
                    </div>
                </form>

                {
                    items.filter((item)=>{
                        if (searchTerm === ''){return item}
                        else if (item.ingredients.toLowerCase().includes(searchTerm.toLocaleLowerCase())){return item}
                        return false;
                    }).map((item,key)=> {

                        return <div className='ing' key={key}>{
                            <Card className={classes.root}>
                
                            <><CardHeader
                                avatar={<Avatar aria-label="recipe" className={classes.avatar}>
                                    EZ
                                </Avatar>}
                                action={<IconButton >
                                    <MoreVertIcon />
                                </IconButton>}
                                title= {item.name}
                                /><CardMedia
                                    className={classes.media}
                                    image={item.imageURL}
                                    title="Ingredients" /><CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Ingredients needed: {item.ingredients}
                                    </Typography>
                                </CardContent><CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share" href={item.originalURL} target="_blank" rel="noopener noreferrer"  onClick = {handleClick}>
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
                                </CardActions><Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography variant="h5" color="textSecondary" ><b><i>STEPS</i></b></Typography>
                                        <Typography li>
                                        {Array.isArray(item.steps) ? (item.steps).map(i => (<li>{i}</li>)) : <li>{item.steps}</li>}
                                        </Typography>
                                    </CardContent>
                                </Collapse></>
                                </Card>
                            }</div>
                    })
                }
            </div>
        </section>
        </body>
    );
}

export default Ingredient;