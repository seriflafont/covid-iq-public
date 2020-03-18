import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import PieChart from 'react-minimal-pie-chart';
import ShareButton from '../../components/ShareButton/ShareButton';

class StatsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            countries:[],
            stats:[],
            currentstats:{},
            totalcases:0,
            totaldeaths:0,
            totalrecovered:0
        }
        this.dataMap = new Map();
        this.gotoHome = this.gotoHome.bind(this);
        this.handleSelect = this.changeCountry.bind(this);
    }
    
    componentDidMount(){
        this.getCountries();
        this.getCurrentStats();
    }

    getCountries(){
        fetch("https://api.covid19api.com/countries")
        .then(results => {
            let json = results.json();
            return json;
        }).then(data => {
            this.setState({countries:data});
        });
    }

    getCurrentStats(){
        fetch("https://api.covid19api.com/summary")
        .then(results => {
            let json = results.json();
            return json;
        }).then(data => {
            let countrydata = data.Countries;
            countrydata.forEach((country) =>{
                this.dataMap.set(country.Country, country);
            });
            let tcases = countrydata.reduce(function(accumulator, country) {
                return Number(accumulator) + Number(country.TotalConfirmed);
            }, 0);
            let tdeaths = countrydata.reduce(function(accumulator, country) {
                return Number(accumulator) + Number(country.TotalDeaths);
            }, 0);
            let trecovered = countrydata.reduce(function(accumulator, country) {
                return Number(accumulator) + Number(country.TotalRecovered);
            }, 0);
            this.setState({totalcases:tcases});
            this.setState({totalrecovered:trecovered});
            this.setState({totaldeaths:tdeaths});
            this.setState({stats:data.Countries});
            this.dataMap.set('All',{
                'Country':'All',
                'TotalConfirmed':tcases,
                'TotalDeaths':tdeaths,
                'TotalRecovered':trecovered
            });
            this.setState({currentstats:this.dataMap.get('All')});
        });
    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    getCFR(){
        let p = this.state.currentstats.TotalDeaths / this.state.currentstats.TotalConfirmed;
        return Math.round(p * 100);
    }
    gotoHome(){
        this.props.history.push('/');
    }
    changeCountry(e){
        let selectedcountryName = e.target.value;
        this.setState((prevState) => ({
            currentstats: this.dataMap.get(selectedcountryName)
        }));
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
            <div className="stats-wrapper quiz-wrapper" onMouseMove={this.handleMouseMove}>
                <div className="endscreen-wrapper">
                    <ShareButton />
                    <Link className="cross" to="/"><i /></Link>
                    <h1>Current State of COVID-19</h1>
                    <select onChange={this.handleSelect}>
                        <option defaultValue key='00All' value="All">All Countries</option>
                        {this.state.countries.map((country, index)=>{
                            return(
                                <option key={index} value={country.Country}>{country.Country}</option>
                            )
                        })}
                    </select>
                    <p><strong>Total Reported Cases: {this.numberWithCommas(this.state.currentstats.TotalConfirmed | 0)}</strong><br />Case Fatality Rate (CFR): {this.getCFR()}%</p>
                    <div className="piechart-wrapper">
                        <PieChart
                            animate
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            startAngle={0}
                            data={[
                                { title: 'Deaths', value: this.state.currentstats.TotalDeaths | 0, color: '#ef6e64' },
                                { title: 'Recovered', value: this.state.currentstats.TotalRecovered | 0, color: '#2e88a7' },
                            ]}
                            label
                            labelPosition={50}
                            labelStyle={{
                                fill: '#ffffff',
                                fontFamily: 'sans-serif',
                                fontSize: '6px'
                            }}
                        />
                    </div>
                    <div className="piechart-key">
                        <ul>
                            <li className="deaths">Reported deaths</li>
                            <li className="recovered">Reported recovered</li>
                        </ul>
                    </div>
                    
                    <p className="note">Source: <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank">Johns Hopkins CSSE</a></p>
                </div>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default StatsScreen;