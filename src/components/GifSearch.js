import React, {Component} from "react";

class GifSearch extends Component {
    state = {
        query: ''
    }

    handleChange = (e) => {
        this.setState({query: e.target.value}, 
            () => console.log())
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='query' onChange={this.handleChange} value={this.state.query}/>
            </form>
        )
    }
}

export default GifSearch;