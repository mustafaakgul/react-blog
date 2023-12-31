import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form"

class ArticleList extends React.Component{

    state = {
        articles : []
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/")
        .then(res => {
            this.setState({
                articles:res.data
            });
            //console.log(res.data);
        })
    }

    render(){
        return(
            <div>
            <Articles data = {this.state.articles}/>
            <h2>Create article</h2>
            <CustomForm requestType="post" articleID={null} />
            </div>
        )
    }
}
export default ArticleList;