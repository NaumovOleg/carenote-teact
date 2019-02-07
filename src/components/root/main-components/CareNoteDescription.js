import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as moment from 'moment';
import {Paginator} from 'primereact/paginator';
import searchIcon from '../../../assets/Search@2x.png';
import {Dialog} from 'primereact/dialog';
import lady from '../../../assets/lady.png'
moment.localeData('uk');


class NotesDescriptions extends Component {


    constructor(props) {
        super(props);
    }
    render() {
        const switchBackRoute = this.props.switchBackRoute;
        return (
            <div className="notes-description-component">
                {this.props.note.date.toString()}
                {this.props.note.title}
                {this.props.note.name}
                {this.props.note.link}
                <button onClick={function () {
                    switchBackRoute('notes');
                }}>back</button>

                notess     dldk

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesDescriptions);