import React from 'react';
import axios from 'axios';
import './App.css';



class ShortenForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            shortResponse: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    doAxiosGet() {
       
        axios.post('http://short.mitanderson.com/shorten', {
            toShorten: this.state.value
          })
        .then(res => {
            const bodyText = res.data.urlWithDomain;
            this.setState({ shortResponse: bodyText });
        })
    }

    handleSubmit(event){
        this.doAxiosGet();
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            shortResponse: null

        });
    }  

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <p> The web is long and scary - lets make it short. Together. </p>
                    <input className="field input" type="text" value={this.state.value} onChange={this.handleChange} />
                    <input className="field btn" type='submit' value="Take away the nastiness"/>
                </form>
                {this.state.shortResponse ? 
                    <div className="cromulent">
                        <p> Isnt this much nicer?</p>
                        <p className="embiggen">{this.state.shortResponse}</p>
                        <p> That must spark joy.</p> 
                    </div>
                : ''}
            </div>
            
        )
    }
}

export default ShortenForm;