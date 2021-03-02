import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Join = props => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
        contactJson {
          phone
          email
          contact_button_link
        }
    }
   `);
  return (
    <div className="call-box-bottom">
      <a target="_blank" href={data.contactJson.contact_button_link} className="button">Hemen Katıl!</a>
    </div>
  );
};

export default Join;
