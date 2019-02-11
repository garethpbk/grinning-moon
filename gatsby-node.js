const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const zineTemplate = path.resolve('src/components/zine.js');

    resolve(
      graphql(`
        {
          allContentfulZine {
            edges {
              node {
                id
                name
                artists
                artistSite
                date
                material
                bindingMethod
                numberOfPages
                size
                tags
                coverImage {
                  title
                  fluid(maxWidth: 1920) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
                interiorImages {
                  fluid(maxWidth: 1920) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
                summary {
                  summary
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulZine.edges.forEach(edge => {
          createPage({
            path: `zine/${edge.node.id}`,
            component: zineTemplate,
            context: {
              edge,
            },
          });
        });
        return;
      })
    );
  });
};
