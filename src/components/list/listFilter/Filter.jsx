import React from 'react';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import s from './filter.module.scss';

function Filter(props) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  const [activeField, setActiveField] = React.useState('FIO');
  let uniq = (arr, type = 'id') => {
    let cnCount = {};
    let arrUniq = [];
    for (let i = 0; i < arr.length; i++) {
      if (cnCount[arr[i][type]]) {
        cnCount[arr[i][type]] += 1;
      } else {
        cnCount[arr[i][type]] = 1;
        arrUniq.push(arr[i][type]);
      }
    }
    return arrUniq;
  };

  const idOptions = uniq(users, 'id');
  const FIO = uniq(users, 'FIO');
  const position = uniq(users, 'position');
  const mail = uniq(users, 'login');

  return (
    <div>
      <div className="container">
        <div className="title"></div>
        <div className={s.inputs__inner}>
          <Input
            setActiveField={setActiveField}
            activeField={activeField}
            sortType="id"
            sortBy={props.sortBy}
            title="ID"
            type="Введите ID"
            option={idOptions}
            sortByAll={props.sortByAll.id}
          />
          <Input
            activeField={activeField}
            setActiveField={setActiveField}
            sortType="FIO"
            sortBy={props.sortBy}
            title="ФИО"
            type="Введите ФИО участника"
            option={FIO}
            sortByAll={props.sortByAll.FIO}
          />
          <Input
            activeField={activeField}
            setActiveField={setActiveField}
            sortType="position"
            sortBy={props.sortBy}
            title="Должность"
            type="Введите должность участника"
            option={position}
            sortByAll={props.sortByAll.position}
          />
          <Input
            activeField={activeField}
            setActiveField={setActiveField}
            sortType="login"
            sortBy={props.sortBy}
            title="Почта(логин)"
            type="Введите должность участника"
            option={mail}
            sortByAll={props.sortByAll.mail}
          />
          <div
            onClick={() => {
              props.sortByAll.done();
            }}
            className={s.btn}
          >
            Применить фильтры
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
