import React from 'react';
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Hello from '@/components/hello';

export default function Home() {
  return (
    <Container className='home'>
      <Row>
        <Hello />
      </Row>
    </Container>
  );
}
