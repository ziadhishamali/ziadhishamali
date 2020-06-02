import React, { Component } from 'react';

class ContactForm extends Component {
    state = { 
        name: "",
        emailAddress: "",
        message: "",
    }

    changeText = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }

    render() { 
        return ( 
            <form className="contact-form justify align margin-bottom" onSubmit={(e) => this.props.submit(e, this.state)}>
                <input type="text" id="name" name="name" className="text-input email-input margin-top--" placeholder="name" onChange={e => this.changeText(e)} value={this.state.name}/>
                <input type="text" id="emailAddress" name="email" className="text-input email-input margin-top--" placeholder="email address" onChange={e => this.changeText(e)} value={this.state.emailAddress}/>
                <textarea id="message" name="message" className="text-input message-input margin-top--" placeholder="message" onChange={e => this.changeText(e)} value={this.state.message}/>
                <input type="submit" className="submit-button button-orange margin-top" value="SUBMIT"/>
            </form>
        );
    }
}
 
export default ContactForm