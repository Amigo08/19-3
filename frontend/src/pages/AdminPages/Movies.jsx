import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Fade,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import MovieForm from "../../components/Admin/MovieForm";
import axios from "axios";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,

  p: 4,
};

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(()  => {
    
      axios.get('')

  })

  return (
    <div>
      <Toolbar />
      <Typography variant="h3">Movies</Typography>
      <Toolbar>
        <Button variant="contained" onClick={handleOpen}>
          New Movie {/* Corrected label */}
        </Button>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: "gray" }}>
            <TableRow>
             
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={style}>
            

            <MovieForm />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Movies;
