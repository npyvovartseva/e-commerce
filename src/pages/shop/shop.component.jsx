import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/preveiw-collection.component';
import SHOP_DATA from './shop.data';

export default class Shop extends Component {
    state = {
        collections: SHOP_DATA
    }
    renderCollections() {
        return this.state.collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))
    }
    render() {
        return (
            <div className='shop-page'>
                {this.renderCollections()}
            </div>
        )
    }
}
