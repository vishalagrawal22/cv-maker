import '../styles/common.css';

import { Component } from 'react';
import { Section, InputSection } from './Section';

function UserInfoFactory(name, email, phone) {
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

function InputUserInfoSectionForm(userInfoFormValues, onUserInfoChange) {
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={userInfoFormValues.name}
          onChange={onUserInfoChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={userInfoFormValues.email}
          onChange={onUserInfoChange}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          value={userInfoFormValues.phone}
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
      onStartEditMode,
      userInfoFormValues,
      onUserInfoSubmit,
      onUserInfoChange,
    } = this.props;
    const editDisplay = InputUserInfoSectionForm(
      userInfoFormValues,
      onUserInfoChange
    );
    const viewDisplay = InputUserInfoSectionDisplay(userInfo);
    return (
      <InputSection
        header="Enter your general info"
        onStartEditMode={onStartEditMode}
        onSubmit={onUserInfoSubmit}
        editMode={userInfoFormValues.editMode}
        editDisplay={editDisplay}
        viewDisplay={viewDisplay}
      />
    );
  }
}

export { UserInfoFactory, UserInfoSection, InputUserInfoSection };
