import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Education from '@/components/education';

export default function EducationPage() {
  return (
    <>
      <Head>
        <title>Education | Aryan Sharma</title>
        <meta
          name="description"
          content="Educational background of Aryan Sharma, including degrees from University of Michigan and other institutions."
        />
        <meta property="og:title" content="Education | Aryan Sharma" />
        <meta
          property="og:description"
          content="Educational background of Aryan Sharma, including degrees from University of Michigan and other institutions."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Education | Aryan Sharma" />
        <meta
          name="twitter:description"
          content="Educational background of Aryan Sharma, including degrees from University of Michigan and other institutions."
        />
      </Head>
      <Container className="home">
        <main>
          <Education />
        </main>
      </Container>
    </>
  );
}
