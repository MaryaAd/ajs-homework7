import Validator from '../app.js';

test.each([
    ['username', true],
    ['USERNAME', true],
    ['user22name', true],
    ['user-Name', true],
    ['user_Name', true],
    ['user111Name', true],
    ['user1111Name', false],
    ['user1111-Name', false],
    ['1username', false],
    ['username1', false],
    ['_username', false],
    ['username_', false],
    ['-username', false],
    ['username-', false],
    ['udg23udf34u5h3j43i', true],
    ['username@', true],
    ['@username', true],
  ])('Username Check', (name, result) => {
    const user = new Validator(name);
    expect(user.validateUsername(name)).toBe(result);
  });