import React, { Component } from 'react';
import {db} from '../auth/firebase';
import Loader from './Loader';
import {ViewFilter} from './ViewFilter';
import {ViewTags} from './ViewTags';

class ViewPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: [],
            skills: [],
            services: [],
            filterList: [],
        };
    }

    componentDidMount() {
        db.collection("Projects")
        .orderBy("priority", "asc")
        .onSnapshot(querySnapshot => {
            let portfolio = [];
            querySnapshot.forEach(function(doc) {
                let temp = {};
                // fill temp
                temp.id = doc.id;
                temp.title = doc.data().title;
                temp.imageUrl = doc.data().imageUrl;
                temp.url = doc.data().url;
                temp.tags = doc.data().tags;
                temp.description = doc.data().description;
                // add temp to portfolio
                portfolio.push(temp);
            });
            this.setState({portfolio});
        })

        db.collection("Skills")
        .orderBy("priority", "asc")
        .onSnapshot((querySnapshot) => {
            let skills = [];
            querySnapshot.forEach(function(doc) {
                let temp = {};
                // fill temp
                temp.id = doc.id;
                temp.title = doc.data().title;
                temp.all = doc.data().list;
                temp.filter = doc.data().list.map(() => 0);
                temp.show = doc.data().show;
                // add temp to portfolio
                skills.push(temp);
            });
            this.setState({skills});
        });
    }

    /*componentDidUpdate() {
        console.log("filter list is: ", this.state.filterList);
    }*/

    changeFilter = (id, idx) => {
        let skills = [...this.state.skills];
        let filterList = [...this.state.filterList];
        if (skills[id]["filter"][idx] === 0) {
            skills[id]["filter"][idx] = 1;
            filterList.push(skills[id].all[idx].name);
            this.setState({ filterList })
        } else {
            skills[id]["filter"][idx] = 0;
            let result = filterList.filter((option) => option !== skills[id].all[idx].name);
            this.setState({ filterList: result })
        }
        this.setState({ skills });
    }

    render() {
        let {portfolio, skills, filterList} = this.state;
        let counter = 0;
        const showPortfolio = portfolio.length ? (
            portfolio.map((p, idx) => {
                if (filterList.length !== 0 && !filterList.some(r => p.tags.indexOf(r) >= 0)) {
                    return "";
                }
                let flex = "row";
                if (counter % 2 === 0) {
                    flex = "row-reverse";
                }
    
                if (counter === 0) {
                    flex += " first";
                }
                counter++;
                return (
                    <div key={p.id} className="">
                        <span style={{display: "block"}}>
                            <div className={"portfolio-container-2 " + flex}>
                                <div className="portfolio-info">
                                    <span className="portfolio-title">{p.title}</span>
                                    <span className="portfolio-description">{p.description}</span>
                                    <ViewTags tags={p.tags} flex={flex} />
                                </div>
                                <img className="portfolio-image box-hover box-shadow-2" src={p.imageUrl} alt={p.title} onClick={() => {window.open(p.url);}}/>
                            </div>
                        </span>
                    </div>
                    
                );
            })
        ) : (
            <Loader/>
        );

        return (
            <div className="scrollable portfolio-wrapper" id="portfolio-section">
                <span className="services-container-title margin-bottom-4">MY WORK<hr/></span>
                <ViewFilter skills={skills} changeFilter={this.changeFilter} />
                {showPortfolio}
            </div>
        );
    }
}
 
export default ViewPortfolio;