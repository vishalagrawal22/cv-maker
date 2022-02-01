import { Component } from 'react';
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

export { UserInfoFactory, UserInfoSection };
