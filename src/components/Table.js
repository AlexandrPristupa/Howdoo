import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { map as _map } from 'lodash';

const TableComponent = ({ dataList, onEdit, onRemove }) => {
  console.log(dataList)
  return (
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Count</Table.HeaderCell>
          <Table.HeaderCell>On stores</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {_map(dataList, (item, index) => {
          console.log(item);
          return (
            <Table.Row key={`table-item-${index}`}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.count}</Table.Cell>
              <Table.Cell>{item.onStores}</Table.Cell>
              <Table.Cell>
                <Button icon='edit' onClick={onEdit} />
                <Button icon='remove' onClick={onRemove} />
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
  </Table>
  )
}

export default TableComponent;
