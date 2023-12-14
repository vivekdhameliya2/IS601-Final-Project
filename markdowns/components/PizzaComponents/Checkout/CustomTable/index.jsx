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

const sizes = {
  1: "Regular",
  1.5: "Medium",
  2: "Large",
};

export default function CustomTable({
  cartData,
  handleChange,
  removeFromCart,
}) {
  return (
    <TableContainer className="custom-table" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Total Price</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!cartData.length && (
            <StyledTableRow>
              <StyledTableCell colSpan={5}>
                <div className="no-data-found">Your cart is empty</div>
              </StyledTableCell>
            </StyledTableRow>
          )}
          {cartData.map((cart) => {
            const { product } = cart;
            return (
              <StyledTableRow key={product.fileName}>
                <StyledTableCell component="th" scope="row">
                  <div className={tableStyle.product_wrapper}>
                    <Image
                      src={product.image}
                      width={64}
                      height={64}
                      alt="pizza"
                    />
                    <div className={tableStyle.product_content}>
                      <h5>{product.title}</h5>
                      <p>
                        size: <span>{sizes[cart.size]}</span>
                      </p>
                    </div>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  ${product.price}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <NumberInput handleChange={handleChange} formData={cart} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  ${cart.totalPrice}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Image
                    width={20}
                    height={20}
                    onClick={() => removeFromCart(cart.uniqueId)}
                    className="cursor_pointer"
                    src={"/images/ic_trash.svg"}
                    alt="trash"
                  />
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
