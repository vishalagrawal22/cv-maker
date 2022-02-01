import { Component } from 'react';
import { conditionalRender } from '../utils/helper-functions';
import { Section } from './Section';

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

function InputUserInfoSectionForm(
  userInfoFormValues,
  onUserInfoSubmit,
  onUserInfoChange
) {
  return (
    <div>
      <form onSubmit={onUserInfoSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

function InputUserInfoSectionDisplay(userInfo, onStartEditMode) {
  return (
    <div>
      <div>Name: {userInfo.name}</div>
      <div>Email: {userInfo.email}</div>
      <div>Phone: {userInfo.phone}</div>
      <button onClick={onStartEditMode}>Edit</button>
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
    return (
      <div>
        {conditionalRender(
          userInfoFormValues.editMode,
          InputUserInfoSectionForm(
            userInfoFormValues,
            onUserInfoSubmit,
            onUserInfoChange
          ),
          InputUserInfoSectionDisplay(userInfo, onStartEditMode)
        )}
      </div>
    );
  }
}

export { UserInfoFactory, UserInfoSection, InputUserInfoSection };
