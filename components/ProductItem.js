import React from 'react';
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@mui/material';
import NextLink from 'next/link';
import { urlForThumbnail } from '../utils/image';

export default function ProductItem({ product }) {
    return (
        <Card>
            <NextLink href={`/product/${product.slug.current}`} passHref >
                <CardActionArea>
                    <CardMedia component="img" image={urlForThumbnail(product.image)} title={product.name}></CardMedia>
                    <CardContent>
                        <Typography>{product.name}</Typography>
                        <Typography>{product.rating}({product.numReviews} reviews)</Typography>
                    </CardContent>
                </CardActionArea>
            </NextLink>
            <CardActions>
                <Typography>RM{product.price}</Typography>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
