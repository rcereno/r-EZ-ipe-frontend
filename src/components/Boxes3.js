import React from 'react';
import logo from '../logo.png';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import styled from "styled-components";

const images = [
    {
      url: 'https://www.endocrineweb.com/sites/default/files/imagecache/gallery-large/wysiwyg_imageupload/37373/2019/02/25/KetoDiet_69332880_M.jpg',
      title: 'Keto-Friendly Recipes',
      width: '30%',
    },
    {
      url: 'https://th.bing.com/th/id/R.4ca63aa621eccdeba88c793449d2726a?rik=DUqzGoyF%2f5rJ6g&riu=http%3a%2f%2fwww.119sou.com%2fwp-content%2fuploads%2f2021%2f01%2fPaleo-Diet-What-Eat-Human-age-Diet.jpg&ehk=CUxbttWZd8DMm%2bNvAHGooDhYAt2udYO00xZQSzKDFxI%3d&risl=&pid=ImgRaw&r=0',
      title: 'Paleo Diet Recipes',
      width: '40%',
    },
    {
      url: 'https://live.staticflickr.com/65535/48470276321_d1759e6625_b.jpg',
      title: 'Seafood Recipes',
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
      opacity: 0.7,
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