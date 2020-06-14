import reducers from '../reducers/index';

describe('Testing Reducer', () => {
  test('Login Action', () => {
    let state;
    state = reducers(
      {
        chat: {
          users: [],
          user: { username: '', id: '' },
          messages: [],
          loggedIn: false,
          loginError: false,
          errorMessage: '',
        },
      },
      {
        type: 'LOGIN',
        payload: { username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' },
      }
    );
    expect(state).toEqual({
      chat: {
        users: [],
        user: { username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' },
        messages: [],
        loggedIn: true,
        loginError: false,
        errorMessage: '',
      },
    });
  });

  test('Clear Errors action', () => {
    let state;
    state = reducers(
      {
        chat: {
          users: [],
          user: { username: '', id: '' },
          messages: [],
          loggedIn: false,
          loginError: false,
          errorMessage: '',
        },
      },
      { type: 'CLEAR_ERROR' }
    );
    expect(state).toEqual({
      chat: {
        users: [],
        user: { username: '', id: '' },
        messages: [],
        loggedIn: false,
        loginError: false,
        errorMessage: '',
      },
    });
  });

  test('Update Local users array', () => {
    let state;
    state = reducers(
      {
        chat: {
          users: [],
          user: { username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' },
          messages: [],
          loggedIn: true,
          loginError: false,
          errorMessage: '',
        },
      },
      {
        type: 'UPDATE_USERS',
        payload: [{ username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' }],
      }
    );
    expect(state).toEqual({
      chat: {
        users: [{ username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' }],
        user: { username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' },
        messages: [],
        loggedIn: true,
        loginError: false,
        errorMessage: '',
      },
    });
  });

  test('Logout Action', () => {
    let state;
    state = reducers(
      {
        chat: {
          users: [{ username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' }],
          user: { username: 'Liam1234', id: 'ZKLMnjR65goGGd0dAAAO' },
          messages: [],
          loggedIn: true,
          loginError: false,
          errorMessage: '',
        },
      },
      { type: 'LOGOUT' }
    );
    expect(state).toEqual({
      chat: {
        users: [],
        user: { username: '', id: '' },
        messages: [],
        loggedIn: false,
        loginError: false,
        errorMessage: '',
      },
    });
  });

  test('Update Local Messages array', () => {
    let state;
    state = reducers(
      {
        chat: {
          users: [{ username: 'Liam', id: 'ZKLMnjR65goGGd0dAAAO' }],
          user: { username: 'Liam', id: 'ZKLMnjR65goGGd0dAAAO' },
          messages: [],
          loggedIn: true,
          loginError: false,
          errorMessage: '',
        },
      },
      {
        type: 'ADD_MESSAGE',
        payload: { author: 'Liam', message: 'Liam hello' },
      }
    );
    expect(state).toEqual({
      chat: {
        users: [{ username: 'Liam', id: 'ZKLMnjR65goGGd0dAAAO' }],
        user: { username: 'Liam', id: 'ZKLMnjR65goGGd0dAAAO' },
        messages: [{ author: 'Liam', message: 'Liam hello' }],
        loggedIn: true,
        loginError: false,
        errorMessage: '',
      },
    });
  });

  test('Login Error Action', () => {
    let state;
    state = reducers(
      {
        chat: {
          users: [],
          user: { username: '', id: '' },
          messages: [],
          loggedIn: false,
          loginError: false,
          errorMessage: '',
        },
      },
      { type: 'LOGIN_ERROR', payload: 'Username Taken' }
    );
    expect(state).toEqual({
      chat: {
        users: [],
        user: { username: '', id: '' },
        messages: [],
        loggedIn: false,
        loginError: true,
        errorMessage: 'Username Taken',
      },
    });
  });
});
