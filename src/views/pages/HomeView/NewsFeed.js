// /* eslint-disable arrow-parens */
// // import useSelector to access Redux state
// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { useSelector } from 'react-redux';
// import {
//   Grid,
//   Container,
//   Typography,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardActions,
//   CardMedia,
//   Button,
//   makeStyles
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     paddingTop: 128,
//     paddingBottom: 128
//   },
//   title: {
//     fontWeight: theme.typography.fontWeightRegular
//   }
// }));

// function NewsFeed({ className, ...rest }) {
//   const classes = useStyles();
//   const [newsArticles, setNewsArticles] = useState();
//   useEffect(async () => {
//     const response = await fetch(
//       'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=coronavirus&safeSearch=false',
//       {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
//           'x-rapidapi-key':
//             '3484f1955bmshe25cf1f077ea64cp1051a4jsn6ecca2c7767e',
//           'Content-Type': 'application/json'
//         }
//       }
//     );
//     const jsonData = await response.json();
//     setNewsArticles(jsonData);
//   });

//   // console.logs json

// fetch(
//   'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=coronavirus&safeSearch=false',
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
//       'x-rapidapi-key': PULL REQUEST LEAKED KEY, WILL IMPLEMENT BACKEND LATER
//       'Content-Type': 'application/json'
//     }
//   }
// )
//   .then(x => x.json())
//   .then(console.log);
//   return (
//     <div className={clsx(classes.root, className)} {...rest}>
//       <Container maxWidth="md">
//         <Typography
//           variant="h2"
//           align="center"
//           color="textPrimary"
//           className={classes.title}
//         >
//           Local News
//         </Typography>

//         <Grid container spacing={1}>
//           <Grid container item xs={12} spacing={3}>
//             <FormRow />
//           </Grid>
//           <Grid container item xs={12} spacing={3}>
//             <FormRow />
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );

//   function FormRow() {
//     return (
//       <>
//         {newsArticles.map((article) => (
//           <Grid item xs={4}>
//             <Card className={classes.root}>
//               <CardActionArea>
//                 <CardMedia
//                   className={classes.media}
//                   image="/static/images/cards/demo.jpg"
//                   title={classes.title}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {article.value.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {article.value.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button
//                   size="small"
//                   color="primary"
//                   onClick={article.value.url}
//                 >
//                   Read More
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </>
//     );
//   }
// }

// NewsFeed.propTypes = {
//   className: PropTypes.string
// };

// export default NewsFeed;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function NewsFeed({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          News Feed (WIP)
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/static/home/olivier.png" />
          <Box ml={2}>
            <Typography variant="body1" color="textPrimary">
              Example Journalist
              <Typography
                color="textSecondary"
                display="inline"
                component="span"
              >
                , from CNN
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

NewsFeed.propTypes = {
  className: PropTypes.string
};

export default NewsFeed;
