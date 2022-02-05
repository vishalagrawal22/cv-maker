import '../styles/common.css';

import { Component } from 'react';
import { Section, InputSection } from './Section';

function UserInfoFactory(name = '', email = '', phone = '') {
  return { name, email, phone };
}

class UserInfoSection extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <Section header="General Info">
        <div>{userInfo.name}</div>
        <div>{userInfo.email}</div>
        <div>{userInfo.phone}</div>
      </Section>
    );
  }
}

function InputUserInfoSectionForm(userInfo, onUserInfoChange) {
  return (
    <div>
      <form>
        <label htmlFor="user-name">Name:</label>
        <input
          id="user-name"
          name="name"
          type="text"
          value={userInfo.name}
          onChange={onUserInfoChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={userInfo.email}
          onChange={onUserInfoChange}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={userInfo.phone}
          onChange={onUserInfoChange}
          required
        />
      </form>
    </div>
  );
}

function InputUserInfoSectionDisplay(userInfo) {
  return (
    <div>
      <div>Name: {userInfo.name}</div>
      <div>Email: {userInfo.email}</div>
      <div>Phone: {userInfo.phone}</div>
    </div>
  );
}

class InputUserInfoSection extends Component {
  render() {
    const {
      userInfo,
      editMode,
      formInfo,
      onChange,
      onStartEditMode,
      onSubmit,
    } = this.props;
    return (
      <InputSection
        header="Enter your general info"
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        editMode={editMode}
        editDisplay={InputUserInfoSectionForm(formInfo, onChange)}
        viewDisplay={InputUserInfoSectionDisplay(userInfo)}
      />
    );
  }
}

export { UserInfoFactory, UserInfoSection, InputUserInfoSection };
