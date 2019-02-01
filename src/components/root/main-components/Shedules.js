import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Dialog } from 'primereact/dialog';
import * as moment from 'moment';
import arrowIcon from '../../../assets/Down_arrow_small@2x.png';
import closeIcon from '../../../assets/No@2x.png';
moment.locales ( 'us' );

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
        selectedDateTime: {
            time: '',
            date: '',
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
        console.log( type, value );
        this.setState ( {
            selectedDateTime: {
                ...this.state.selectDateTime,
                [type]:value
            },
        } );

    };
    getDatesArray = ()=>{
        const dates = [];
        const startDate = this.state.week.start.clone();
        const endDate = this.state.week.end.clone();
        dates.push( startDate );
        for(var a = 1;a<=5;a++ ){
            const day =  startDate.clone().add( a, 'day');
            dates.push(day)
        }
        dates.push(endDate);
        return dates
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
    render () {

        const array = [ 1, 2, 3, 4, 5, 6, 7 ];
        const ChangePopup = this.ChangePopup;
        const SelectTime = this.SelectTime;
        const selectDateTime = this.selectDateTime;
        const getDatesArray = this.getDatesArray;
        const weeek = getDatesArray();
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
                                <div className="item active custom-type-item">
                                    <span>Jan 8, Sun</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>Jan 9, Mon</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>Jan 10, Tue</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>Jan 11, Wed</span>
                                </div>
                                <div className="item inactive custom-type-item">
                                    <span>Jan 12, Thu</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>Jan 13, Fri</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>Jan 14, Sat</span>
                                </div>
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
                                    <span>10:00 AM</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>11:00 AM</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>12:00 PM</span>
                                </div>
                                <div className="item active custom-type-item">
                                    <span>1:00 PM</span>
                                </div>
                            </div>
                            <div className="select-button">
                                <button className="custom-button-orange" onClick={function () {
                                    SelectTime ( false );
                                }}>Select
                                </button>
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