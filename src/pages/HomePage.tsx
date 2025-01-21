import Layout from '../components/layout';
// import TableUI from '../components/ui/table';
// import { ReactNode } from 'react';

// interface Product {
//   id: number;
//   codePermission: string;
//   name: string;
//   description: string;
//   status: string;
//   author: string;
//   actions: ReactNode;
// }

const HomePage: React.FC = () => {
  // const headers = ['Código', 'Nombre', 'Descripción', 'Estado', 'Autor'];
  // const items: Product[] = [
  //   {
  //     id: 1,
  //     codePermission: 'COD001',
  //     name: 'Demo 1',
  //     description: 'Description demo 1',
  //     status: 'active',
  //     author: 'John Doe',
  //     actions: <Button>Editar</Button>,
  //   },
  //   {
  //     id: 2,
  //     codePermission: 'COD002',
  //     name: 'Demo 2',
  //     description: 'Description demo 2',
  //     status: 'inactive',
  //     author: 'John Doe',
  //     actions: <Button>Editar</Button>,
  //   },
  //   {
  //     id: 3,
  //     codePermission: 'COD003',
  //     name: 'Demo 3',
  //     description: 'Description demo 3',
  //     status: 'inactive',
  //     author: 'John Doe',
  //     actions: <Button>Editar</Button>,
  //   },
  // ];

  return (
    <Layout>
      <div>
        <div>
          <p>PERMISOS</p>
          {/* <TableUI<Product>
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
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
