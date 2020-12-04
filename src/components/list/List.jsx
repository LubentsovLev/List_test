import React, { useEffect } from 'react';
import Filter from './listFilter/Filter';
import Users from './listUsers/Users';
import { useDispatch, useSelector } from 'react-redux';
import s from './list.module.scss';
import Form from './listForm/Form';

function List() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    setStateUsers(users);
  }, [users]);

  const [stateUsers, setStateUsers] = React.useState(users);
  const [FormActive, setFormActive] = React.useState(false);
  const [ID, setID] = React.useState('');
  const [FIO, setFIO] = React.useState('');
  const [Position, setPosition] = React.useState('');
  const [Mail, setMail] = React.useState('');
  let sortBy = (type, value) => {
    setStateUsers([]);
    let newArr = [];
    for (let i = 0; i < users.length; i++) {
      if (value === users[i][type]) {
        newArr.push(users[i]);
      }
    }
    setStateUsers(newArr);
  };
  let sortByAll = {
    id: function (id) {
      setID(id);
    },
    FIO: function (FIO) {
      setFIO(FIO);
    },
    position: function (Position) {
      setPosition(Position);
    },
    mail: function (Mail) {
      setMail(Mail);
    },
    done: () => {
      let newArr = [];
      setStateUsers([]);
      let done = false;
      const checkPosition = (stateValue, type) => {
        for (let i = 0; i < users.length; i++) {
          if (stateValue === users[i][type]) {
            newArr.push(users[i]);
          }
        }
      };
      for (let i = 0; i < users.length; i++) {
        if (ID === users[i].id) {
          newArr.push(users[i]);
          done = 'comp';
          break;
        } else if (Mail === users[i].login) {
          newArr.push(users[i]);
          done = 'comp';
          break;
        } else if (FIO === users[i].FIO) {
          if (done !== 'comp') {
            checkPosition(FIO, 'FIO');
            done = 'comp';
            break;
          }
          break;
        } else if (Position === users[i].position) {
          if (done !== 'comp') {
            checkPosition(Position, 'position');
            done = 'comp';
            break;
          }
        }
      }
      newArr.length === 0 ? setStateUsers(users) : setStateUsers(newArr);
    },
  };
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.inner}>
          <div className={s.title}>
            Список экспертов по оценке и руководителей
          </div>
          <Filter sortByAll={sortByAll} sortBy={sortBy} />
        </div>
      </div>

      <Users sortBy={sortBy} users={stateUsers} />
      <div className={s.bottom}>
        <div
          className={s.btn}
          onClick={() => {
            setFormActive(true);
          }}
        >
          Добавить пользователя
        </div>
      </div>
      <Form setFormActive={setFormActive} FormActive={FormActive} />
    </div>
  );
}

export default List;
