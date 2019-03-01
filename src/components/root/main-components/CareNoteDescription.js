import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';
import { getComments } from '../../../store/actions/index'
import {Paginator} from 'primereact/paginator';
import searchIcon from '../../../assets/Search@2x.png';
import {Dialog} from 'primereact/dialog';
import lady from '../../../assets/lady.png'
import backimg from '../../../assets/Group 268.png';
moment.localeData('uk');


class NotesDescriptions extends Component {

    state = {
        comments: []
    };

    constructor(props) {
        super(props);
    }
    render() {
        const switchBackRoute = this.props.switchBackRoute;
        return (
            <div className="notes-description-component">
            <div className="carenotes-modal-container">
                <div className="carenotes-modal-header">
                    <h3>{this.props.note.title}</h3>
                  <button onClick={function () {
                        switchBackRoute('notes');
                    }}> <img src={backimg}/> <span>Back</span></button>
                </div>
                <div className="carenotes-modal-text-box">
                    <p className="carenotes-modal-text"  dangerouslySetInnerHTML={{__html: this.getCommentHTML()}}></p>

                    <div className="carenotes-employee-info">
                        <img src={lady}/>
                        <p>{this.props.note.name}<br/>Carenote Team Member</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }

    async componentWillMount() {
        this.setState({comments: await getComments(this.props.note)});
    };

    getCommentHTML () {
        if (this.state.comments.length){
            return  this.state.comments[0].html_body;
        }
        return '';
    };

}
const mapStateToProps = state => {
    return { 
        comments: state.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesDescriptions);
