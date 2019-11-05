import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { map as _map } from 'lodash';

const TableComponent = ({ dataList, onEdit, onRemove }) => {
  console.log(dataList)
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Count</Table.HeaderCell>
          <Table.HeaderCell>On stores</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {_map(dataList, ({ name, count, onStores, id }, index) => {
          return (
            <Table.Row key={`table-item-${index}`}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{count}</Table.Cell>
              <Table.Cell>{onStores}</Table.Cell>
              <Table.Cell>
                <Button icon='edit' onClick={() => onEdit(id)} />
                <Button icon='remove' onClick={() => onRemove(id)} />
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
  </Table>
  )
}

export default TableComponent;
