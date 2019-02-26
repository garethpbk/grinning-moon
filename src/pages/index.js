import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextContainer = styled.div`
  margin: 25px 0;

  p {
    font-size: 20px;
  }
`;

const EnterLink = styled(Link)`
  display: block;

  width: 125px;

  background-color: steelblue;
  border: 0;

  color: white;
  font-size: 20px;
  text-align: center;
  text-decoration: none;

  cursor: pointer;

  margin: 0 0 25px 0;
  padding: 15px;

  &:hover {
    background-color: white;
    border: 2px dotted steelblue;
    color: steelblue;
  }
`;

const IndexPage = ({ data }) => {
  const zineIntroText =
    data.contentfulGraceText.zineIntroText.childMarkdownRemark.html;

  const createMarkup = () => {
    return { __html: zineIntroText };
  };

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <TextContainer dangerouslySetInnerHTML={createMarkup()} />
      <EnterLink to="/zines">Enter</EnterLink>
    </Layout>
  );
};

export default IndexPage;

export const GET_HOME_TEXT_QUERY = graphql`
  query {
    contentfulGraceText {
      zineIntroText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
