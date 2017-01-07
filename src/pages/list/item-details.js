/**
 * Created by Yaroslav on 01.01.2017.
 */
import React, { PropTypes } from 'react';
import {store} from '../../index';
import { bindAll} from 'lodash';
import   './styles.less';

export default class ItemDetails extends React.Component {

    static proptypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        bindAll(this,['getCurrentItemFromStore']);
        const item = this.getCurrentItemFromStore();
        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };


    }
    getCurrentItemFromStore() {
        const actualStore = store.getState();
        const {items} = actualStore.list;

        const idx = items.findIndex(item => item.id ===  Number(this.props.routeParams.id));
        return {
            id: items[idx].id,
            name: items[idx].name,
            youtube: items[idx].youtube
        };
    }
    render() {
        return (
            <div className='row b-list-details'>
                <div className='col-xs-12'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <b>{this.state.id}</b>
                            { this.state.name }
                        </div>
                        <div className="panel-body">
                            <p>URL: {this.state.youtube}</p>
                            <iframe src= {`https://www.youtube.com/embed/${this.state.youtube}`}
                            frameBorder='0'
                            allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
