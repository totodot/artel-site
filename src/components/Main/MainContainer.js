import React, { PureComponent } from 'react';
import { Title, Wrapper } from '../../styled/base';
import baseStyles from '../../styled/reset';
import ScrollTo from '../ScrollTo';
import RemoveLoader from '../RemoveLoader';

baseStyles();

class MainContainer extends PureComponent {
  render() {
    return (
      <RemoveLoader>
        <div>
          <section>sdlasdasd</section>
          <h1>eloszka</h1>
          <ScrollTo scrollId="section1">
            {scroll => (
              <button type="button" onClick={scroll}>
                Click
              </button>
            )}
          </ScrollTo>
          <Wrapper height="400" id="section1">
            <Title>section 1</Title>
          </Wrapper>
          <Wrapper height="400" id="section2">
            <Title>ELO</Title>
          </Wrapper>
          <Wrapper height="400" id="section3">
            <Title>ELO</Title>
          </Wrapper>
          <Wrapper height="400" id="section4">
            <Title>ELO</Title>
          </Wrapper>
        </div>
      </RemoveLoader>
    );
  }
}

export default MainContainer;
