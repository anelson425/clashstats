import React from 'react';
import Roster from './Roster.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Roster />
      </div>
    );
  }
}

// fetchClanData() {
//   fetch(`https://raw.githubusercontent.com/anelson425/clashstats/master/data/nb_clan.json`)
//     // We get the API response and receive data in JSON format...
//     .then(response => response.json())
//     // ...then we update the users state
//     .then(data =>
//       this.setState({
//         clan_data: data,
//         isLoading: false,
//       })
//     )
//     // Catch any errors we hit and update the app
//     .catch(error => this.setState({ error, isLoading: false }));
// }

export default App;
