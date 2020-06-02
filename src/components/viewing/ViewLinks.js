import React, {Component} from 'react';

class ViewLinks extends Component {
    state = { 
        visibility: [],
        contact: false,
        btnName: "up"
    }

    componentDidMount() {
        let visibility = [];
        for (let i = 0; i < this.props.links; i++) {
            visibility.push(false);
        }
    }

    showLabel = (idx) => {
        let visibility = [...this.state.visibility];
        visibility[idx] = true;
        this.setState({visibility});
    }

    removeLabel = (idx) => {
        let visibility = [...this.state.visibility];
        visibility[idx] = false;
        this.setState({visibility});
    }

    getLabel = (idx) => { // add {this.getLabel(idx)} to the <a> tag after <img> tag
        if (this.state.visibility[idx]) {
            console.log("visible");
            return (<span className="small-text black-text light-font link-name">{this.props.links[idx].name}</span>);
        }
    }

    /*changeContact = () => { // <button className="button-circle" onClick={() => this.changeContact()}>{this.state.btnName}</button>
        let contactView = document.getElementById('contact-area');
        let socialView = document.getElementById('social');
        let btnName = "";
        if (this.state.contact) {
            contactView.style.bottom = "-80vh";
            socialView.style.bottom = "0";
            btnName = "up";
        } else {
            contactView.style.bottom = "0";
            socialView.style.bottom = "80vh";
            btnName = "down";
        }
        this.setState({contact: !this.state.contact, btnName});
    }*/
    
    render() {
        const view = this.props.links.map((link, idx) => {
            return (
                <a key={idx} className="margin-left-- margin-right-- flex-column justify align" href={link.url}>
                    <img className="social-link" src={link.imageURL} alt={link.name} onPointerOver={() => this.showLabel(idx)} onPointerLeave={() => this.removeLabel(idx)} />
                </a>
            )
        })

        return (
            <div className="social flex-column justify align" id="social">
                <div className="social-background box-shadow-3 flex-row">
                    {view}
                </div>
            </div>
            
        )
    }
}

export default ViewLinks