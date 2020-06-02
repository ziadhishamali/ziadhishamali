import React, {Component} from 'react';
import {db} from '../auth/firebase';
import ViewPortfolio from '../viewing/ViewPortfolio';
import '../../styles/Portfolio.css';
import { Services } from './Services';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
        };
    }

    componentDidMount() {
        db.collection("Services")
        .onSnapshot((querySnapshot) => {
            let services = [];
            querySnapshot.forEach(function(doc) {
                let temp = {};
                // fill temp
                temp.id = doc.id;
                temp.title = doc.data().title;
                temp.image = doc.data().image;
                temp.description = doc.data().description;
                // add temp to portfolio
                services.push(temp);
            });
            this.setState({services});
        });
    }

    render() {
        return (
            <div className="portfolio-section">
                {/*<div className="wave-background"></div>*/}
                <Services services={this.state.services} />
                <div className="wave-background"></div>
                <ViewPortfolio portfolio={this.state.portfolio} skills={this.state.skills}/>
            </div>
        );
    }
}

export default Portfolio