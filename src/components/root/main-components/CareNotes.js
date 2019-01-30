import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { Paginator } from 'primereact/paginator.js';
import searchIcon from '../../../assets/Search@2x.png'
moment.localeData ( 'uk' );


class Notes extends Component {
    state = {
        first: 0,
    };

    constructor ( props ) {
        super ( props );
    }

    getNotes = () => {
        return this.props.notes.slice(this.state.first, 5+this.state.first)
    };

    render () {
        const notes = this.getNotes();
        console.log( notes );
        return (


            <div className="notes-component">
                <div className="notes-container">
                    <div className="header">Carenotes</div>
                    <div className="items-container">
                        {
                            notes.map(el=>{
                               return  <div className="item">
                                   <div className="date"></div>
                                    <div className='title'>{el.title}</div>
                                   <img src={searchIcon} className="search-icon"/>
                                </div>
                            })
                        }
                    </div>
                </div>
                <Paginator
                    rows={5}
                    totalRecords={this.props.notes.length}
                    first={this.state.first}
                    onPageChange={( e ) => {
                        this.setState ( { first: e.first } );
                        console.log ( this.state );
                    }}>

                </Paginator>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Notes );
