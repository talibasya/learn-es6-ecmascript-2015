import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';


class App extends React.Component {
    constructor(){
        super();
        this.state = {txt: ''}
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({txt: e.target.value});
    }
    render() {

        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
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

const Widget = (props) => {
    return (
        <div>
            <input type="text"
                onChange={props.update}/>
            <h1>{props.txt}</h1>
        </div>
    );
};

ReactDOM.render(
    <App cat={5} />, // txt="input text parameter"
    document.getElementById('app')
);