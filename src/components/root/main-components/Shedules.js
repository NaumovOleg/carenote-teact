import React, {Component} from 'react';
import   ReactDOM  from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {Dialog} from 'primereact/dialog';
import * as moment from 'moment';
import arrowIcon from '../../../assets/Down_arrow_small@2x.png';
import closeIcon from '../../../assets/No@2x.png';
import backimg from '../../../assets/Group 268.png';
moment.locales('us');

class Shedule extends Component {
    state = {
        start: 0,
        end: 6,
        week: {
            start: moment(new Date()).weekday(0),
            end: moment(new Date()).weekday(6),
        },
        popupDateDialog: false,
        popupTimeDialog: false,
        confirmedPopup: false,
        selectedDateTime: {
            time: '',
            date: '',
        },
        selectedDateError: '',
        selectedTimeError: ''
    };

    constructor(props) {
        super(props);
    };


    async  componentWillMount() {
        this.getWeekCalls();

    }


    getWeekCalls = () => {
        const params = {
            limit: 7,
            timeMin: this.state.week.start,
            timeMax: this.state.week.end,
            CID: this.props.user.id
        };
        this.props.getCalendatData(params);
    }

    nextWeek = async () => {
        const end = this.state.end + 7;
        const start = this.state.start + 7;
        await  this.setState({
            end: end,
            start: start,
            week: {
                start: moment(new Date()).weekday(start),
                end: moment(new Date()).weekday(end),
            },
        });

        this.getWeekCalls();
    };
    prevWeek = async () => {
        const end = this.state.end - 7;
        const start = this.state.start - 7;
        await  this.setState({
            end: end,
            start: start,
            week: {
                start: moment(new Date()).weekday(start),
                end: moment(new Date()).weekday(end),
            },
        });

        this.getWeekCalls();

    };
    getDatesArray = () => {
        const dates = [];
        const startDate = this.state.week.start.clone();
        const endDate = this.state.week.end.clone();
        dates.push(startDate);
        for (var a = 1; a <= 5; a++) {
            const day = startDate.clone().add(a, 'day');
            dates.push(day);
        }
        dates.push(endDate);
        return dates;
    };

    selectDateTime = async (type, value, event) => {
        const containers = ReactDOM.findDOMNode(event.target).parentNode.childNodes;
        if (event.target.tagName === 'SPAN') {
            return
        }
        containers.forEach(el => {
            el.classList = 'item active custom-type-item';
        });
        event.target.classList = 'item active custom-type-item selected';
        let newValue = this.state.selectedDateTime;
        newValue[type] = value;
        if (type === 'date') {
            await this.setState({
                selectedDateError: ''
            })
        }
        await this.setState({
            selectedDateTime: {
                ...newValue
            },
        });
    };

    validateDate = () => {
        if (this.state.selectedDateTime.date === '') {
            this.setState({
                selectedDateError: 'Please select valid date',
            });
            return false
        }
        return true
    };
    validateTime = () => {
        if (this.state.selectedDateTime.time === '') {
            this.setState({
                selectedTimeError: 'Please select valid time',
            });
            return false
        }
        return true
    };

    closeDatePopup = () => {
        this.setState({
            selectedDateError: '',
            popupDateDialog: false
        });
    };
    openDatePopup = () => {
        this.setState({
            selectedDateError: '',
            popupDateDialog: true
        });
    };

    openTimePopup = () => {
        this.setState({
            popupTimeDialog: true
        })
    }
    closeTimePopup = () => {
        this.setState({
            popupTimeDialog: false
        })
    };

    closeConfirmWindow = () => {
        this.setState({
            confirmedPopup: false,
            selectedDateTime: {
                time: '',
                date: '',
            },
            selectedDateError: '',
            selectedTimeError: ''
        });

        ReactDOM.findDOMNode(this.dayItemsContainer).childNodes.forEach(el => {
            el.classList = 'item active custom-type-item'
        });
        ReactDOM.findDOMNode(this.hoursItemsContainer).childNodes.forEach(el => {
            el.classList = 'item active custom-type-item'
        })
    };
    openConfirmPopup = () => {
        this.setState({
            confirmedPopup: true,
        })
    };

    getConfirmedText = () => {
        if (this.state.selectedDateTime.date !== '' && this.state.selectedDateTime.time !== '') {

            return (
                this.state.selectedDateTime.date.format('MMM D , ddd') +
                '@' + this.state.selectedDateTime.time
            )
        } else return null
    };
    getEventTime = (event) => {
        return (
            <span style={    {
                'margin': 'auto',
                'width': '100%',
                color:'#000',
                textAlign: 'center'
            }}>
                {moment(  event.start.dateTime ).format('hh:mm A')}<br/>
                Call
                </span>
        )
    }

    render() {
        const selectDateTime = this.selectDateTime;
        const getDatesArray = this.getDatesArray;
        const week = getDatesArray();
        const closeDatePopup = this.closeDatePopup;
        const openDatePopup = this.openDatePopup;
        const validateDate = this.validateDate;
        const closeTimePopup = this.closeTimePopup;
        const openTimePopup = this.openTimePopup;
        const validateTime = this.validateTime;
        const openConfirmPopup = this.openConfirmPopup;
        const closeConfirmWindow = this.closeConfirmWindow;
        const getConfirmedText = this.getConfirmedText;
        const getEventTime = this.getEventTime;

        const events = this.props.calendar;
        let parsedEvents = {};
        if (events.length) {
            events.forEach(el => {
                parsedEvents[moment(el.end.dateTime).format('MMM_D_ddd')] = el
            })
        }
        console.log( parsedEvents )
        const noCalls = () => {
            return (
                <span style={    {
                    'margin': 'auto',
                    'width': '50px',
                    textAlign: 'center'
                }}>
                    No  Calls
                </span>
            )
        };


        return (
            <div className="shedule-component">
                <Dialog className="change-call custom-popup" header="" visible={this.state.popupDateDialog}
                        modal={ true } onHide={function () {
                }}>
                    <div className="modal-body">
                        <div className="header custom-popup-header">
                            <button onClick={function () {
                                closeDatePopup()
                            }}><img src={closeIcon}/></button>
                        </div>
                        <div className="body-content custom-body-content">
                            <div className="text">
                                What day would you like to change your call to?
                            </div>
                            <div className="items custom-type-items" ref={el => this.dayItemsContainer = el }>
                                {
                                    week.map(el => {
                                        return (
                                            <div key={el.format('MMM ddd D')} className="item active custom-type-item"
                                                 onClick={function (ev, elem) {
                                                     selectDateTime('date', el, ev)
                                                 }}>
                                                {el.format('MMM ddd D')}
                                            </div>);
                                    })
                                }
                            </div>
                            <div className="select-button">
                                <div className="error">{this.state.selectedDateError}</div>
                                <button className="custom-button-orange" onClick={function () {
                                    if (validateDate()) {
                                        closeDatePopup();
                                        openTimePopup();
                                    }
                                }}>Select
                                </button>
                            </div>
                        </div>

                    </div>
                </Dialog>
                <Dialog className="select-time custom-popup" header="" visible={this.state.popupTimeDialog}
                        onHide={function () {
                        }}
                        modal={true}>
                    <div className="modal-body">
                        <div className="header custom-popup-header">
                            <button onClick={function () {
                                closeTimePopup()
                            }}><img src={closeIcon}/></button>
                        </div>
                        <div className="body-content custom-body-content">
                            <div className="text">
                                Please select from one of the available times below.
                            </div>
                            <div ref={el => this.hoursItemsContainer = el } className="items custom-type-items">
                                <div onClick={function (ev) {
                                    selectDateTime('time', '10:00 AM', ev);
                                }} className="item active custom-type-item">
                                    10:00 AM
                                </div>
                                <div onClick={function (ev) {
                                    selectDateTime('time', '11:00 AM', ev);
                                }} className="item active custom-type-item">
                                    11:00 AM
                                </div>
                                <div onClick={function (ev) {
                                    selectDateTime('time', '12:00 AM', ev);
                                }} className="item active custom-type-item">
                                    12:00 PM
                                </div>
                                <div onClick={function (ev) {

                                    selectDateTime('time', '1:00 PM', ev);
                                }} className="item active custom-type-item">
                                    1:00 PM
                                </div>
                            </div>
                            <div className="select-button">
                                <div className="error">{this.state.selectedTimeError}</div>
                                <button className="custom-button-orange" onClick={function () {
                                    if (validateTime()) {
                                        closeTimePopup();
                                        openConfirmPopup();
                                    }

                                }}>Select
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
                <Dialog className="confirmed-popup custom-popup" header="" visible={this.state.confirmedPopup}
                        onHide={function () {
                        }}
                        modal={true}>
                    <div className="modal-body">
                        <div className="header custom-popup-header">
                            <button onClick={closeConfirmWindow}><img src={closeIcon}/></button>
                        </div>
                        <div className="body-content custom-body-content">
                            <div className="text light">
                                Your new scheduled call is confirmed:
                            </div>
                            <div className="text text-bold">
                                {getConfirmedText()}
                            </div>
                            <div className="select-button">
                                <button className="custom-button-orange" onClick={closeConfirmWindow}>Close
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
                <div className="top-content">
                    <div className="text">Schedule</div>
                    <div className="center-content">
                        <span className="customer-name">{this.props.user.first_name}, </span>
                        <span className="text-note">your next scheduled call is </span>
                        <span className="date">
                            {moment(new Date()).format('MMM D') } at {' '}
                            { moment(new Date()).format('HH:mm A')}
                        </span>
                    </div>
                    <button onClick={this.props.prev}><img src={backimg}/> Back</button>
                </div>
                <div className="calendar-header">
                    <button className="prev-mont" onClick={this.prevWeek}>
                        <img src={arrowIcon}/>
                        Prev week
                    </button>
                    <div className="date-text">Week of {week[0].format('MMM D')}</div>
                    <button className="next-button" onClick={this.nextWeek}> Next week
                        <img src={arrowIcon}/>
                    </button>
                </div>
                <div className="container">
                    <div className="calendar-days">
                        {
                            week.map((el, index) => {

                                const classname = parsedEvents[el.format('MMM_D_ddd')] !== undefined ? 'item activated' : 'item'
                                return ( <div key={index} className={classname}>
                                    <div className="top">
                                        <span className="left">{el.format('MMM D')}</span>
                                        <span className="right">{el.format('ddd')}</span>
                                    </div>
                                    <div className="center">
                                            <span className="" style={{display: 'flex'}}>
                                                {parsedEvents[el.format('MMM_D_ddd')] !== undefined ? getEventTime(parsedEvents[el.format('MMM_D_ddd')])  : noCalls() }
                                            </span>
                                    </div>
                                    <div className="bottom" onClick={function () {
                                        openDatePopup();
                                    }}> Change
                                    </div>
                                </div>);
                            })
                        }
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
        user: state.auth.user,
        calendar: state.calendar

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCalendatData: (params) => dispatch(actions.getCalendatData(params)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shedule);
