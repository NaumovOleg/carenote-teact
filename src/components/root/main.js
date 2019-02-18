import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from './main-components/Profile';
import Notes from './main-components/CareNotes';
import Shedule from './main-components/Shedules';
import Subscriptions from './main-components/Subscriptions';
import * as actions from '../../store/actions/index';
import NotesDescriptions from '../root/main-components/CareNoteDescription';
import Cookies  from 'universal-cookie';
class Main extends Component {

    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.state = {
            userId: this.cookies.get('care-note-api-user') ,
            routes: {
                'profile': {active: false, component: <Profile/>},
                'subscriptions': {active: true, component: <Subscriptions/>},
                'shedule': {active: false, component: <Shedule prev={this.switchPreviousRoute}/>},
                'notes': {active: false, component: <Notes swithcRoute={this.switchNotePrewiewRoute}/>},
                'notePreview': {}
            },
            currentRoute: {name: 'subscriptions', component: <Subscriptions/>},
            previousRoute: {
                name: 'subscriptions', component: <Subscriptions/>,
            },
        };
    }

    getData = async () => {
        const products = this.props.getProducts();
        const shopifyuserId = this.cookies.get('care-note-api-user');
        console.log( shopifyuserId );
        const user = await this.props.getCustomer(shopifyuserId);
        const subscriptions = this.props.getSubscriptions(user.id);
        const address = this.props.getAddress(user.id);

    };

    componentWillMount() {
        this.getData();
    }

    switchNotePrewiewRoute = (props) => {
        let routes = this.state.routes;
        let currentRoute = this.state.currentRoute;
        let previousRoute = this.state.currentRoute;
        Object.keys(routes).map(el => {
            routes[el].active = false;
        });
        routes['notePreview'].active = true;
        const noteComponent = <NotesDescriptions note={props} switchBackRoute={this.switchRoute}
                                                 swithcRoute={this.switchRoute}/>;
        routes['notePreview'].component = noteComponent;
        currentRoute = {name: 'notePreview', component: noteComponent};
        this.setState({
            routes: routes,
            currentRoute: currentRoute,
            previousRoute: previousRoute,
        });
    }
    switchRoute = (route) => {
        if (this.state.currentRoute.name === route) {
            return;
        }
        ;
        let routes = this.state.routes;
        let currentRoute = this.state.currentRoute;
        let previousRoute = this.state.currentRoute;
        Object.keys(routes).map(el => {
            routes[el].active = false;
            if (route === el) {
                routes[el].active = true;
                currentRoute = {name: route, component: routes[el].component};
            }
        });
        this.setState({
            routes: routes,
            currentRoute: currentRoute,
            previousRoute: previousRoute,
        });
    };

    switchPreviousRoute = () => {
        let routes = this.state.routes;
        let previousRoute = this.state.previousRoute;
        const route = previousRoute.name;
        Object.keys(routes).map(el => {
            routes[el].active = false;
            if (route === el) {
                routes[el].active = true;
            }
        });
        this.setState({
            routes: routes,
            currentRoute: previousRoute,
            previousRoute: previousRoute,
        });
    };

    checkAuth = () => {
        if (window.currntCustomer == undefined) {
            window.location = '/pages/login';
        }
    }

    render() {
        const switchRoute = this.switchRoute;
        const styleForMenu = {
            display: this.state.currentRoute.name === 'shedule' || this.state.currentRoute.name === 'notePreview' ? 'none' : 'flex',
        };

        const stylesForActivRoutes = {
            subscriptions: this.state.routes.subscriptions.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
            shedule: this.state.routes.shedule.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
            profile: this.state.routes.profile.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
            notes: this.state.routes.notes.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
        };

        const routesStyle = {
            ...this.state.currentRoute.name !== 'shedule' ?
                {
                    width: '860px',
                } :
                {
                    margin: 'auto'
                }
        }

        return (

            <div className="main-component">
                <div className="menu-component" style={styleForMenu}>
                    <div className="menu-container">
                        <div className="menu-items">
                            <div className={stylesForActivRoutes.subscriptions}>
                                <div onClick={function () {
                                    switchRoute('subscriptions');
                                }} className="text">Subscriptions
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.shedule}>
                                <div onClick={function () {
                                    switchRoute('shedule');
                                }} className="text">Schedule
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.profile}>
                                <div onClick={function () {
                                    switchRoute('profile');
                                }} className="text">My Profile
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.notes}>
                                <div onClick={function () {
                                    switchRoute('notes');
                                }} className="text">Carenotes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="routers-montainer" style={routesStyle}>
                    {this.state.currentRoute.component}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        getCustomer: (CID) => dispatch(actions.getCustomer(CID)),
        getAddress: (scutomerId) => dispatch(actions.getAddress(scutomerId)),
        getSubscriptions: (scustomer) => dispatch(actions.getSubscriptions(scustomer)),
        getProducts: () => dispatch(actions.getProducts())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main) ;
