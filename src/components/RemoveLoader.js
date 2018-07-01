import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class RemoveLoader extends PureComponent {
  componentDidMount() {
    const loader = document.querySelector('#loader');
    loader.addEventListener('transitionend', () => loader.remove());
    loader.classList.add('exit');
  }

  render() {
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

RemoveLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RemoveLoader;
