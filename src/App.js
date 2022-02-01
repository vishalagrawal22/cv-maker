import { Component } from 'react';
import { UserInfoFactory, InputUserInfoSection } from './components/UserInfo';
import { deepCopy } from './utils/helper-functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: UserInfoFactory('', '', ''),
      userInfoFormValues: { ...UserInfoFactory('', '', ''), editMode: true },
    };
    this.handleUserInfoChange = this.handleUserInfoChange.bind(this);
    this.handleUserInfoSubmit = this.handleUserInfoSubmit.bind(this);
    this.handleUserInfoStartEditMode =
      this.handleUserInfoStartEditMode.bind(this);
  }

  handleUserInfoStartEditMode() {
    this.setState((prevState) => {
      const userInfoFormValues = deepCopy(prevState.userInfo);
      userInfoFormValues.editMode = true;
      return {
        userInfoFormValues,
      };
    });
  }

  handleUserInfoChange(event) {
    this.setState((prevState) => {
      const userInfoFormValues = deepCopy(prevState.userInfoFormValues);
      userInfoFormValues[event.target.id] = event.target.value;
      return {
        userInfoFormValues,
      };
    });
  }

  handleUserInfoSubmit() {
    this.setState((prevState) => {
      const userInfoFormValues = deepCopy(prevState.userInfoFormValues);
      delete userInfoFormValues.editMode;
      return {
        userInfo: userInfoFormValues,
        userInfoFormValues: { ...UserInfoFactory('', '', ''), editMode: false },
      };
    });
  }

  render() {
    return (
      <div>
        <InputUserInfoSection
          userInfo={this.state.userInfo}
          userInfoFormValues={this.state.userInfoFormValues}
          onStartEditMode={this.handleUserInfoStartEditMode}
          onUserInfoSubmit={this.handleUserInfoSubmit}
          onUserInfoChange={this.handleUserInfoChange}
        />
      </div>
    );
  }
}

export default App;
