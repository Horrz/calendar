import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import getDistance from 'geodist';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tournaments, location } = this.props;
    return (
      <div>
        <ReactTable
          data={tournaments}
          columns={[{
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'date',
            Header: 'Datum',
            accessor: tournament => tournament.date && `${tournament.date}`,
          },
          {
            Header: 'Ort',
            accessor: 'place',
          },
          {
            id: 'distance',
            Header: 'Entfernung (km)',
            accessor: tournament => getDistance({ lat: location.lat, lon: location.lng }, { lat: tournament.lat, lon: tournament.lng }, { unit: 'km' }),
          },
          ]}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

export { Navigation as default };
