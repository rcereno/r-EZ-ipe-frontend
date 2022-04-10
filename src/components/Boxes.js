import React from 'react';
import logo from '../logo.png';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import styled from "styled-components";

const images = [
    {
      // url: 'https://s.abcnews.com/images/Health/GTY_vegetarian_meal_nt_131007_16x9_992.jpg' ,
      url: 'https://assets.nhs.uk/prod/images/T_0318_vegetarian-meal-guide_91601.2e16d0ba.fill-920x613.jpg',
      title: 'Vegetarian Recipes',
      path: "/vegetarianrecipes",
      width: '30%',
    },
    {
      url: 'https://thumbs.dreamstime.com/b/protein-sources-meat-fish-cheese-nuts-beans-greens-protein-sources-meat-fish-eggs-cheese-milk-nuts-greens-oil-beans-122728519.jpg',
      title: 'Protein-Based Recipes',
      path: "/proteinrecipes",
      width: '40%',
    },
    {
      url: 'https://th.bing.com/th/id/R.3a5711153a65a4e35dd50a09064fa1ec?rik=L2xi97DnyQWTcA&riu=http%3a%2f%2fwww.nutritionsecrets.com%2fwp-content%2fuploads%2f2016%2f08%2fvegetarian-diet.jpg&ehk=G5mWp%2fFiRCdKdNY6xpUN%2fAuPQxd%2f9dVzH01WxlgxIQI%3d&risl=&pid=ImgRaw&r=0',
      title: 'Vegan Recipes',
      path: "/veganrecipes",
      width: '30%',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  export default function ButtonBases() {
    const classes = useStyles();
  
    return (

      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    );
  }