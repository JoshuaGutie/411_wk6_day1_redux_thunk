import React from "react";
import {
  Container,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const Import = (props) => {
  // fill out this component
  return (
    <Container maxWidth="lg" className="car-container">
      <div className="flex-container">
        <h1>{props.makes.length}</h1>
        <Button variant="contained" color="primary">Import</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Container>
  );
};

export default Import;
