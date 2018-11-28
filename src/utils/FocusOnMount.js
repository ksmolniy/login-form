import React, { Component, createRef } from 'react'

const FocusOnMount = (Comp) => class extends Component {
  constructor() {
    super();

    this.focusElRef = createRef();
  }

  componentDidMount() {
    this.focusElRef.current.focus();
  }

  render() {
    return <Comp focusElRef={this.focusElRef} {...this.props} />;
  }
}

export default FocusOnMount;
