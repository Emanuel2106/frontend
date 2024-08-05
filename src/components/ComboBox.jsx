import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { SiteProps } from './dashboard/SiteProps';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Box from '@mui/material/Box';

export default function ComboBox({ onAlmacenChange, onProduccionChange, onMovimientoChange }) {
  const [movimiento, setMovimiento] = useState([]);
  const [almacen, setAlmacen] = useState([]);
  const [produccion, setProduccion] = useState([]);
  const [selectedAlmacen, setSelectedAlmacen] = useState(null);
  const [selectedProduccion, setSelectedProduccion] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axios.get(`${SiteProps.urldinamica}/items/tipo_movimiento`)
      .then(response => {
        setMovimiento(response.data);
      })
      .catch(error => console.error('Error fetching tipo_movimiento:', error));

    axios.get(`${SiteProps.urldinamica}/items/almacen`)
      .then(response => {
        setAlmacen(response.data);
      })
      .catch(error => console.error('Error fetching almacen:', error));

    axios.get(`${SiteProps.urldinamica}/items/produccion`)
      .then(response => {
        setProduccion(response.data);
      })
      .catch(error => console.error('Error fetching produccion:', error));
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 , pt:2 }}>
        <DateTimePicker
          label="Fecha Inicio (MM/DD/YYYY hh:mm)"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ width: 300}} />}
          ampm={false}
        />
        <DateTimePicker
          label="Fecha Fin (MM/DD/YYYY hh:mm)"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ width: 300}} />}
          ampm={false}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, pb:2 }}>
        <Autocomplete
          disablePortal
          id="combo-box-almacen"
          options={almacen}
          getOptionLabel={(option) => option.nombre}
          sx={{ width: 300,display: 'flex' }}
          onChange={(event, newValue) => {
            setSelectedAlmacen(newValue);
            onAlmacenChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Almacén" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-produccion"
          options={produccion}
          getOptionLabel={(option) => option.nombre}
          sx={{ width: 300,display: 'flex' }}
          onChange={(event, newValue) => {
            setSelectedProduccion(newValue);
            onProduccionChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Producción" />}
          disabled={!selectedAlmacen}
        />
        <Autocomplete
          disablePortal
          id="combo-box-tipo-movimiento"
          options={movimiento}
          getOptionLabel={(option) => option.nombre}
          sx={{ width: 300,display: 'flex' }}
          onChange={(event, newValue) => {
            onMovimientoChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Tipo Movimiento" />}
          disabled={!selectedProduccion}
        />
      </Box>
    </LocalizationProvider>
  );
}


//v4
// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';
// import { SiteProps } from './dashboard/SiteProps';
// import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { Padding } from '@mui/icons-material';

// export default function ComboBox({ onAlmacenChange, onProduccionChange, onMovimientoChange }) {
//   const [movimiento, setMovimiento] = useState([]);
//   const [almacen, setAlmacen] = useState([]);
//   const [produccion, setProduccion] = useState([]);
//   const [selectedAlmacen, setSelectedAlmacen] = useState(null);
//   const [selectedProduccion, setSelectedProduccion] = useState(null);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     axios.get(`${SiteProps.urldinamica}/items/tipo_movimiento`)
//       .then(response => {
//         setMovimiento(response.data);
//       })
//       .catch(error => console.error('Error fetching tipo_movimiento:', error));

//     axios.get(`${SiteProps.urldinamica}/items/almacen`)
//       .then(response => {
//         setAlmacen(response.data);
//       })
//       .catch(error => console.error('Error fetching almacen:', error));

//     axios.get(`${SiteProps.urldinamica}/items/produccion`)
//       .then(response => {
//         setProduccion(response.data);
//       })
//       .catch(error => console.error('Error fetching produccion:', error));
//   }, []);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <div>
//         <DateTimePicker
//           label="Fecha Inicio (MM/DD/YYYY hh:mm)"
//           value={startDate}
//           onChange={(newValue) => {
//             setStartDate(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} sx={{ width: 300, marginBottom: 4 }} />}
//           ampm={false}
          
//         />
//         <DateTimePicker
//           label="Fecha Fin (MM/DD/YYYY hh:mm)"
//           value={endDate}
//           onChange={(newValue) => {
//             setEndDate(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} sx={{ width: 300, marginBottom: 4 }} />}
//           ampm={false}
//         />
//         <Autocomplete
//           disablePortal
//           id="combo-box-almacen"
//           options={almacen}
//           getOptionLabel={(option) => option.nombre}
//           sx={{ width: 400, marginBottom: 4 }  }
//           onChange={(event, newValue) => {
//             setSelectedAlmacen(newValue);
//             onAlmacenChange(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} label="Almacén" />}
//         />
//         <Autocomplete
//           disablePortal
//           id="combo-box-produccion"
//           options={produccion}
//           getOptionLabel={(option) => option.nombre}
//           sx={{ width: 400, marginBottom: 4 }}
//           onChange={(event, newValue) => {
//             setSelectedProduccion(newValue);
//             onProduccionChange(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} label="Producción" />}
//           disabled={!selectedAlmacen}
//         />
//         <Autocomplete
//           disablePortal
//           id="combo-box-tipo-movimiento"
//           options={movimiento}
//           getOptionLabel={(option) => option.nombre}
//           sx={{ width: 400, marginBottom: 4 }}
//           onChange={(event, newValue) => {
//             onMovimientoChange(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} label="Tipo Movimiento" />}
//           disabled={!selectedProduccion}
//         />
//       </div>
//     </LocalizationProvider>
//   );
// }





//v3
// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';
// import { SiteProps } from './dashboard/SiteProps';
// // import AdapterDateFns from '@mui/lab/AdapterDateFns';
// // import LocalizationProvider from '@mui/lab/LocalizationProvider';
// // import DatePicker from '@mui/lab/DatePicker';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// export default function ComboBox({ onAlmacenChange, onProduccionChange, onMovimientoChange }) {
//   const [movimiento, setMovimiento] = useState([]);
//   const [almacen, setAlmacen] = useState([]);
//   const [produccion, setProduccion] = useState([]);
//   const [selectedAlmacen, setSelectedAlmacen] = useState(null);
//   const [selectedProduccion, setSelectedProduccion] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   useEffect(() => {
//     axios.get(`${SiteProps.urldinamica}/items/tipo_movimiento`)
//       .then(response => {
//         setMovimiento(response.data);
//       })
//       .catch(error => console.error('Error fetching tipo_movimiento:', error));

//     axios.get(`${SiteProps.urldinamica}/items/almacen`)
//       .then(response => {
//         setAlmacen(response.data);
//       })
//       .catch(error => console.error('Error fetching almacen:', error));

//     axios.get(`${SiteProps.urldinamica}/items/produccion`)
//       .then(response => {
//         setProduccion(response.data);
//       })
//       .catch(error => console.error('Error fetching produccion:', error));
//   }, []);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <div>
//         <DatePicker
//           label="Fecha"
//           value={selectedDate}
//           onChange={(newValue) => {
//             setSelectedDate(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} sx={{ width: 500, marginBottom: 4 }} />}
//         />
//         <Autocomplete
//           disablePortal
//           id="combo-box-almacen"
//           options={almacen}
//           getOptionLabel={(option) => option.nombre}
//           sx={{ width: 500, marginBottom: 4 }}
//           onChange={(event, newValue) => {
//             setSelectedAlmacen(newValue);
//             onAlmacenChange(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} label="Almacén" />}
//         />
//         <Autocomplete
//           disablePortal
//           id="combo-box-produccion"
//           options={produccion}
//           getOptionLabel={(option) => option.nombre}
//           sx={{ width: 500, marginBottom: 4 }}
//           onChange={(event, newValue) => {
//             setSelectedProduccion(newValue);
//             onProduccionChange(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} label="Producción" />}
//           disabled={!selectedAlmacen}
//         />
//         <Autocomplete
//           disablePortal
//           id="combo-box-tipo-movimiento"
//           options={movimiento}
//           getOptionLabel={(option) => option.nombre}
//           sx={{ width: 500, marginBottom: 4 }}
//           onChange={(event, newValue) => {
//             onMovimientoChange(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} label="Tipo Movimiento" />}
//           disabled={!selectedProduccion}
//         />
//       </div>
//     </LocalizationProvider>
//   );
// }









//v2
// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';
// import { SiteProps } from './dashboard/SiteProps';

// export default function ComboBox({ onAlmacenChange, onProduccionChange, onMovimientoChange }) {
//   const [movimiento, setMovimiento] = useState([]);
//   const [almacen, setAlmacen] = useState([]);
//   const [produccion, setProduccion] = useState([]);
//   const [selectedAlmacen, setSelectedAlmacen] = useState(null);
//   const [selectedProduccion, setSelectedProduccion] = useState(null);

//   useEffect(() => {
//     axios.get(`${SiteProps.urldinamica}/items/tipo_movimiento`)
//       .then(response => {
//         setMovimiento(response.data);
//       })
//       .catch(error => console.error('Error fetching tipo_movimiento:', error));

//     axios.get(`${SiteProps.urldinamica}/items/almacen`)
//       .then(response => {
//         setAlmacen(response.data);
//       })
//       .catch(error => console.error('Error fetching almacen:', error));

//     axios.get(`${SiteProps.urldinamica}/items/produccion`)
//       .then(response => {
//         setProduccion(response.data);
//       })
//       .catch(error => console.error('Error fetching produccion:', error));
//   }, []);

//   return (
//     <div>
//       <Autocomplete
//         disablePortal
//         id="combo-box-almacen"
//         options={almacen}
//         getOptionLabel={(option) => option.nombre}
//         sx={{ width: 500, marginBottom: 4 }}
//         onChange={(event, newValue) => {
//           setSelectedAlmacen(newValue);
//           onAlmacenChange(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} label="Almacén" />}
//       />
//       <Autocomplete
//         disablePortal
//         id="combo-box-produccion"
//         options={produccion}
//         getOptionLabel={(option) => option.nombre}
//         sx={{ width: 500, marginBottom: 4 }}
//         onChange={(event, newValue) => {
//           setSelectedProduccion(newValue);
//           onProduccionChange(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} label="Producción" />}
//         disabled={!selectedAlmacen}
//       />
//       <Autocomplete
//         disablePortal
//         id="combo-box-tipo-movimiento"
//         options={movimiento}
//         getOptionLabel={(option) => option.nombre}
//         sx={{ width: 500, marginBottom: 4 }}
//         onChange={(event, newValue) => {
//           onMovimientoChange(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} label="Tipo Movimiento" />}
//         disabled={!selectedProduccion}
//       />
//     </div>
//   );
// }




//v1
// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';
// import { SiteProps } from './dashboard/SiteProps';

// export default function ComboBox() {
//   const [movimiento, setMovimiento] = useState([]);
//   const [almacen, setAlmacen] = useState([]);
//   const [produccion, setProduccion] = useState([]);
//   const [selectedAlmacen, setSelectedAlmacen] = useState(null);
//   const [selectedProduccion, setSelectedProduccion] = useState(null);

//   useEffect(() => {
//     axios.get(`${SiteProps.urldinamica}/items/tipo_movimiento`)
//       .then(response => {
//         setMovimiento(response.data);
//       })
//       .catch(error => console.error('Error fetching tipo_movimiento:', error));

//     axios.get(`${SiteProps.urldinamica}/items/almacen`)
//       .then(response => {
//         setAlmacen(response.data);
//       })
//       .catch(error => console.error('Error fetching almacen:', error));

//     axios.get(`${SiteProps.urldinamica}/items/produccion`)
//       .then(response => {
//         setProduccion(response.data);
//       })
//       .catch(error => console.error('Error fetching produccion:', error));
//   }, []);

//   return (
//     <div>
//       <Autocomplete
//         disablePortal
//         id="combo-box-almacen"
//         options={almacen}
//         getOptionLabel={(option) => option.nombre}
//         sx={{ width: 300, marginBottom: 2 }}
//         onChange={(event, newValue) => setSelectedAlmacen(newValue)}
//         renderInput={(params) => <TextField {...params} label="Almacén" />}
//       />
//       <Autocomplete
//         disablePortal
//         id="combo-box-produccion"
//         options={produccion}
//         getOptionLabel={(option) => option.nombre}
//         sx={{ width: 300, marginBottom: 2 }}
//         onChange={(event, newValue) => setSelectedProduccion(newValue)}
//         renderInput={(params) => <TextField {...params} label="Producción" />}
//         disabled={!selectedAlmacen}
//       />
//       <Autocomplete
//         disablePortal
//         id="combo-box-tipo-movimiento"
//         options={movimiento}
//         getOptionLabel={(option) => option.nombre}
//         sx={{ width: 300, marginBottom: 2 }}
//         renderInput={(params) => <TextField {...params} label="Tipo Movimiento" />}
//         disabled={!selectedProduccion}
//       />
//     </div>
//   );
// }

