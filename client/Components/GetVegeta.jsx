import React from 'react'
// import getVegeta from '../../server/db'

import * as api from '../api'

export default class GetVegeta extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      command: this.props.command,
      name: this.props.dogName,
      russian: this.props.russian,
      maori: this.props.maori,
      bahasa: this.props.bahasa,
      korean: this.props.korean,
      samoan: this.props.samoan,
      dutch: this.props.dutch
    }
  }

  componentDidMount () {
    api.getVegeta()
  }

  render () {
    return (
      <div className='get-vegeta'>
        <form>
          <p><input placeholder='ID' name='id'
            value={this.state.id}
          /></p>
          <p><input placeholder='Command' name='commands'
            value={this.state.command}
          /></p>
          <p><input placeholder='Dog Name' name='dogName'
            value={this.state.dogName}
          /></p>
          <p><input placeholder='Russian' name='russian'
            value={this.state.languange}
          /></p>
          <p><input placeholder='Maori' name='maori'
            value={this.state.languange}
          /></p>
          <p><input placeholder='Bahasa' name='bahasa'
            value={this.state.languange}
          /></p>
          <p><input placeholder='Korean' name='korean'
            value={this.state.languange}
          /></p>
          <p><input placeholder='Samoan' name='samoan'
            value={this.state.languange}
          /></p>
          <p><input placeholder='Dutch' name='dutch'
            value={this.state.languange}
          /></p>
        </form>
      </div>
    )
  }
}
