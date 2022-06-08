import { Alert, CircularProgress, Grid, Typography } from '@mui/material'
import Layout from "../components/Layout";
import { useEffect, useState } from 'react';
import client from '../utils/client';
import ProductItem from '../components/ProductItem';

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true
  });

  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (error) {
        setState({ loading: false, error: error.message });
      }
    }

    fetchData();
  }, []);

  return (
    <Layout> {loading ? (
      <CircularProgress />
    ) : error ? (
      <Alert variant="danger">{error}</Alert>
    ) : (
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.slug}>
            <ProductItem product={product} ></ProductItem>
          </Grid>
        ))}
      </Grid>
    )}</Layout>
  )
}
