import React from 'react';

function Welcome({ firstName, lastName }) {
  return (
    <>
      <h2>
        Bem vindo {firstName} {lastName}
      </h2>
      <p>Você não tem novas notificações.</p>
    </>
  );
}

function App({ isLoggedIn }) {
  return (
    <div>
      <h1>Introdução ao React</h1>
      {isLoggedIn && (
        <Welcome
          firstName="Marcelo"
          lastName="Dapper"
        />
      )}
    </div>
  );
}

export default App;
