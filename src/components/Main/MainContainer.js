import React from 'react';
import Header from '../shared/Header';
import ScrollTo from '../utils/ScrollTo';
import RemoveLoader from '../utils/RemoveLoader';

import '../../styles/main.scss';

const MainContainer = () => (
  <RemoveLoader>
    <div>
      <section>sdlasdasd</section>
      <Header>Heading Content!</Header>
      <ScrollTo scrollId="section4">
        {scroll => (
          <button type="button" onClick={scroll}>
            Click
          </button>
        )}
      </ScrollTo>
      <div className="section" id="section1">
        <Header>section 1</Header>
      </div>
      <div className="section" id="section2">
        <Header>ELO</Header>
      </div>
      <div className="section" id="section3">
        <Header>ELO</Header>
      </div>
      <div className="section" id="section4">
        <Header>ELO</Header>
      </div>
    </div>
  </RemoveLoader>
);

export default MainContainer;
