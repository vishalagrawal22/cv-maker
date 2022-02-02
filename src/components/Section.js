import '../styles/common.css';
import '../styles/Section.css';

import { Component } from 'react';
import { conditionalRender } from '../utils/helper-functions';

class Section extends Component {
  render() {
    const { header, children } = this.props;
    return (
      <div>
        <h3>{header}</h3>
        {children}
      </div>
    );
  }
}

class InputSection extends Component {
  render() {
    const {
      header,
      editMode,
      onStartEditMode,
      onSubmit,
      editDisplay,
      viewDisplay,
    } = this.props;
    return (
      <Section header={header}>
        {conditionalRender(
          editMode,
          <div className="input-section-display">
            {editDisplay}
            <button onClick={onSubmit}>submit</button>
          </div>,
          <div className="input-section-display">
            {viewDisplay}
            <button onClick={onStartEditMode}>edit</button>
          </div>
        )}
      </Section>
    );
  }
}

export { Section, InputSection };
