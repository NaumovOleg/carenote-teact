import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Dialog } from 'primereact/dialog';
import * as moment from 'moment';
import arrowIcon from '../../../assets/Down_arrow_small@2x.png';
import closeIcon from '../../../assets/No@2x.png';
import google from '../../../utils/gapi';moment.locales ( 'us' );

class Shedule extends Component {
    state = {
        start:            0,
        end:              6,
        week:             {
            start: moment ( new Date () ).weekday ( 0 ),
            end:   moment ( new Date () ).weekday ( 6 ),
        },
        changePopup:      false,
        selectTime:       false,
        confirmedPopup:   false,
        selectedDateTime: {
            time: '',
            date:  moment ( new Date () ),
        },
    };

    constructor ( props ) {
        super ( props );

    };

    nextWeek = async () => {
        const end = this.state.end + 7;
        const start = this.state.start + 7;
        await  this.setState ( {
            end:   end,
            start: start,
            week:  {
                start: moment ( new Date () ).weekday ( start ),
                end:   moment ( new Date () ).weekday ( end ),
            },
        } );
    };

    selectDateTime = ( type, value ) => {
        let newValue = this.state.selectedDateTime;
        newValue[ type ] = value;
        this.setState ( {
            selectedDateTime: {
                ...newValue
            },
        } );

    };
    getDatesArray = () => {
        const dates = [];
        const startDate = this.state.week.start.clone ();
        const endDate = this.state.week.end.clone ();
        dates.push ( startDate );
        for ( var a = 1; a <= 5; a++ ) {
            const day = startDate.clone ().add ( a, 'day' );
            dates.push ( day );
        }
        dates.push ( endDate );
        return dates;
    };
    prevWeek = async () => {
        const end = this.state.end - 7;
        const start = this.state.start - 7;
        await  this.setState ( {
            end:   end,
            start: start,
            week:  {
                start: moment ( new Date () ).weekday ( start ),
                end:   moment ( new Date () ).weekday ( end ),
            },
        } );

    };

    ChangePopup = ( statevalue ) => {
        this.setState ( {
            changePopup: statevalue,
        } );
    };
    SelectTime = ( statevalue ) => {
        this.setState ( {
            selectTime: statevalue,
        } );
    };

    ConfirmedWindow = (value)=>{
        this.setState({
            confirmedPopup:value
        })
    };

    render () {
        const ChangePopup = this.ChangePopup;
        const SelectTime = this.SelectTime;
        const selectDateTime = this.selectDateTime;
        const getDatesArray = this.getDatesArray;
        const ConfirmedWindow = this.ConfirmedWindow;
        const weeek = getDatesArray ();
        return (
            <div className="shedule-component">
                <Dialog className="change-call custom-popup" header="" visible={this.state.changePopup} modal={true} onHide={( e ) => this.setState ( { changePopup: false } )}>
                    <div className="modal-body">
                        <div className="header custom-popup-header">
                            <button onClick={function () {
                                ChangePopup ( false );
                            }}><img src={closeIcon}/></button>
                        </div>
                        <div className="body-content custom-body-content">
                            <div className="text">
                                What day would you like to change your call to?
                            </div>
                            <div className="items custom-type-items">
                                {
                                    weeek.map ( el => {
                                        return (
                                            <div key={el} className="item active custom-type-item" onClick={function () {
                                                selectDateTime ( 'date', el );
                                            }}>
                                                <span>{el.format ( 'MMM ddd D' )}</span>
                                            </div>);
                                    } )
                                }
                            </div>
                            <div className="select-button">
                                <button className="custom-button-orange" onClick={function () {
                                    ChangePopup ( false );
                                    SelectTime ( true );
                                }}>Select
                                </button>
                            </div>
                        </div>

                    </div>
                </Dialog>
                <Dialog className="select-time custom-popup" header="" visible={this.state.selectTime} modal={true} onHide={( e ) => this.setState ( { selectTime: false } )}>
                    <div className="modal-body">
                        <div className="header custom-popup-header">
                            <button onClick={function () {
                                SelectTime ( false );
                            }}><img src={closeIcon}/></button>
                        </div>
                        <div className="body-content custom-body-content">
                            <div className="text">
                                Please select from one of the available times below.
                            </div>
                            <div className="items custom-type-items">
                                <div className="item active custom-type-item">
                                    <span onClick={function () {
                                        selectDateTime ( 'time', '10:00 AM' );
                                    }}>10:00 AM</span>
                                </div>
                                <div onClick={function () {
                                    selectDateTime ( 'time', '11:00 AM' );
                                }} className="item active custom-type-item">
                                    <span>11:00 AM</span>
                                </div>
                                <div onClick={function () {
                                    selectDateTime ( 'time', '12:00 PM' );
                                }} className="item active custom-type-item">
                                    <span>12:00 PM</span>
                                </div>
                                <div onClick={function () {
                                    selectDateTime ( 'time', '1:00 PM' );
                                }} className="item active custom-type-item">
                                    <span>1:00 PM</span>
                                </div>
                            </div>
                            <div className="select-button">
                                <button className="custom-button-orange" onClick={function () {
                                    SelectTime ( false );
                                    ConfirmedWindow(true)
                                }}>Select
                                </button>
                            </div>
                        </div>

                    </div>
                </Dialog>

                <Dialog className="confirmed-popup custom-popup" header="" visible={this.state.confirmedPopup} modal={true} onHide={( e ) => this.setState ( { confirmedPopup: false } )}>
                    <div className="modal-body">
                        <div className="header custom-popup-header">
                            <button onClick={function () {
                                ConfirmedWindow ( false );
                            }}><img src={closeIcon}/></button>
                        </div>
                        <div className="body-content custom-body-content">
                            <div className="text light">
                                Your new scheduled call is confirmed:
                            </div>
                            <div className="text text-bold">
                                {this.state.selectedDateTime.date.format ( 'MMM D ddd' )} @  {this.state.selectedDateTime.time}
                            </div>

                            <div className="select-button">
                                <button className="custom-button-orange" onClick={function () {
                                    ConfirmedWindow ( false );
                                }}>Close</button>
                            </div>
                        </div>

                    </div>
                </Dialog>
                <div className="top-content">
                    <div className="text">Schedule</div>
                    <div className="center-content">
                        <span className="customer-name">{this.props.user.first_name},</span>
                        <span className="text-note">your next scheduled call is </span>
                        <span className="date">
                            {moment ( new Date () ).format ( 'MMM D' ) } at {' '}
                            { moment ( new Date () ).format ( 'HH:mm A' )}
                        </span>
                    </div>
                    <button onClick={this.props.prev}> {'<'} Back</button>

                </div>
                <div className="calendar-header">
                    <button className="prev-mont" onClick={this.prevWeek}>
                        <img src={arrowIcon}/>
                        Prev week
                    </button>
                    <div className="date-text">Week of Jan 8</div>
                    <button className="next-button" onClick={this.nextWeek}> Next week
                        <img src={arrowIcon}/>
                    </button>
                </div>
                <div className="calendar-days">
                    {
                        weeek.map ( el => {
                            return ( <div className="item">
                                <div className="top">
                                    <span className="left">{el.format ( 'MMM D' )}</span>
                                    <span className="right">{el.format ( 'ddd' )}</span>
                                </div>
                                <div className="center">
                            <span className="">
                             10:30 AM
                            </span>
                                    <span>
                                Call
                            </span>

                                </div>
                                <div className="bottom" onClick={function () {
                                    ChangePopup ( true );
                                }}> change
                                </div>
                            </div>);
                        } )
                    }


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
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Shedule );