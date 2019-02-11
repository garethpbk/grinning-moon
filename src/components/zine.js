import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from './layout';
import Modal from './modal';

const CoverImg = styled(Img)`
  cursor: pointer;
`;

const DetailsList = styled.ul`
  list-style-type: none;

  @media (min-width: 768px) {
    display: flex;
    margin: 0;
    padding: 0;
  }

  > li {
    cursor: pointer;
    padding: 0 10px;
    margin: 10px 0;

    @media (min-width: 768px) and (max-width: 992px) {
      margin: 0 10px 0 0;
    }
  }
`;

const ZineBody = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;

  div {
    flex: 0 0 auto;
    flex-basis: 100%;
    padding-right: 8px;
    padding-left: 8px;
    max-width: 100%;
  }

  div:nth-of-type(2) {
    order: 3;
  }

  @media (min-width: 768px) {
    div:nth-of-type(1),
    div:nth-of-type(3) {
      flex-basis: 50%;
    }

    div:nth-of-type(2) {
      order: 3;

      flex-basis: 100%;
      max-width: 100%;
    }
  }

  /* display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 25px;

  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr 2fr;
  }

  div:nth-of-type(2) {
    order: 3;
    display: flex;
    flex-direction: row;

    @media (min-width: 992px) {
      order: 2;
    }
  } */
`;

class Zine extends Component {
  state = {
    activeImage: {
      fluid: '',
    },
    modalAttr: {
      display: 'none',
      overflow: '',
      position: '',
    },
  };

  drawDetails(images) {
    return images.map(image => {
      const { fluid } = image;
      return (
        <li key={fluid.src} onClick={() => this.showModal(fluid)}>
          {/* <Img fluid={fluid} /> */}
          <img src={fluid.src} alt={fluid.src} />
        </li>
      );
    });
  }

  showModal(fluid) {
    this.setState({
      activeImage: {
        fluid,
      },
      modalAttr: {
        display: 'flex',
        overflow: 'hidden',
        position: 'fixed',
      },
    });
  }

  hideModal() {
    this.setState({
      modalAttr: {
        display: 'none',
      },
    });
  }

  render() {
    const {
      coverImage,
      interiorImages,
      name,
      artists,
      date,
      size,
      summary: { summary },
    } = this.props.pageContext.edge.node;

    return (
      <>
        <Layout>
          <ZineBody>
            <div onClick={() => this.showModal(coverImage.fluid)}>
              <CoverImg fluid={coverImage.fluid} />
            </div>
            <div>
              <DetailsList>{this.drawDetails(interiorImages)}</DetailsList>
            </div>
            <div>
              <h2>{name}</h2>
              <p>{artists}</p>
              <p>{date}</p>
              <p>{size}</p>
              <p>{summary}</p>
            </div>
          </ZineBody>
        </Layout>
        <Modal
          attr={this.state.modalAttr}
          activeImage={this.state.activeImage}
          hideModal={this.hideModal.bind(this)}
        />
      </>
    );
  }
}

export default Zine;
