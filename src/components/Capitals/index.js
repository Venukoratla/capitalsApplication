import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].country}

  update = event => {
    const county = countryAndCapitalsList.map(eachCap =>
      eachCap.id === event.target.value
        ? this.setState({capitalId: eachCap.country})
        : '',
    )
  }

  render() {
    const {capitalId} = this.state

    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <select onChange={this.update}>
            <option value={countryAndCapitalsList[0].id}>
              {countryAndCapitalsList[0].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[1].id}>
              {countryAndCapitalsList[1].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[2].id}>
              {countryAndCapitalsList[2].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[3].id}>
              {countryAndCapitalsList[3].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[4].id}>
              {countryAndCapitalsList[4].capitalDisplayText}
            </option>
          </select>
          <span>is capital of which country?</span>
          <p>{capitalId}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
