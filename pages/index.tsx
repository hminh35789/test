import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import AboutPage from './about'
import Header from './header'
import Layout from '../components/Layout'
import Slider from './slider'
import Slideshow from '../components/slider'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import NextLink from 'next/link';
import data from '../utils/data';

export default function Home() {
  return (
    <div>
       <Header>
        
        </Header>
      <Layout title='Ikiguy'>
        <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      </Layout>

     
      {/* <Slideshow /> */}

      {/* <Slider> </Slider> */}
      {/* <Slider /> */}
      
  
    </div>
  )
}
