import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

import CATEGORY_FIELD from '@salesforce/schema/Product__c.Category__c';
import MATERIAL_FIELD from '@salesforce/schema/Product__c.Material__c';
import LEVEL_FIELD from '@salesforce/schema/Product__c.Level__c';

export default class ProductFilter extends LightningElement {
    maxPrice = 10000;

    @wire(getPicklistValues, {recordTypeId:'012000000000000AAA', fieldApiName: CATEGORY_FIELD})
    categories;

    @wire(getPicklistValues, {recordTypeId:'012000000000000AAA', fieldApiName: MATERIAL_FIELD})
    materials;

    @wire(getPicklistValues, {recordTypeId:'012000000000000AAA', fieldApiName: LEVEL_FIELD})
    levels;

    handleSearchKeyChange(event){

    }

    handleMaxPriceChange(event){

    }

    handleCheckBoxChange(event){

    }
}