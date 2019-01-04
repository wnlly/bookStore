import React, { Component } from 'react'
import axios  from 'axios'
import {
  Form, Icon, Input, Button,
} from 'antd';

import '../css/login.css'
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

 export default class Login extends React.Component {
  // componentDidMount() {
  //   // To disabled submit button at the beginning.
  //   this.props.form.validateFields();
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // }

  render() {
    // const {
    //   getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    // } = this.props.form;

    // Only show error after a field is touched.
    // const userNameError = isFieldTouched('userName') && getFieldError('userName');
    // const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" className='container'>
        <Form.Item className='item'>
          
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
         
        </Form.Item>
        <Form.Item className='item'>
         
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

        </Form.Item>

        <Form.Item className='item'>
         
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

        </Form.Item>
        <Form.Item className='item'>
          <Button
            type="primary"
            htmlType="submit"
           
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
