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
        <div>Name: {userInfo.name}</div>
        <div>Email: {userInfo.email}</div>
        <div>Phone: {userInfo.phone}</div>
      </Section>
    );
  }
}

export { UserInfoFactory, UserInfoSection };
