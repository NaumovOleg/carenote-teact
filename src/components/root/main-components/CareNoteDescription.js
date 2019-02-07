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
            <div className="carenotes-modal-container">
                <div className="carenotes-modal-header">
                    <h3>{this.props.note.title}</h3>
                  <button onClick={function () {
                        switchBackRoute('notes');
                    }}> Back</button>
                </div>
                <div className="carenotes-modal-text-box">
                    <p className="carenotes-modal-text">Dear Elbert,<br />
                        Your Aunt Edna and I chatted the other day. She mentioned over text that you were
                        meeting for brunch last Saturday. But when I asked her about it, she moved right
                        passed
                        it. I don’t know that there’s any reason for concern, but I wanted to bring it to
                        your
                        attention.
                        I did ask about the sweater vest you sent her. I’m under the impression she’s not
                        wearing it. She said, “Sweater? I like to wear what I knit myself.” And she was a
                        little
                        more curt than usual.
                        Last, we spent most of our time discussing the geopolitical dilemma presented by
                        globalization and the inherent tensions as historical regional powers jockey for
                        economic superiority under the pressure their respective citizenries’ ambitions and
                        tastes for luxury goods grow. We focused primarily on Russia, but for next week I
                        promised to share my insights on what I’ve observed in the Asian markets.</p>
                    <div className="carenotes-modal-link">
                        <a href="#">{this.props.note.link}</a>
                    </div>
                    <div className="carenotes-employee-info">
                        <p>{this.props.note.name}<br/>Carenote Team Member</p>
                    </div>
                </div>
            </div>
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
