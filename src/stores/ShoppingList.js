/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here

        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem : action,
            deleteItem: action
        })

    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
    }
    editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }
    deleteItem = (itemName) => {
        let index = this.list.findIndex(i => i.name === itemName)
        this.list.splice(index, 1)
    }
}

