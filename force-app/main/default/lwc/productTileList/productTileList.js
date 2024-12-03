import { LightningElement, api, wire } from 'lwc';

import getProducts from '@salesforce/apex/ProductController.getProducts';

export default class ProductTileList extends LightningElement {
    @api searchBarIsVisible = false;

    handleSearchKeyChange(event){

    }

    handleProductSelected(event){

    }

    @wire (getProducts, {filters: "$filters", pageNumber: "$pageNumber"})
    products;
}