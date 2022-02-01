import { UserInfoFactory } from '../components/UserInfo';

describe('user info factory tests', () => {
  test('sets all provided values', () => {
    const userInfo = UserInfoFactory(
      'Test User',
      'test@gmail.com',
      '342123432'
    );
    expect(userInfo.name).toBe('Test User');
    expect(userInfo.email).toBe('test@gmail.com');
    expect(userInfo.phone).toBe('342123432');
  });
});
