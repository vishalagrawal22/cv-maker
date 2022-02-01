import { UserInfoFactory } from '../components/UserInfo';

describe('user info factory tests', () => {
  test('sets all provided values', () => {
    const userInfo = UserInfoFactory(
      'Skyler Russell',
      'adipiscing.elit@hotmail.com',
      '0987 364 5160'
    );
    expect(userInfo.name).toBe('Skyler Russell');
    expect(userInfo.email).toBe('adipiscing.elit@hotmail.com');
    expect(userInfo.phone).toBe('0987 364 5160');
  });
});
