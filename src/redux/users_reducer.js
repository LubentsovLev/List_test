import { example, Planets } from '../api/api';

const SET_USERS = 'USERS/SET_USERS';
const SET_CURRENT = 'USERS/SET_CURRENT';

let initialState = {
  users: [
    {
      id: '1',
      date: '01.11.2020',
      FIO: 'Петров Петр Петрович',
      position: 'Внешний эксперт',
      login: 'peter@mail.ru',
      password: 'test123',
      phone: '+7 928 444 44 44',
    },
    {
      id: '2',
      date: '01.10.2020',
      FIO: 'Александров Александр Петрович',
      position: 'HR BP',
      login: 'Alex@mail.ru',
      password: 'alex123',
      phone: '+7 918 444 44 44',
    },
    {
      id: '3',
      date: '01.09.2020',
      FIO: 'Александров Александр Якович',
      position: 'HR BP',
      login: 'Yakov@mail.ru',
      password: 'Yakov123',
      phone: '+7 923 444 44 43',
    },
  ],
  currentUser: {
    id: '1',
    date: '01.11.2020',
    FIO: 'Петров Петр Петрович',
    position: 'Внешний эксперт',
    login: 'peter@mail.ru',
    password: 'test123',
    phone: '+7 928 334 44 44',
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...state.users, action.users] };
    }
    case SET_CURRENT: {
      return { ...state, currentUser: action.currentUser };
    }
    default:
      return state;
  }
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT,
    currentUser,
  };
};
// export const addFavoriteOne = (id) => async (dispath) => {
//   let response = await example.getExample(id);
//   dispath(setExample(response));
// };

export default usersReducer;
