import React, {Component} from 'react';
import '../../styles/Contact.css';
import ContactForm from '../viewing/ContactForm';
import { firebaseApp } from '../auth/firebase';

class Contact extends Component {
    state = {

    }

    submit = (e, state) => {
        e.preventDefault();

        for (let element in state) {
            if (state[element] === "" || state[element] === undefined) {
                document.getElementById("contact-area").classList.toggle("moveContactLeft");
                document.getElementById("fail-area").classList.toggle("moveSuccessDown");
                setTimeout(() => {
                    document.getElementById("fail-area").classList.toggle("moveSuccessDown");
                }, 4000);
                return;
            }
        }

        document.getElementById("contact-area").classList.toggle("moveContactLeft");

        // TODO: async call to send an email then on loading do the following
        document.getElementById("sending-area").classList.toggle("moveSuccessDown");

        firebaseApp.database().ref('messages').push().set({...state}).then(() => {

            // TODO: async call to send an email then on success do the following
            document.getElementById("sending-area").classList.toggle("moveSuccessDown");
            document.getElementById("successfull-area").classList.toggle("moveSuccessDown");
            setTimeout(() => {
                document.getElementById("successfull-area").classList.toggle("moveSuccessDown");
            }, 4000);

        }).catch(err => {
           
            // TODO: async call to send an email then on fail do the following
            document.getElementById("sending-area").classList.toggle("moveSuccessDown");
            document.getElementById("fail-area").classList.toggle("moveSuccessDown");
            setTimeout(() => {
                document.getElementById("fail-area").classList.toggle("moveSuccessDown");
            }, 4000);

        });

        // TODO: async call to send an email then on loading do the following

        // TODO: async call to send an email then on success do the following
        /*document.getElementById("successfull-area").classList.toggle("moveSuccessDown");
        setTimeout(() => {
            document.getElementById("successfull-area").classList.toggle("moveSuccessDown");
        }, 4000);*/

    }

    closeContact = (e) => {
        e.preventDefault();
        document.getElementById("contact-area").classList.toggle("moveContactLeft");
    }

    render() {
        return (
            <div className="contact-area justify align box-shadow-2" id="contact-area">
                <button className="close submit-button" onClick={e => this.closeContact(e)}>X</button>
                <h1 className="header white-text no-justify medium-text fugazOne">Contact<span className="orange-text">.</span></h1>
                <ContactForm submit={this.submit}/>
            </div>
        )
    }
}

export default Contact