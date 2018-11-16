import React from 'react'

import * as api from '../api'


export default class addVegeta extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      command: '',
      name: '',
      languange: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWidget = this.addWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addVegeta (e) {
    api.appendVegeta(this.state)
      .then(this.props.refresh)
      .catch(console.error)
  }

  render () {
    return (
      <div className='add-vegeta'>
        <form>
          <p><input placeholder='ID' name='id'
            onChange={this.handleChange}
            value={this.state.id}
          /></p>
          <p><input placeholder='Command' name='commands'
            onChange={this.handleChange}
            value={this.state.command}
          /></p>
          <p><input placeholder='Dog Name' name='dogName'
            onChange={this.handleChange}
            value={this.state.dogName}
          /></p>
          <p><input placeholder='Select Language' name='language'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p>
          <button type='button' onClick={this.addVegeta}>Add Details</button>
          {' '}
        </form>
      </div>
    )
  }
}