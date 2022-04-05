import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";


const Container = styled.div``;

const Products = () => {
  return (
    <Container>
    {products.map((item) => (
      <Product item={item} />
    ))}
  </Container>
  )
}

export default Products
