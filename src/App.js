import React from 'react';
import { Title, Wrapper } from './styled/base';
import baseStyles from './styled/reset';
import ScrollTo from './components/ScrollTo';

baseStyles();

const App = () => (
  <div className="App">
    <ScrollTo scrollId="section1">
      {scroll => (
        <button type="button" onClick={scroll}>
          elo
        </button>
      )}
    </ScrollTo>
    {/* <ScrollTo scrollId="section2">
      <button type="button">ELO</button>
    </ScrollTo>
    <ScrollTo scrollId="section3">
      <button type="button">ELO</button>
    </ScrollTo>
    <ScrollTo scrollId="section4">
      <button type="button">ELO</button>
    </ScrollTo> */}
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
);

export default App;
