import React from 'react';

const Preloader = () => (
  <div style={{ textAlign: 'center', paddingTop: 10 }}>
    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Preloader;
