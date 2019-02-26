import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';
import {Paginator} from 'primereact/paginator';
import searchIcon from '../../../assets/Search@2x.png';
import {Dialog} from 'primereact/dialog';
moment.localeData('uk');

class Notes extends Component {
    state = {
        first: 0,
        visible: false,
        currentRoute: "list",
        selectedNote: {}
    };

    constructor(props) {
        super(props);
    }


    getNotes = () => {
        return this.props.notes.slice(this.state.first, 10 + this.state.first)
    };
    previewNote = (event) => {
        this.props.swithcRoute( event )
    };
    onHide = (event) => {
        this.setState({visible: false});
    }

    render() {
        const notes = this.getNotes();
        const previewNote = this.previewNote;
        return (
            <div className="notes-component">
                <button label="Show" className="modal-button"/>
                <div className="notes-container">
                    <div className="header">Carenotes</div>
                    <div className="items-container">
                        {
                            notes.map(el => {
                                return <div className="item" key={el.date + el.title}>
                                    <div className="dates"> {moment(el.date).format('mm/D')}</div>
                                    <div className='title'>{el.title}</div>
                                    <a className="search-img" onClick={function () {
                                        previewNote( el )
                                    }}><img src={searchIcon}
                                            className="search-icon"/></a>
                                </div>
                            })
                        }
                    </div>
                </div>
                <Paginator
                    rows={10}
                    totalRecords={this.props.notes.length}
                    first={this.state.first}
                    onPageChange={(e) => {
                        this.setState({first: e.first});
                        console.log(this.state);
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

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
