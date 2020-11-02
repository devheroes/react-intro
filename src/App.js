import React from 'react';

function Welcome({ firstName, lastName }) {
  return (
    <h2>
      Bem vindo {firstName} {lastName}
    </h2>
  );
}

/* const Welcome = ({ firstName, lastName }) => (
  <h2>
    Bem vindo {firstName} {lastName}!
  </h2>
); */

/* class Welcome extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <h2>
        Bem vindo {firstName} {lastName}!
      </h2>
    );
  }
} */

function App() {
  return (
    <div>
      <h1>Introdução ao React</h1>
      <Welcome
        firstName="Marcelo"
        lastName="Dapper"
      />
    </div>
  );
}

export default App;
