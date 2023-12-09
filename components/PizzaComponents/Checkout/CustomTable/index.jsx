import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NumberInput from "../../../NumberInput";
import tableStyle from "./table.module.scss";
import Image from "next/image";
import largePizza from "../../../../assets/images/large-pizza.png";
import trash from "../../../../assets/images/ic_trash.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F6F8",
    color: "#637381",
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
    border: "none",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomTable() {
  return (
    <TableContainer className="custom-table" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={"row.name"}>
            <StyledTableCell component="th" scope="row">
              <div className={tableStyle.product_wrapper}>
                <Image src={largePizza} alt="pizza" />
                <div className={tableStyle.product_content}>
                  <h5>Korma Special Pizza</h5>
                  <p>
                    size: <span>Medium</span>
                  </p>
                </div>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">$6.97</StyledTableCell>
            <StyledTableCell align="right">
              <NumberInput />
            </StyledTableCell>
            <StyledTableCell align="right">$6.97</StyledTableCell>
            <StyledTableCell align="right">
              <Image className="cursor_pointer" src={trash} alt="trash" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={"row.name"}>
            <StyledTableCell component="th" scope="row">
              <div className={tableStyle.product_wrapper}>
                <Image src={largePizza} alt="pizza" />
                <div className={tableStyle.product_content}>
                  <h5>Korma Special Pizza</h5>
                  <p>
                    size: <span>Medium</span>
                  </p>
                </div>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">$6.97</StyledTableCell>
            <StyledTableCell align="right">
              <NumberInput />
            </StyledTableCell>
            <StyledTableCell align="right">$6.97</StyledTableCell>
            <StyledTableCell align="right">
              <Image className="cursor_pointer" src={trash} alt="trash" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={"row.name"}>
            <StyledTableCell component="th" scope="row">
              <div className={tableStyle.product_wrapper}>
                <Image src={largePizza} alt="pizza" />
                <div className={tableStyle.product_content}>
                  <h5>Korma Special Pizza</h5>
                  <p>
                    size: <span>Medium</span>
                  </p>
                </div>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">$6.97</StyledTableCell>
            <StyledTableCell align="right">
              <NumberInput />
            </StyledTableCell>
            <StyledTableCell align="right">$6.97</StyledTableCell>
            <StyledTableCell align="right">
              <Image className="cursor_pointer" src={trash} alt="trash" />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
