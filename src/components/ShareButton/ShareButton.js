import React, { Component } from 'react'

export default class ShareButton extends Component {

    constructor(props){
        super(props);
        this.onMenuClick = this.showMenu.bind(this);
    }

    showMenu(){

    }

    render() {
        return (
            <div className="share-button-wrapper">
                {/* <button className="share-btn"><i className="fa fa-share-alt"></i></button> */}

                <ul className="share-menu">
                    <li><a target="_blank" href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.covid-iq.com"><i className="fa fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.covid-iq.com&text=What%20is%20your%20Covid-19%20Awareness%20IQ%3F"><i className="fa fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fwww.covid-iq.com&title=Test%20your%20COVID-19%20Social%20Awareness&summary=See%20if%20you're%20doing%20all%20you%20can%20to%20prevent%20the%20spread."><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        )
    }
}
