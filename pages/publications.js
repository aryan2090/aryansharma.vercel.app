import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Publication from '@/components/publication';

export default function PublicationsPage() {
  return (
    <>
      <Head>
        <title>Publications | Aryan Sharma</title>
        <meta
          name="description"
          content="Research publications and academic work by Aryan Sharma in data science, machine learning, and related fields."
        />
        <meta property="og:title" content="Publications | Aryan Sharma" />
        <meta
          property="og:description"
          content="Research publications and academic work by Aryan Sharma in data science, machine learning, and related fields."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Publications | Aryan Sharma" />
        <meta
          name="twitter:description"
          content="Research publications and academic work by Aryan Sharma in data science, machine learning, and related fields."
        />
      </Head>
      <Container className="home">
        <main>
          <div className="mt-5">
            <h1>Publications</h1>
            <Publication />
          </div>
        </main>
      </Container>
    </>
  );
}
