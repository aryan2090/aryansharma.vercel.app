import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Experience from '@/components/experience';
import awards from '/public/jsons/awards.json';

export default function AwardsPage() {
  return (
    <>
      <Head>
        <title>Awards | Aryan Sharma</title>
        <meta
          name="description"
          content="Awards and recognitions received by Aryan Sharma for academic excellence and professional achievements."
        />
        <meta property="og:title" content="Awards | Aryan Sharma" />
        <meta
          property="og:description"
          content="Awards and recognitions received by Aryan Sharma for academic excellence and professional achievements."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Awards | Aryan Sharma" />
        <meta
          name="twitter:description"
          content="Awards and recognitions received by Aryan Sharma for academic excellence and professional achievements."
        />
      </Head>
      <Container className="home">
        <main>
          <Row>
            <Experience jsonExperiences={awards} title="Awards" isExperience={false} />
          </Row>
        </main>
      </Container>
    </>
  );
}
