
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function GridReportes() {

  const columns = [
    {
      field: 'firstName',
      headerName: 'Producto ',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Cantidad',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Precio',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Estado',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null }
  ];

  return (
    <>
    <Typography sx={{marginBottom:2}}>Kardex</Typography>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </> 
  );
}
