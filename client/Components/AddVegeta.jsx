import React from 'react'

import * as api from '../api'

export default class AddVegeta extends React.Component {
 state = {
      id: '',
      command: '',
      name: '',
      russian: '',
      maori: '',
      bahasa: '',
      korean: '',
      samoan: '',
      dutch: ''
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
          {/* <p><input placeholder='ID' name='id'
            onChange={this.handleChange}
            value={this.state.id}
          /></p> */}
          <p><input placeholder='Command' name='commands'
            onChange={this.handleChange}
            value={this.state.command}
          /></p>
          <p><input placeholder='Dog Name' name='dogName'
            onChange={this.handleChange}
            value={this.state.dogName}
          /></p>
          {/* <p><input placeholder='Russian' name='russian'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p>
          <p><input placeholder='Maori' name='maori'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p>
          <p><input placeholder='Bahasa' name='bahasa'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p>
          <p><input placeholder='Korean' name='korean'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p>
          <p><input placeholder='Samoan' name='samoan'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p>
          <p><input placeholder='Dutch' name='dutch'
            onChange={this.handleChange}
            value={this.state.languange}
          /></p> */}
          <button type='button' onClick={this.addVegeta}>Add Details</button>
          {' '}
        </form>
      </div>
    )
  }
}
