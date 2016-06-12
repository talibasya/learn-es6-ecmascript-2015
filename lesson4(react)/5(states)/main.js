import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }
    update(e) {
        this.setState({txt: e.target.value});
    }
    render() {
        //let txt = this.props.txt
        return (
            <div>
                <input type="text"
                    onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default txt'
};

ReactDOM.render(
    <App cat={5} />, // txt="input text parameter"
    document.getElementById('app')
);