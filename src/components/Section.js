import { Component } from 'react';

class Section extends Component {
  render() {
    const { header, children } = this.props;
    return (
      <div>
        <h3>{header}</h3>
        <ul>{children}</ul>
      </div>
    );
  }
}

export { Section };
