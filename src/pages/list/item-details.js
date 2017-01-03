/**
 * Created by Yaroslav on 01.01.2017.
 */
import React, { PropTypes } from 'react';
import {store} from '../../index';

export default class ItemDetails extends React.Component {

    static proptypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.routeParams.id
        };
        console.log('Store',store.getState());
    }
    render() {
        return (
            <div>
                <h1>Item details {this.state.id} works</h1>
            </div>
        );
    }
}
