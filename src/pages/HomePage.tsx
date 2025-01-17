import { Box, Button, Table, Text, useDisclosure } from '@chakra-ui/react';
import Layout from '../components/layout';
import TableUI from '../components/ui/table';
import { ReactNode } from 'react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';

interface Product {
  id: number;
  codePermission: string;
  name: string;
  description: string;
  status: string;
  author: string;
  actions: ReactNode;
}

const HomePage: React.FC = () => {
  const headers = ['Código', 'Nombre', 'Descripción', 'Estado', 'Autor'];
  const { open, onOpen, onClose } = useDisclosure();
  const items: Product[] = [
    {
      id: 1,
      codePermission: 'COD001',
      name: 'Demo 1',
      description: 'Description demo 1',
      status: 'active',
      author: 'John Doe',
      actions: <Button>Editar</Button>,
    },
    {
      id: 2,
      codePermission: 'COD002',
      name: 'Demo 2',
      description: 'Description demo 2',
      status: 'inactive',
      author: 'John Doe',
      actions: <Button>Editar</Button>,
    },
    {
      id: 3,
      codePermission: 'COD003',
      name: 'Demo 3',
      description: 'Description demo 3',
      status: 'inactive',
      author: 'John Doe',
      actions: <Button>Editar</Button>,
    },
  ];

  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Box overflowX="auto">
          <Text textStyle="2xl">PERMISOS</Text>
          <TableUI<Product>
            headers={headers}
            items={items}
            renderRow={(item) => (
              <>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
                <Table.Cell>{item.author}</Table.Cell>
                <Table.Cell>{item.actions}</Table.Cell>
              </>
            )}
          />
        </Box>
        <Button onClick={onOpen}>Open Modal</Button>

        <DialogRoot>
          <DialogTrigger>
            <Button variant="outline" size="sm">
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button>Save</Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
      </Box>
    </Layout>
  );
};

export default HomePage;
