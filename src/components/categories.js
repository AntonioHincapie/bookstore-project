import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check } from '../redux/categories/categories';
import NavBar from './navbar';

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const StatusHandler = () => {
    dispatch(Check());
  };

  return (
    <div>
      <NavBar />
      <h2>{categories}</h2>
      <button type="button" onClick={StatusHandler}>Check Status</button>
    </div>
  );
}
