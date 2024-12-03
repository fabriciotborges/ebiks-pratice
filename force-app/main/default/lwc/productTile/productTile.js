import { LightningElement, api } from 'lwc';

export default class ProductTile extends LightningElement {
    @api draggable;

    pictureUrl;
    name;
    msrp;
    _product;

    handleDragStart(vent){

    }

    handleClick(event){

    }
}