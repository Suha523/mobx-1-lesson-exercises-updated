import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let itemName = this.props.item.name
    let newLocation = prompt("What is the new location? ")
    this.props.store.editItem(itemName, newLocation)
  }
  deleteItem = () => {
    let itemName = this.props.item.name
    this.props.store.deleteItem(itemName)
  }
  render() {
    let item = this.props.item
    return (
      <div className="">
        <input type='checkbox' 
               value={item.name} 
               onClick = {this.checkItem} 
         /><span className={item.completed ? "crossed" : null} >{item.name} - {item.location}</span>
         <button className='editButton' onClick={this.editItem}>Edit</button>
         <button className='deleteItem ' onClick={this.deleteItem}>X</button>
        {/* your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
       */}
      </div>)
  }
}

export default observer(Item)