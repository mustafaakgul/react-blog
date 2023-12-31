import React from "react";
import axios from "axios";

import {Card} from "antd";
import CustomForm from "../components/Form"


class ArticleDetail extends React.Component{

    state = {
        article : {}   //one article so its an object not array
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(res => {
            this.setState({
                article:res.data
            });
            //console.log(res.data);
        })
    }

    
    
      handleDelete(event) {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        this.props.history.push("/");
        this.forceUpdate();
      }

    render(){
        return(
            <div>
            <Card title = {this.state.article.title}>
                    <p>{this.state.article.content}</p>
            </Card>
            <CustomForm requestType="put" articleID={this.props.match.params.articleID} />
            <form onSubmit={this.handleDelete}><input type="submit" value="Delete" /></form>
            </div>
        )
    }
}
export default ArticleDetail;