import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ZineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  max-width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SingleZine = styled.div`
  border: 0px solid black;

  margin: 0 0 25px 0;
  padding: 25px;

  height: auto;
  width: auto;

  max-width: 100%;
`;

const ZineLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RandomButton = styled.button`
  height: 50px;
  width: 125px;

  background-color: steelblue;
  border: 0;
  color: white;
  cursor: pointer;
  margin: 0 0 25px 0;
  padding: 15px;

  &:hover {
    background-color: white;
    border: 2px dotted steelblue;
    color: steelblue;
  }
`;

class Home extends Component {
  state = {
    zineIds: [],
  };

  componentDidMount() {
    const allZines = this.props.data.allContentfulZine.edges;
    let allZineIds = [];
    allZines.map(zine => {
      const zineId = zine.node.id;
      allZineIds = [...allZineIds, zineId];
      return null;
    });
    this.setState({
      zineIds: allZineIds,
    });
  }

  drawZines(zines) {
    return zines.map(zine => {
      const entry = zine.node;
      const {
        coverImage: { fluid },
      } = entry;
      return (
        <ZineLink key={entry.id} to={`/zine/${entry.id}`}>
          <SingleZine>
            <Img fluid={fluid} />
          </SingleZine>
        </ZineLink>
      );
    });
  }

  goToRandom() {}

  render() {
    const allZines = this.props.data.allContentfulZine.edges;

    return (
      <div>
        <RandomButton
          onClick={() =>
            navigate(
              `/zine/${
                this.state.zineIds[
                  Math.floor(Math.random() * this.state.zineIds.length)
                ]
              }`
            )
          }
        >
          Random
        </RandomButton>
        <ZineContainer>{this.drawZines(allZines)}</ZineContainer>
      </div>
    );
  }
}

export default Home;
