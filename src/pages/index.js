import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import AllZines from '../components/AllZines';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AllZines data={data} />
  </Layout>
);

export default IndexPage;

export const GET_ALL_ZINES_QUERY = graphql`
  query GET_ALL_ZINES_QUERY {
    allContentfulZine {
      edges {
        node {
          id
          name
          coverImage {
            title
            file {
              url
            }
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
