import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form cardName={ name } onInputChange={ this.onInputChange } />
        <Card cardName={ name } />
      </div>
    );
  }
}

export default App;
