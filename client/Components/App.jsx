import React from 'react'
import Weather from './weather.jsx'

import AddVegeta from './AddVegeta'

import * as api from '../api'
import GetVegeta from './GetVegeta.jsx'

export default class App extends React.Component {
  state = {
      id: '',
      command: '',
      name: '',
      languange: ''
  }

  componentDidMount () {
    // addVegeta()
  }

  showAddVegeta () {
    // setState({
    //   addVegetaVisible: true,
    //   detailsVisible: false
    // })
  }

  render () {
    return (
      <div>
        {/* <ErrorMessage error={this.state.error} /> */}
                <h1>Welcome to Vegeta Dog Commands!</h1>
        <p>
          {/* <a id='show-widget-link' href='#'
            onClick={this.showAddVegeta}>Add Details</a> */}
        </p>
        <GetVegeta />
        <h2>Add Details</h2>
        <AddVegeta />
        <Weather />
        {/* {this.state.detailsVisible && <WidgetDetails
          deleteWidget={this.deleteWidget}
          hideDetails={this.hideDetails}
          isVisible={this.state.detailsVisible}
          widget={this.state.activeWidget} />} */}
      </div>
    )
  }
}
