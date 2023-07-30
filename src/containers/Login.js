import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { LoadingOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
//const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

  handleSubmit = (event) => {
    event.preventDefault();
    
        console.log(event.target.username.value);
        this.props.onAuth(event.target.username.value, event.target.password.value);
        this.props.history.push("/");
      
  }

  render() {

    /*let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }*/

    //const { getFieldDecorator } = this.props.form;
    //let errorMessage = null;
    /*if(this.props.error){
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }*/

    /*<FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input  placeholder="Username" />
                        //<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                    </FormItem>

                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input  type="password" placeholder="Password" />
                        //<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </FormItem>*/

    return (
        <div>
            
            


                

                <form onSubmit={(event) => this.handleSubmit(
                    event
                    )}>
                    <label>
                    Username:
                    <input type="text" name="username" />
                    </label>

                    <label>
                    Password:
                    <input type="text" name="password" />
                    </label>

                    <input type="submit" value="Submit" />
                </form>



  
            </div>
    );
  }
}

/*const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}*/

//export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);



//const WrappedNormalLoginForm = Form.create()(NormalLoginForm);   ******

const WrappedNormalLoginForm = NormalLoginForm; 

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (WrappedNormalLoginForm);

/* <Form onSubmit={this.handleSubmit} className="login-form">

                    <FormItem>
                    <Input  placeholder="Username" />
                    
                    </FormItem>

                    <FormItem>
                    
                        <Input  type="password" placeholder="Password" />
                    
                    </FormItem>

                    <FormItem>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                        Login
                    </Button>
                    Or 
                    <NavLink 
                        style={{marginRight: '10px'}} 
                        to='/signup/'> signup
                    </NavLink>
                    </FormItem>
                </Form>
*/