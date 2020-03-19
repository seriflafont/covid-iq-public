import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareButton from '../../components/ShareButton/ShareButton';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class EndScreen extends Component{
    constructor(props){
        super(props);
        this.gotoHome = this.gotoHome.bind(this);
    }
    
    getScore(){
        if(this.props.score >= 45){
            return (
                <span className="score">
                    <h2>A+</h2>
                    <p>Always one to go above and beyond, you are committed to social distancing - with social decorum! Thanks for not hogging the toilet paper, A+!</p>
                </span>
            );
        }else if(this.props.score >= 30 && this.props.score < 45){
            return (
                <span className="score">
                    <h2>B</h2>
                    <p>You're even-keeled and doing a great job doing what you can. Keep it up!</p>
                </span>
            );
        }else if(this.props.score >= 20 && this.props.score < 30){
            return (
                <span className="score">
                    <h2>C</h2>
                    <p>You're making progress but could probably make some tweaks to your routine. Please refer to the <a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC website</a> as well as the <a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO</a> for more tips on how you might be able to improve.</p>
                </span>
            );
        }else if(this.props.score < 20){
            return (
                <span className="score">
                    <h2>D</h2>
                    <p>There are many areas where you could improve, though sometimes it is difficult based on your own personal situation. If you can modify some of your habits to match what is recommended by the <a rel="noopener noreferrer" target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf">US Government</a>, <a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC</a> and <a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO</a>, everyone will benefit.</p>
                </span>
            );
        }
    }

    gotoHome(){
        this.props.history.push('/');
    }
    
    render(){
        return(
            <CSSTransitionGroup
                transitionName="page-content"
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionEnter={false}
                transitionLeaveTimeout={250}
                transitionLeave={true}>
            <div className="quiz-wrapper" onMouseMove={this.handleMouseMove}>
                <ShareButton />
                <div className="endscreen-wrapper">
                    <Link className="cross" to="/"><i /></Link>
                    <h1>How'd you score?</h1>
                    {this.getScore()}
                    <h1>Resources</h1>
                    <ul className="resource-list">
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf">Whitehouse.gov Coronavirus Guidelines</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC.gov Coronavirus Info Dashboard</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/get-your-household-ready-for-COVID-19.html">CDC.gov Coronavirus Household Readiness</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO Coronavirus Info Dashboard</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd">WHO Coronavirus Situation Dashboard</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">WHO Coronavirus Mythbusters</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen">WHO Live Coronavirus Updates</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.whitehouse.gov/">US Whitehouse.gov Updates</a></li>
                    </ul>
                    <Link to="/stats">
                        <button type="button">
                            View Current COVID-19 Stats
                        </button>
                    </Link>
                </div>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default EndScreen;