import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddUserForm";
import EditFishForm from "./EditUserForm";

class UserList extends React.Component {

  constructor() {
    super();

    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      uid: null,
      owner: null,
    };
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key]

    const updatedFish = {
      ...fish,
      [e.target.name]: [e.target.value],
    }

    this.props.changeUser(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="price" value={fish.price} placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)}/>

        <button onClick={() => this.props.removeUser(key)}>Remove Fish</button>
      </div>
    )
  }

  return (
    <div>
      {Object.keys(this.props.users).map(this.renderInventory)}
      <AddUserForm addUser={this.props.addUser}/>
    </div>
  )
}

export default UserList;
