import React from 'react';
import './BlankPage.css';
import RenderPage1 from '../TestPageArea/miniMaterial/page1/page1'; 

const BlankPage = () => {
  return <div className="blank-page">
    <div className="content-component-area">
      <RenderPage1/>
      {/* Render the component here */}
    </div>
  </div>;
};

export default BlankPage;