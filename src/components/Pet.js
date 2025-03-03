import React from 'react'

class Pet extends React.Component {

  render() {
    return (
      <div className="card" key="{this.props.index}">
        <div className="content">
          <div className="header">
            {this.props.pet.gender === 'female' ? '♀ ' : '♂ '}
            {this.props.pet.name}
          </div>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* if isAdopted is true the button is already adopted is shown */}
          {this.props.pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button> ) : (
          <button className="ui primary button"
          // onAdoptPet is received from App.js it returns the pet.id who's button is clicked
          onClick= {() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button> )
        }
        </div>
      </div>
    )
  }
}

export default Pet
