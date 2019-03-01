import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';
import * as actions from '../../../store/actions/index'
import {Paginator} from 'primereact/paginator';
import searchIcon from '../../../assets/Search@2x.png';
import {Dialog} from 'primereact/dialog';
moment.localeData('uk');

class Notes extends Component {
    state = {
        first: 0,
        page: 1,
        visible: false,
        currentRoute: "list",
        selectedNote: {}
    };

    constructor(props) {
        super(props);
    }


    getNotes = () => {
        return this.props.notes;
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
                                return <div className="item" key={el.created_at + el.description}>
                                    <div className="date"> {moment(el.created_at).format('MM/D')}</div>
                                    <div className='title'>{el.description}</div>
                                    <a className="search-img" onClick={function () {
                                        previewNote( el.id )
                                    }}><img src={searchIcon}
                                            className="search-icon"/></a>
                                </div>
                            })
                        }
                    </div>
                </div>
                <Paginator
                    rows={10}
                    totalRecords={this.props.count}
                    first={this.state.first}
                    
                    onPageChange={(e) => {
                        this.setState({first: e.first, page: e.page+1});
                       
                        this.props.getNotes(this.props.requesterId, e.page+1);
                    }}>
                </Paginator>
            </div>
        );
    }

    componentWillMount() {
        this.props.getNotes(this.props.requesterId, this.state.page);
    };
};



const mapStateToProps = state => {
    return { 
        notes: state.notes.notes,
        count: state.notes.count,
        requesterId: state.auth.user.requester_id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getNotes: (reqId, page) => dispatch(actions.getNotes(reqId,page))
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
