import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { easeInOutCubic } from '../../constants/EasingFunctions';

class ScrollTo extends PureComponent {
  constructor(props) {
    super(props);
    this.scrollSection = null;
    this.duration = 600;

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  componentDidMount() {
    const { scrollId } = this.props;
    this.scrollSection = document.querySelector(`#${scrollId}`);
    this.scrollElement = document.documentElement;
  }

  scrollToSection() {
    let start;
    const startY = this.scrollElement.scrollTop;
    const endY = this.scrollSection.offsetTop;
    const diff = endY - startY;
    const maxScrollTop = this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = easeInOutCubic(Math.min(time / this.duration, 1));
      const scrollTo = startY + diff * percent;
      this.scrollElement.scrollTo(0, scrollTo);
      if (time < this.duration && scrollTo <= maxScrollTop) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  render() {
    const { children } = this.props;
    return <React.Fragment>{children(this.scrollToSection)}</React.Fragment>;
  }
}

ScrollTo.propTypes = {
  scrollId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default ScrollTo;
