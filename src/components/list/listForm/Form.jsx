import React from 'react';
import s from './form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { setUsers } from '../../../redux/users_reducer';

const Form = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  React.useEffect(() => {}, [currentUser, users]);
  const handleSubmit = (values) => {
    dispatch(setUsers({ ...values, id: String(users.length + 1) }));
    props.setFormActive(false);
  };
  return (
    <div className={props.FormActive ? s.fixed : s.none}>
      <div className={s.container}>
        <div
          onClick={() => {
            props.setFormActive(false);
          }}
          className={s.x}
        >
          <img
            src="https://натяжные-потолки.на-все-руки.москва/template_files/close-popup.png"
            alt=""
          />
        </div>
        <div className={s.title}>
          Добавление данных о экспертах по оценке и руководителей
        </div>
        <FormListRedux initialValues={currentUser} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
const FormList = (props) => {
  return (
    <form className={s.inner} onSubmit={props.handleSubmit}>
      <div className={s.i_title}>Дата регистрации</div>
      <Field
        required
        name="date"
        component="input"
        type="text"
        className="item__comm"
      ></Field>
      <div className={s.i_title}>ФИО</div>
      <Field
        required
        component="input"
        name="FIO"
        type="text"
        className="item__comm"
      ></Field>
      <div className={s.i_title}>Должность</div>
      <Field required name="position" component="select" className={s.select}>
        <option>Введите должность участника</option>
        <option>Внешний эксперт</option>
        <option>HR BP</option>
      </Field>
      <div className={s.i_title}>Почта(логин)</div>
      <Field
        required
        component="input"
        name="login"
        type="text"
        className="item__comm"
      ></Field>
      <div className={s.i_title}>Пароль</div>
      <Field
        required
        component="input"
        name="password"
        type="text"
        className="item__comm"
      ></Field>
      <div className={s.i_title}>Телефон, привязянный к мессенджеру</div>
      <Field
        required
        component="input"
        name="phone"
        type="text"
        className="item__comm"
      ></Field>
      <button className={s.btn}>Сохранить</button>
    </form>
  );
};
const FormListRedux = reduxForm({
  form: 'FormList',
  enableReinitialize: true,
})(FormList);

export default Form;
