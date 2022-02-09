import $ from 'jquery';

export default class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(elementId) {
        $(`#${elementId}`).text(`${this.firstName} ${this.lastName}`); //Using jQuery again
    }
}