import React from 'react';
import { Form, Input, Button } from "antd";
import axios from "axios";

const FormItem = Form.Item;

class CustomForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event, requestType, articleID) {
        event.preventDefault();
        //alert('A name was submitted: ' + this.state.value);
        console.log(this.state.value);
        const title =  event.target.elements.title.value;
        const content = event.target.elements.content.value;
        console.log(title + content);

        switch(requestType){
            case "post":
                return axios.post("http://127.0.0.1:8000/api/", {
                    title:title,
                    content:content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case "put":
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title:title,
                    content:content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
      }
//<input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
  render(){
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(
                    event, 
                    this.props.requestType,
                    this.props.articleID
                    )}>
                    <label>
                    Title:
                    <input type="text" name="title" />
                    </label>

                    <label>
                    Content:
                    <input type="text" name="content" />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CustomForm;