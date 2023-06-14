import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      userName: "Tăng Quốc Dũng",
      password: "123456",
      email: "dung2003@gmail.com",
      firstName: "Dũng",
      surName: "Tăng",
      fullName: "Tăng Quốc Dũng",
      address: "TPHCM",
    },
    {
      id: 2,
      userName: "Trần Nhựt Tiến",
      password: "123456",
      email: "tien2003@gmail.com",
      firstName: "Tiến",
      surName: "Nhựt",
      fullName: "Trần Nhựt Tiến",
      address: "Trà Vinh",
    },
    {
      id: 3,
      userName: "Trần Duy Phúc",
      password: "123456",
      email: "phuc2003@gmial.com",
      firstName: "Phúc",
      surName: "Trần",
      fullName: "Trần Duy Phúc",
      address: "Thủ Đức",
    },
    {
      id: 4,
      userName: "Châu Gia Bảo",
      password: "123456",
      email: "bao2003@gmail.com",
      firstName: "Bảo",
      surName: "Châu",
      fullName: "Châu Gia Bảo",
      address: "  TPHCM",
    },
    {
      id: 5,
      userName: "Văn Công Quốc Cường",
      password: "123456",
      email: "cuong2003@gmail.com",
      firstName: "Cường",
      surName: "Văn",
      fullName: "Văn Công Quốc Cường",
      address: "  TPHCM",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> ID</TableCell>
            <TableCell className="tableCell">userName</TableCell>
            <TableCell className="tableCell">password</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">firstName</TableCell>
            <TableCell className="tableCell">surName</TableCell>
            <TableCell className="tableCell">fullName</TableCell>
            <TableCell className="tableCell">address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row.userName}</div>
              </TableCell>
              <TableCell className="tableCell">{row.password}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.firstName}</TableCell>
              <TableCell className="tableCell">{row.surName}</TableCell>
              <TableCell className="tableCell">{row.fullName}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
