import { Box, Button, Table as ChakraTable } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TableProps<T> {
  headers: ReactNode[];
  items: T[];
  renderRow: (item: T) => ReactNode;
}

const TableUI = <T,>({ headers, items, renderRow }: TableProps<T>) => {
  return (
    <>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Button>Crear</Button>
      </Box>
      <ChakraTable.Root size="sm">
        <ChakraTable.Header>
          <ChakraTable.Row>
            {headers.map((header, index) => (
              <ChakraTable.ColumnHeader key={index}>
                {header}
              </ChakraTable.ColumnHeader>
            ))}
          </ChakraTable.Row>
        </ChakraTable.Header>
        <ChakraTable.Body>
          {items.map((item, index) => (
            <ChakraTable.Row key={index}>{renderRow(item)}</ChakraTable.Row>
          ))}
        </ChakraTable.Body>
      </ChakraTable.Root>
    </>
  );
};

export default TableUI;
