import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Events = props => {
  const events = props.data.events.edges;
  const { intro } = props.data;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;
  console.log(events);

  return (
    <Layout bodyClass="page-events">
      <SEO title="Events" />

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            {intro.frontmatter.intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img alt={intro.frontmatter.title} className={introImageClasses} src={intro.frontmatter.intro_image} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="events-container row gy justify-content-center">
        {events.map(({ node: { title, image, description } }) => (
          <div className="card-container col-12 col-md-4 col-lg-3">
            <div className="card">
              <img src={image} alt="head" />
              <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  );
};

export const query = graphql`
  query EventsQuery {
    events: allEventsJson {
      edges {
        node {
          title
          image
          description
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: {regex: "/(events.md)/"}) {
      html
      frontmatter {
        title
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
      }
    }
  }
`;

export default Events;
