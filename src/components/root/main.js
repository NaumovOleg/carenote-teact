import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from './main-components/Profile';
import Notes from './main-components/CareNotes';
import Shedule from './main-components/Shedules';
import Subscriptions from './main-components/Subscriptions';
import * as actions from '../../store/actions/index';
import NotesDescriptions from '../root/main-components/CareNoteDescription';
import Cookies  from 'universal-cookie';
import { Icon } from 'react-icons-kit'
import {twitter} from 'react-icons-kit/icomoon/twitter';
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import mobphone from '../../assets/mob-phone.png';
import backarrow from '../../assets/arrow-left.png'
const isMobile = window.innerWidth<616;
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
            view: ''
        };
    }
    getData = async () => {
        // this.cookies.set('additional-subscription_data',{
        //     relationship_status:'other relative',
        //     call_quantity:'10',
        //     whos_signing:'me'
        // });
        const products = this.props.getProducts();
        const shopifyuserId = this.cookies.get('care-note-api-user')||1205206646873 ;
        const user = await this.props.getCustomer(shopifyuserId);
        const additional = await this.props.getAdditionalSubscriptionsData( user.id );
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
    };
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

    render() {

        const switchRoute = this.switchRoute;
        const styleForMenu = {
            display: this.state.currentRoute.name === 'shedule' || this.state.currentRoute.name === 'notePreview' ? 'none' : 'flex',
        };

        if(isMobile) styleForMenu.display = 'none';

        const stylesForActivRoutes = {
            subscriptions: this.state.routes.subscriptions.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
            shedule: this.state.routes.shedule.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
            profile: this.state.routes.profile.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
            notes: this.state.routes.notes.active ? 'header-navigation-menu header-navigation__selected' : 'header-navigation-menu',
        };

        const routesStyle = {
            ...this.state.currentRoute.name !== 'shedule' ? {width: '860px',} : {margin: 'auto'}
        }


        const setMenuRef = this.props.setMenuRef;
        const showMenu = this.props.showMenu;

        let planName = '';
        if (this.props.subscriptions.shopify_product_id !== undefined) {
            planName = this.props.parcedProducts [this.props.subscriptions.shopify_product_id].name
        }
        const hideMenu = () => {
            let menu = document.getElementsByClassName('menu-component')[0];
            menu.style.display = 'none'
        };
        return (

            <div className="main-component">
                <div className="menu-component" ref={el => setMenuRef(el)}   style={styleForMenu}>
                    <div className="mobile-menu-header"  >
                        <div onClick={function () {
                            showMenu('none')
                        }}><img src={backarrow} /></div>
                    </div>

                    <div className="menu-container">
                        <div className="welcome-wrapper">
                            <div className="user-first-name">
                                Hi { this.props.auth.user.first_name }
                            </div>
                            <div className="separator"></div>
                            <div className="user-choosed-plan">
                                { planName } Plan
                            </div>
                        </div>
                        <div className="menu-items">
                            <div className={stylesForActivRoutes.subscriptions}>
                                <div onClick={function () {
                                    if(isMobile) hideMenu();
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
                                    if(isMobile) hideMenu();
                                    switchRoute('profile');
                                }} className="text">My Profile
                                </div>
                            </div>
                            <div className={stylesForActivRoutes.notes}>
                                <div onClick={function () {
                                    if(isMobile) hideMenu();
                                    switchRoute('notes');
                                }} className="text">Carenotes
                                </div>
                            </div>

                        </div>
                        <div className="logout-menu">Logout</div>
                        <div className="bottom-mobile-menu">
                            <div className="bottom-mobile-menu-item">FAQs</div>
                            <div className="bottom-mobile-menu-item">Terms & Conditions</div>
                            <div className="bottom-mobile-menu-item">Privacy Policy</div>
                            <div className="bottom-mobile-menu-item">Contact</div>
                            <div className="social-icons">
                                <div className="icon"><Icon icon={twitter} /></div>
                                <div className="icon"><Icon icon={facebook} /></div>
                                <div className="icon"><Icon icon={instagram} /></div>
                            </div>
                        </div>
                        <div className="footer-mobile-menu">
                            <div className="phone-number"><img src={mobphone} />1-888-449-8989</div>
                            <div className="rights-text">2019 Copyright Carenote.com. All Rights Reserved.</div>
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
        getProducts: () => dispatch(actions.getProducts()),
        getAdditionalSubscriptionsData:( CID )=>{
            dispatch(actions.getAdditionalSubscriptionsData(CID))
        },
        updateAdditionalSubscriptionsData:(CID,data)=>dispatch(actions.updateAdditionalSubscriptionsData( CID, data ))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main) ;
