import React from 'react';
import { withRouter } from 'react-router-dom';
const trackingID = 'UA-148264489-3';


class GoogleAnalytics extends React.Component {
    componentDidUpdate ({ location, history }) {
        console.log('location changed in google analytics yaaaaaay !!!');
        const gtag = window.gtag;

        if (location.pathname === this.props.location.pathname) {
            // don't log identical link clicks (nav links likely)
            return;
        }

        gtag('config', trackingID, {
            'page_title': document.title,
            'page_location': window.location.href,
            'page_path': window.location.pathname + window.location.search + window.location.hash,
        });
    }

    render () {
        return null;
    }
}

export default withRouter(GoogleAnalytics);

export const eventTracking = (action, category, label, value) => {
    const gtag = window.gtag;

    gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value,
      });
};
