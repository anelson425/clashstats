import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
// import "../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

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
    },{
      dataField: 'name',
      text: 'Name',
      sort: true
    }, {
      dataField: 'role',
      text: 'Role',
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
