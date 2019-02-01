import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import * as moment from 'moment';
import arrowIcon from '../../../assets/Down_arrow_small@2x.png'
moment.locales('uk');


class Shedule extends Component {
    state = {
        start:0,
        end:6,
        week:{
            start: moment(new Date()).weekday(0).format('DD/MM/YYYY'),
            end: moment(new Date()).weekday(6).format('DD/MM/YYYY'),
        }
    }
    constructor(props) {
        super(props);
    };

    nextWeek = async ()=>{
        const end = this.state.end +7;
        const start = this.state.start + 7;
        await  this.setState({
            end:end,
            start:start,
            week:{
                start: moment(new Date()).weekday(start).format('DD/MM/YYYY'),
                end: moment(new Date()).weekday(end).format('DD/MM/YYYY'),
            }
        })
    };
    prevWeek= async ()=>{
        const end = this.state.end - 7;
        const start = this.state.start - 7;
        await  this.setState({
            end:end,
            start:start,
            week:{
                start: moment(new Date()).weekday(start).format('DD/MM/YYYY'),
                end: moment(new Date()).weekday(end).format('DD/MM/YYYY'),
            }
        })

    }

    render() {
        console.log( this.state.week )
        return (
            <div className="shedule-component">
                <div className="top-content">
                    <div className="text">Schedule</div>
                    <div className="center-content">
                        <span className="customer-name">{this.props.user.first_name},</span>
                        <span className="text-note">your next scheduled call is </span>
                        <span className="date">
                            {moment(new Date()).format('MMM D') } at {' '}
                            { moment(new Date()).format('HH:mm A')}
                        </span>
                    </div>
                    <button onClick={this.props.prev}> {'<'}  Back </button>

                </div>
                <div className="calendar-header">
                    <button className="prev-mont" onClick={this.prevWeek}>
                        <img src={arrowIcon}/>
                        Prev week </button>
                    <div className="date-text">Week of Jan 8</div>
                    <button className="next-button" onClick={this.nextWeek}> Next week
                        <img src={arrowIcon}/>
                    </button>
                </div>
                <div className="calendar-days">
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                    <div className="item">
                        <div className="top">
                            <span className="left">Jan 9</span>
                            <span className="right">Sun</span>
                        </div>
                        <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                            <span>
                                Call
                            </span>

                        </div>
                        <div className="bottom"> change </div>
                    </div>
                </div>
                <div className="calendar-footer">
                    <span>Click “Change” to edit your call schedule to another day and time.</span>
                </div>


            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user:state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shedule);