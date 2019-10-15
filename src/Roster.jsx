import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import Img from 'react-image'

class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/anelson425/clashstats/master/data/nb/clan.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ members: data.memberList })
      })
  }

  render() {
    const columns = [{
      dataField: 'tag',
      text: 'Tag',
      hidden: true
    }, {
      dataField: 'name',
      text: 'Name',
      sort: true
    }, {
      dataField: 'role',
      text: 'Role',
      sort: true
    }, {
      dataField: 'trophies',
      text: 'League',
      formatter: (cell, row) => <Img src={row.league.iconUrls.small} />,
      sort: true
    }, {
      dataField: 'donations',
      text: 'Donations',
      sort: true
    }, {
      dataField: 'donationsReceived',
      text: 'Donations Received',
      sort: true
    }];

    return (
      <div>
        <BootstrapTable
          keyField='tag'
          data={this.state.members}
          columns={columns}
          striped
          hover
          condensed
          bootstrap4={true}
        />
      </div>
    );
  }
}

export default Roster;
