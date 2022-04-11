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
      background: 'linear-gradient(#FFFFFF 30%, #D2B48C 150%)',
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

export const Vegan = () =>
 {
	const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
        useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/veganrecipes');
        const items = await data.json();
        setItems(items);
    };

  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
	return (
		<body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '100%'

        }}>
		<section>
		<Typography variant="h1" color="textSecondary">
                                    Vegan Recipes
                                </Typography>

				{
                    items.map(item => (
                        <Card className={classes.root}>
                    
                        <><CardHeader
                            avatar={<Avatar aria-label="recipe" className={classes.avatar}>
                                EZ
                            </Avatar>}
                            action={<IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>}
                            title= {item.name}
                            /><CardMedia
                                className={classes.media}
                                image={item.imageURL}
                                title="Ingredients" /><CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Ingredients needed: {item.ingredients.name}
                                </Typography>
                            </CardContent><CardActions disableSpacing>
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
                            </CardActions><Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                       {item.steps}
                                    </Typography>
                                </CardContent>
                            </Collapse></>
                            </Card>
                    ))
                                }
	</section>
	</body>
);
	
};