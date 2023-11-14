import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AddTodoProps } from '../types/todo-item-props.type';

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required')
        .min(5, 'Title must be at least 5 characters')
        .max(30, 'Title must be less than 30 characters'),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd(values.title);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        placeholder="Enter your task"
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}
      <button type="submit">
        <span>Add</span>
      </button>
    </form>
  );
};

export default AddTodo;
