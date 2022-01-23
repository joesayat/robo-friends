import React, { Component } from  'react';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import CardList from '../component/CardList';
import ErrorBoundary from '../component/ErrorBoundary';

class App extends Component {
  constructor() {
    super();

    this.state = {
      /** 
       * List of robots.
       * @type {Array}
       */
      robots: [],
      /** 
       * Input field value.
       * @type {string}
      */
      searchfield: '',
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users}));
  }

  render() {
    return (
      <div className='tc'>
        <h1 className='f-headline mv3'>RoboFriends</h1>
        <SearchBox onSearchChange={this._onSearchChange}/>
        <Scroll> 
          <ErrorBoundary>
            {this._renderCardList()}
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }

  /**
   * Renders card list.
   * @returns {TemplateResult} card list.
   */
  _renderCardList() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return robots.length 
    ? <CardList robots={filteredRobots}/>
    : <h1>Loading...</h1>;
  }

  /**
   * Triggered on search input change.
   * @param {Object} e Contains value
   */
  _onSearchChange = (e) => {
    const {target: {value}} = e;  

    this.setState({searchfield: value});
  }
};

export default App;