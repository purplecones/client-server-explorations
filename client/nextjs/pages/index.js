import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }
  render() {
    return this.state.data ?
      <div>{this.state.data.message}</div> :
      <div>no data</div>
  }
}
