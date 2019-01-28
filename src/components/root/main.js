import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './main-components/Profile';
import Notes from './main-components/CareNotes';
import Shedule from './main-components/Shedules';
import Subscriptions from './main-components/Subscriptions';
import '../../styles/root/main.css';

class Main extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            routes:        {
                'profile':       { active: false, component: <Profile/> },
                'subscriptions': { active: true, component: <Subscriptions/> },
                'shedule':       { active: false, component: <Shedule prev={this.switchPreviousRoute}/> },
                'notes':         { active: false, component: <Notes/> },
            },
            currentRoute:  { name: 'subscriptions', component: <Subscriptions/> },
            previousRoute: {
                name: 'subscriptions', component: <Subscriptions/>,
            },

        };
    }

    switchRoute = ( route ) => {
        if ( this.state.currentRoute.name === route ) {
            return;
        }
        ;
        let routes = this.state.routes;
        let currentRoute = this.state.currentRoute;
        let previousRoute = this.state.currentRoute;
        Object.keys ( routes ).map ( el => {
            routes[ el ].active = false;
            if ( route === el ) {
                routes[ el ].active = true;
                currentRoute = { name: route, component: routes[ el ].component };
            }
        } );
        this.setState ( {
            routes:        routes,
            currentRoute:  currentRoute,
            previousRoute: previousRoute,
        } );
    };

    switchPreviousRoute = () => {
        let routes = this.state.routes;
        let previousRoute = this.state.previousRoute;
        const route = previousRoute.name;
        Object.keys ( routes ).map ( el => {
            routes[ el ].active = false;
            if ( route === el ) {
                routes[ el ].active = true;
            }
        } );
        this.setState ( {
            routes:        routes,
            currentRoute:  previousRoute,
            previousRoute: previousRoute,
        } );
    };

    render () {
        const switchRoute = this.switchRoute;

        const styleForMenu = {
            display:this.state.currentRoute.name === 'shedule'?'none':'flex'
        }

        const stylesForActivRoutes = {
            subscriptions: this.state.routes.subscriptions.active?'header-navigation-menu header-navigation__selected':'header-navigation-menu',
            shedule:       this.state.routes.shedule.active?'header-navigation-menu header-navigation__selected':'header-navigation-menu',
            profile:       this.state.routes.profile.active?'header-navigation-menu header-navigation__selected':'header-navigation-menu',
            notes:         this.state.routes.notes.active?'header-navigation-menu header-navigation__selected':'header-navigation-menu',
        };

        return (
            <div className="main-component">
                <div className="menu-component" style={styleForMenu}>
                    <div className="menu-container">
                        <div className="menu-items">
                            <div className={stylesForActivRoutes.subscriptions}>
                                <div onClick={function () {
                                    switchRoute ( 'subscriptions' );
                                }} className="text">Subscriptions
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.shedule} >
                                <div onClick={function () {
                                    switchRoute ( 'shedule' );
                                }} className="text">Schedule
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.profile}>
                                <div onClick={function () {
                                    switchRoute ( 'profile' );
                                }} className="text">My Profile
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.notes}>
                                <div onClick={function () {
                                    switchRoute ( 'notes' );
                                }} className="text">Carenotes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="routers-montainer">
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
    return {};
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Main ) ;