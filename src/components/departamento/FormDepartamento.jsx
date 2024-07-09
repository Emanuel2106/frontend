import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import StackButtons from "../StackButtons";
import axios from 'axios';
import { SiteProps } from '../dashboard/SiteProps';

export default function FormDepartamento(props) {
  const [open, setOpen] = React.useState(false);
  const [methodName, setMethodName] = React.useState("");

  const create = () => {
    const row = {
      dep_id: 0,
      dep_nombre: "",
      dep_pais_id: 0,
      dep_codigo: 0,
      dep_acronimo: "",
    };
    props.setSelectedRow(row);
    setMethodName("Add");
    setOpen(true);
    console.log("create() " + props.selectedRow);
  };

  const update = () => {
    if (props.selectedRow.id === 0) {
      console.log("select row");
      const messageData = {
        open: true,
        severity: "error",
        text: "Select row!",
      };
      props.setMessage(messageData);
      return;
    }
    setMethodName("Update");
    setOpen(true);
    console.log("update() " + props.selectedRow);
  };

  const deleteRow = () => {
    if (props.selectedRow.id === 0) {
      console.log("select row");
      const messageData = {
        open: true,
        severity: "error",
        text: "Select row!",
      };
      props.setMessage(messageData);
      return;
    }
    setMethodName("Delete");
    setOpen(true);
    console.log("delete() " + props.selectedRow);
  };

  const methods = {
    create,
    update,
    deleteRow,
  };

  React.useEffect(() => {
    if (props.selectedRow != undefined) {
      console.log("SB: " + props.selectedRow.id);
    }
  }, [props.selectedRow]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const id = props.selectedRow.id;
    console.log("Submitting data:", formJson);

    if (methodName === "Add") {
      axios.post(`${SiteProps.urlbase}/departamento`, formJson)
        .then(response => {
          props.setMessage({ open: true, severity: "success", text: "Departamento creado con éxito!" });
          setOpen(false);
          // Reload departamentos
          axios.get(`${SiteProps.urlbase}/departamento`)
            .then(response => {
              props.setDepartamentos(response.data);
            })
            .catch(error => {
              console.error("Error al buscar departamento!", error);
            });
        })
        .catch(error => {
          props.setMessage({ open: true, severity: "error", text: "Error al crear departamento!" });
          console.error("Error al crear departamento!", error.response || error.message);
        });
    } else if (methodName === "Update") {
      axios.put(`${SiteProps.urlbase}/departamento/${id}`, formJson)
        .then(response => {
          props.setMessage({ open: true, severity: "success", text: "Departamento actualizado con éxito!" });
          setOpen(false);
          // Reload departamentos
          axios.get(`${SiteProps.urlbase}/departamento`)
            .then(response => {
              props.setDepartamentos(response.data);
            })
            .catch(error => {
              console.error("Error al buscar departamento!", error);
            });
        })
        .catch(error => {
          props.setMessage({ open: true, severity: "error", text: "Error al actualizar departamento!" });
          console.error("Error al actualizar departamento!", error.response || error.message);
        });
    } else if (methodName === "Delete") {
      axios.delete(`${SiteProps.urlbase}/departamento/${id}`)
        .then(response => {
          props.setMessage({ open: true, severity: "success", text: "Departamento eliminado con éxito!" });
          setOpen(false);
          // Reload departamentos
          axios.get(`${SiteProps.urlbase}/departamento`)
            .then(response => {
              props.setDepartamentos(response.data);
            })
            .catch(error => {
              console.error("Error al buscar departamento!", error);
            });
        })
        .catch(error => {
          props.setMessage({ open: true, severity: "error", text: "Error al eliminar departamento!" });
          console.error("Error al eliminar departamento!", error.response || error.message);
        });
    }

    handleClose();
  };

  return (
    <React.Fragment>
      <StackButtons
        methods={methods}
        create={create}
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Departamentos</DialogTitle>
        <DialogContent>
          <DialogContentText>Completa el formulario.</DialogContentText>
          <FormControl fullWidth>
            <TextField
              autoFocus
              required
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              variant="standard"
              margin="normal"
              defaultValue={props.selectedRow.nombre}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="pais-select-label">pais</InputLabel>
            <Select
              labelId="pais-select-label"
              id="pais"
              name="pais"
              defaultValue={props.selectedRow.pais}
              margin="dense"
            >
              {props.pais.map((pais) => (
                <MenuItem key={pais.id} value={pais.id}>
                  {pais.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <TextField
              autoFocus
              required
              id="codigo"
              name="codigo"
              label="Codigo"
              fullWidth
              variant="standard"
              margin="normal"
              defaultValue={props.selectedRow.codigo}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              autoFocus
              required
              id="acronimo"
              name="acronimo"
              label="Acronimo"
              fullWidth
              variant="standard"
              margin="normal"
              defaultValue={props.selectedRow.acronimo}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{methodName}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}







// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import StackButtons from "../StackButtons";
// import axios from 'axios';
// import { SiteProps } from '../dashboard/SiteProps';

// export default function FormDepartamento(props) {
//   const [open, setOpen] = React.useState(false);
//   const [methodName, setMethodName] = React.useState("");

//   const create = () => {
//     const row = {
//       id: 0,
//       nombre: "",
//       pais: 0,
//       codigo: 0,
//       acronimo: "",
//     };
//     props.setSelectedRow(row);
//     setMethodName("Add");
//     setOpen(true);
//     console.log("create() " + props.selectedRow);
//   };

//   const update = () => {
//     if (props.selectedRow.id === 0) {
//       console.log("select row");
//       const messageData = {
//         open: true,
//         severity: "error",
//         text: "Select row!",
//       };
//       props.setMessage(messageData);
//       return;
//     }
//     setMethodName("Update");
//     setOpen(true);
//     console.log("update() " + props.selectedRow);
//   };

//   const deleteRow = () => {
//     if (props.selectedRow.id === 0) {
//       console.log("select row");
//       const messageData = {
//         open: true,
//         severity: "error",
//         text: "Select row!",
//       };
//       props.setMessage(messageData);
//       return;
//     }
//     setMethodName("Delete");
//     setOpen(true);
//     console.log("delete() " + props.selectedRow);
//   };

//   const methods = {
//     create,
//     update,
//     deleteRow,
//   };

//   React.useEffect(() => {
//     if (props.selectedRow != undefined) {
//       console.log("SB: " + props.selectedRow.id);
//     }
//   }, [props.selectedRow]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const formJson = Object.fromEntries(formData.entries());
//     const id = props.selectedRow.id;

//     console.log("Submitting data:", formJson);

//     if (methodName === "Add") {
//       axios.post(`${SiteProps.urlbase}/departamento`, JSON.stringify(formJson), {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => {
//         props.setMessage({ open: true, severity: "success", text: "Departamento creado con éxito!" });
//         setOpen(false);
//         // Reload departamentos
//         axios.get(`${SiteProps.urlbase}/departamento`)
//           .then(response => {
//             props.setDepartamentos(response.data);
//           })
//           .catch(error => {
//             console.error("Error al buscar departamento!", error);
//           });
//       })
//       .catch(error => {
//         if (error.response) {
//           console.error("Error response data:", error.response.data);
//           console.error("Error response status:", error.response.status);
//           console.error("Error response headers:", error.response.headers);
//           props.setMessage({ open: true, severity: "error", text:` Error al crear departamento: ${error.response.data.message || error.response.status}` });
//         } else if (error.request) {
//           console.error("Error request data:", error.request);
//           props.setMessage({ open: true, severity: "error", text: "No se recibió respuesta del servidor" });
//         } else {
//           console.error("Error message:", error.message);
//           props.setMessage({ open: true, severity: "error", text: `Error al crear departamento: ${error.message}` });
//         }
//       });
//     } else if (methodName === "Update") {
//       axios.put(`${SiteProps.urlbase}/departamento/${id}`, JSON.stringify(formJson), {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => {
//         props.setMessage({ open: true, severity: "success", text: "Departamento actualizado con éxito!" });
//         setOpen(false);
//         // Reload departamentos
//         axios.get(`${SiteProps.urlbase}/departamento`)
//           .then(response => {
//             props.setDepartamentos(response.data);
//           })
//           .catch(error => {
//             console.error("Error al buscar departamento!", error);
//           });
//       })
//       .catch(error => {
//         if (error.response) {
//           console.error("Error response data:", error.response.data);
//           console.error("Error response status:", error.response.status);
//           console.error("Error response headers:", error.response.headers);
//           props.setMessage({ open: true, severity: "error", text:`Error al actualizar departamento: ${error.response.data.message || error.response.status}` });
//         } else if (error.request) {
//           console.error("Error request data:", error.request);
//           props.setMessage({ open: true, severity: "error", text: "No se recibió respuesta del servidor" });
//         } else {
//           console.error("Error message:", error.message);
//           props.setMessage({ open: true, severity: "error", text: `Error al actualizar departamento: ${error.message} `});
//         }
//       });
//     } else if (methodName === "Delete") {
//       axios.delete(`${SiteProps.urlbase}/departamento/${id}`)
//       .then(response => {
//         props.setMessage({ open: true, severity: "success", text: "Departamento eliminado con éxito!" });
//         setOpen(false);
//         // Reload departamentos
//         axios.get(`${SiteProps.urlbase}/departamento`)
//           .then(response => {
//             props.setDepartamentos(response.data);
//           })
//           .catch(error => {
//             console.error("Error al buscar departamento!", error);
//           });
//       })
//       .catch(error => {
//         if (error.response) {
//           console.error("Error response data:", error.response.data);
//           console.error("Error response status:", error.response.status);
//           console.error("Error response headers:", error.response.headers);
//           props.setMessage({ open: true, severity: "error", text:` Error al eliminar departamento: ${error.response.data.message || error.response.status} `});
//         } else if (error.request) {
//           console.error("Error request data:", error.request);
//           props.setMessage({ open: true, severity: "error", text: "No se recibió respuesta del servidor" });
//         } else {
//           console.error("Error message:", error.message);
//           props.setMessage({ open: true, severity: "error", text: `Error al eliminar departamento: ${error.message}` });
//         }
//       });
//     }

//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <StackButtons
//         methods={methods}
//         create={create}
//         open={open}
//         setOpen={setOpen}
//         handleClickOpen={handleClickOpen}
//       />
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: "form",
//           onSubmit: handleSubmit,
//         }}
//       >
//         <DialogTitle>Departamentos</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Completa el formulario.</DialogContentText>
//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="nombre"
//               name="nombre"
//               label="Nombre"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.nombre}
//             />
//           </FormControl>

//           <FormControl fullWidth>
//             <InputLabel id="pais-select-label">pais</InputLabel>
//             <Select
//               labelId="pais-select-label"
//               id="pais"
//               name="pais"
//               defaultValue={props.selectedRow.pais}
//               margin="dense"
//             >
//               {props.pais.map((pais) => (
//                 <MenuItem key={pais.id} value={pais.id}>
//                   {pais.nombre}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="codigo"
//               name="codigo"
//               label="Codigo"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.codigo}
//             />
//           </FormControl>

//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="acronimo"
//               name="acronimo"
//               label="Acronimo"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.acronimo}
//             />
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">{methodName}</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }







// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import StackButtons from "../StackButtons";
// import axios from 'axios';
// import { SiteProps } from '../dashboard/SiteProps';

// export default function FormDepartamento(props) {
//   const [open, setOpen] = React.useState(false);
//   const [methodName, setMethodName] = React.useState("");

//   const create = () => {
//     const row = {
//       id: 0,
//       nombre: "",
//       pais: 0,
//       codigo: 0,
//       acronimo: "",
//     };
//     props.setSelectedRow(row);
//     setMethodName("Add");
//     setOpen(true);
//     console.log("create() " + props.selectedRow);
//   };

//   const update = () => {
//     if (props.selectedRow.id === 0) {
//       console.log("select row");
//       const messageData = {
//         open: true,
//         severity: "error",
//         text: "Select row!",
//       };
//       props.setMessage(messageData);
//       return;
//     }
//     setMethodName("Update");
//     setOpen(true);
//     console.log("update() " + props.selectedRow);
//   };

//   const deleteRow = () => {
//     setMethodName("Delete");
//     setOpen(true);
//     console.log("delete() " + props.selectedRow);
//   };

//   const methods = {
//     create,
//     update,
//     deleteRow,
//   };

//   React.useEffect(() => {
//     if (props.selectedRow != undefined) {
//       console.log("SB: " + props.selectedRow.id);
//     }
//   }, [props.selectedRow]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const formJson = Object.fromEntries(formData.entries());
//     const id = props.selectedRow.id;

//     console.log("Submitting data:", formJson);

//     if (methodName === "Add") {
//       axios.post(`${SiteProps.urlbase}/departamento`, formJson)
//         .then(response => {
//           props.setMessage({ open: true, severity: "success", text: "Departamento creado con éxito!" });
//           setOpen(false);
//           Reload departamentos
//           axios.get(`${SiteProps.urlbase}/departamento`)
//             .then(response => {
//               props.setDepartamentos(response.data);
//             })
//             .catch(error => {
//               console.error("Error al buscar departamento!", error);
//             });
//         })
//         .catch(error => {
//           props.setMessage({ open: true, severity: "error", text: "Error al crear departamento!" });
//           console.error("Error al crear departamento!", error.response || error.message);
//         });
//     }

//     Handle other methods (Update, Delete) here if needed

//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <StackButtons
//         methods={methods}
//         create={create}
//         open={open}
//         setOpen={setOpen}
//         handleClickOpen={handleClickOpen}
//       />
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: "form",
//           onSubmit: handleSubmit,
//         }}
//       >
//         <DialogTitle>Departamentos</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Completa el formulario.</DialogContentText>
//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="nombre"
//               name="nombre"
//               label="Nombre"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.nombre}
//             />
//           </FormControl>

//           <FormControl fullWidth>
//             <InputLabel id="pais-select-label">pais</InputLabel>
//             <Select
//               labelId="pais-select-label"
//               id="pais"
//               name="pais"
//               defaultValue={props.selectedRow.pais}
//               margin="dense"
//             >
//               {props.pais.map((pais) => (
//                 <MenuItem key={pais.id} value={pais.id}>
//                   {pais.nombre}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="codigo"
//               name="codigo"
//               label="Codigo"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.codigo}
//             />
//           </FormControl>

//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="acronimo"
//               name="acronimo"
//               label="Acronimo"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.acronimo}
//             />
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">{methodName}</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }



// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import StackButtons from "../StackButtons";

// export default function FormDepartamento(props) {
//   const [open, setOpen] = React.useState(false);
//   const [methodName, setMethodName] = React.useState("");

//   const create = () => {
//     const row = {
//       id: 0,
//       nombre: "",
//       pais: 0,
//       codigo: 0,
//       acronimo: "",
//     };
//     props.setSelectedRow(row);
//     setMethodName("Add");
//     setOpen(true);
//     console.log("create() " + props.selectedRow);
//   };

//   const update = () => {
//     if (props.selectedRow.id === 0) {
//       console.log("select row");
//       const messageData = {
//         open: true,
//         severity: "error",
//         text: "Select row!",
//       };
//       props.setMessage(messageData);
//       return;
//     }
//     setMethodName("Update");
//     setOpen(true);
//     console.log("update() " + props.selectedRow);
//   };

//   const deleteRow = () => {
//     setMethodName("Delete");
//     setOpen(true);
//     console.log("delete() " + props.selectedRow);
//   };

//   const methods = {
//     create,
//     update,
//     deleteRow,
//   };

//   React.useEffect(() => {
//     if (props.selectedRow != undefined) {
//       console.log("SB: " + props.selectedRow.id);
//     }
//   }, [props.selectedRow]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <StackButtons
//         methods={methods}
//         create={create}
//         open={open}
//         setOpen={setOpen}
//         handleClickOpen={handleClickOpen}
//       />
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: "form",
//           onSubmit: (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries(formData.entries());
//             const id = props.selectedRow.id;
//             console.log(id, formJson);
//             handleClose();
//           },
//         }}
//       >
//         <DialogTitle>Departamentos</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Completa el formulario.</DialogContentText>
//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="nombre"
//               name="nombre"
//               label="Nombre"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.nombre}
//             />
//           </FormControl>

//           <FormControl fullWidth>
//             <InputLabel id="pais-select-label">pais</InputLabel>
//             <Select
//               labelId="pais-select-label"
//               id="pais"
//               name="pais"
//               defaultValue={props.selectedRow.pais}
//               margin="dense"
//             >
//               {props.pais.map((pais) => (
//                 <MenuItem key={pais.id} value={pais.id}>
//                   {pais.nombre}
//                 </MenuItem>
//               ))}


//             </Select>
//           </FormControl>
          

//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="codigo"
//               name="codigo"
//               label="Codigo"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.codigo}
//             />
//           </FormControl>


//           <FormControl fullWidth>
//             <TextField
//               autoFocus
//               required
//               id="acronimo"
//               name="acronimo"
//               label="Acronimo"
//               fullWidth
//               variant="standard"
//               margin="normal"
//               defaultValue={props.selectedRow.acronimo}
//             />
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">{methodName}</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }