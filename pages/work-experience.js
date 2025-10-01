import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Experience from '@/components/experience';
import workExperience from '/public/jsons/work-experience.json';

export default function WorkExperiencePage() {
  return (
    <>
      <Head>
        <title>Work Experience | Aryan Sharma</title>
        <meta
          name="description"
          content="Professional work experience of Aryan Sharma, including roles at Amazon, Genpact, and other organizations."
        />
        <meta property="og:title" content="Work Experience | Aryan Sharma" />
        <meta
          property="og:description"
          content="Professional work experience of Aryan Sharma, including roles at Amazon, Genpact, and other organizations."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Work Experience | Aryan Sharma" />
        <meta
          name="twitter:description"
          content="Professional work experience of Aryan Sharma, including roles at Amazon, Genpact, and other organizations."
        />
      </Head>
      <Container className="home">
        <main>
          <Row>
            <Experience jsonExperiences={workExperience} title="Work Experience" isExperience />
          </Row>
        </main>
      </Container>
    </>
  );
}
