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

                    <Dialog visible={this.state.visible} onHide={this.onHide} className="carenotes-modal-window">
                        <div className="carenotes-modal-container">
                            <div className="carenotes-modal-header">
                                <h3>Carenote 04</h3>
                                <p>2/1/19</p>
                            </div>
                            <div className="carenotes-modal-text-box">
                                <p className="carenotes-modal-text">Dear Elbert,
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
                                    <a href="#">Here’s a link to a lecture she shared on the subject.</a>
                                </div>
                            </div>
                            <div className="carenotes-employee-info">
                                <p>Gloria Anderson<br/>Carenote Team Member</p>
                            </div>
                        </div>
                    </Dialog>
                    <div className="items-container">
                        {
                            notes.map(el => {
                                return <div className="item" key={el.date + el.title}>
                                    <div className="date"> {moment(el.date).format('mm/D')}</div>
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
