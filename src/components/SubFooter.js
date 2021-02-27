import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from './Social';

const SubFooter = props => {
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer-inner">
              <Social />
              <p className="year">
                { new Date().getFullYear() }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
