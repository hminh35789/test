/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import NextLink from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>  
      <div className='section'>
        <NextLink href='/' passHref>
          <Typography> <Link>Back to product</Link></Typography>
          
        </NextLink>
      </div>
      <Grid container spacing={1} className='grid'>
            <Grid item md={6} xs={12}>
              <img
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout="responsive"
              ></img>
            </Grid>
            <Grid item md={3} xs={12}>
          <List>
            <ListItem style={{fontWeight:'750', fontSize:'25px'}}>
               {product.name}
            </ListItem>
            <ListItem>
              <b>Category: {product.category}</b>
            </ListItem>
            <ListItem>
              <b>Brand: {product.brand}</b>
            </ListItem>
            <ListItem>
              <b>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </b>
            </ListItem>
            <ListItem>
              <b> Description: {product.description}</b>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <b>Price</b>
                  </Grid>
                  <Grid item xs={6}>
                    <b>${product.price}</b>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
   
  );
}