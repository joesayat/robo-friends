import React, { Component } from 'react';

/**
 * Renders error boundary.
 * @returns {TemplateResult} error boundary
 */
class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch() {
    this.setState({hasError: true})
  } 

  render() {
    if (this.state.hasError) {
     return <h1 className='f2'>Something went wrong...</h1>
    }

    return this.props.children;
  }
};

export default ErrorBoundary;