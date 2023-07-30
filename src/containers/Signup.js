import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {



    constructor(props) {
        super(props);
        this.state = {value: '', confirmDirty: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

  handleSubmit = (event) => {
    event.preventDefault();
    
        //console.log(event.target.username.value);
        this.props.onAuth(event.target.userName.value, event.target.email.value, event.target.password.value, event.target.confirm.value);
        this.props.history.push("/");
      
  }



  

    
     


  

  /*handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }*/

  /*compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }*/

  /*validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }*/


  render() {
    //const { getFieldDecorator } = this.props.form;

    return (



      



        <form onSubmit={(event) => this.handleSubmit(
            event
            )}>
            <label>
            Username:
            <input type="text" name="userName" />
            </label>

            <label>
            Username:
            <input type="email" name="email" />
            </label>

            <label>
            Password:
            <input type="password" name="password" />
            </label>

            <label>
            Password:
            <input type="password" name="confirm" />
            </label>

            <input type="submit" value="Submit" />
        </form>


    );
  }
}

const WrappedRegistrationForm = RegistrationForm;

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);

/*<Form onSubmit={this.handleSubmit}>
        
        <FormItem>
            {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input  placeholder="Username" />
            )}
        </FormItem>
        
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input  placeholder="Email" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input  type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input  type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>

        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Signup
        </Button>
        Or 
        <NavLink 
            style={{marginRight: '10px'}} 
            to='/login/'> login
        </NavLink>
        </FormItem>

      </Form>*/