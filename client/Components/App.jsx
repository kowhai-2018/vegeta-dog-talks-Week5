import React from 'react'
import Weather from './weather.jsx'

import addVegeta from './addVegeta'

import * as api from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      command: '',
      name: '',
      languange: ''
    }

    this.addVegeta = this.addVegeta.bind(this),
    this.showAddVegeta = this.showAddVegeta.bind(this)

  }

  componentDidMount () {
    this.addVegeta()
  }

  showAddVegeta () {
    this.setState({
      addVegetaVisible: true,
      detailsVisible: false
    })
  }
  
  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Welcome to Vegeta Dog Commands!</h1>

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add Details</a>
        </p>

        {this.state.addWidgetVisible && <AddWidget
          refresh={this.refreshList} />}

        {this.state.editWidget && <EditWidget
          refresh={this.refreshList}
          widgetId={this.state.editWidget} />}

        {this.state.detailsVisible && <WidgetDetails
          deleteWidget={this.deleteWidget}
          hideDetails={this.hideDetails}
          isVisible={this.state.detailsVisible}
          widget={this.state.activeWidget} />}
      </div>
    )
  }
}