import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
  } from '@mui/material'

export const MuiTable = () => {
    return (
      <TableContainer style={{ width: "60%" }} component={Paper} sx={{ maxHeight: '450px' }} className="muiTable" >
      <Table aria-lable='simple table' stickyHeader>
          <TableHead>
                  <TableRow>
                      <TableCell >Id</TableCell>
                      <TableCell style={{ width: "20%" }}>First Name</TableCell>
                      <TableCell style={{ width: "20%" }}>Last Name</TableCell>
                      <TableCell style={{ width: "50%" }}align='center' >Email</TableCell>
                  </TableRow>
          </TableHead> 
          <TableBody>
            {
              tableData.map((row) => (
                <TableRow 
                  key={row.id}
                  // sx={{ '&:last-child td, &:last-child th': {border: 0} }}
                  // to remove the border in last row
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
      </Table>
      </TableContainer>
    )
} 

const tableData = [

{
    "id": 1,
    "first_name": "Manda",
    "last_name": "Morter",
    "email": "mmorter0@123-reg.co.uk",
    "gender": "Female",
    "ip_address": "141.52.129.172"
  }, {
    "id": 2,
    "first_name": "Pyotr",
    "last_name": "Brislane",
    "email": "pbrislane1@bizjournals.com",
    "gender": "Male",
    "ip_address": "64.139.42.68"
  }, {
    "id": 3,
    "first_name": "Hinda",
    "last_name": "Snowden",
    "email": "hsnowden2@vistaprint.com",
    "gender": "Female",
    "ip_address": "174.140.39.110"
  }, {
    "id": 4,
    "first_name": "Baily",
    "last_name": "Shuker",
    "email": "bshuker3@aboutads.info",
    "gender": "Male",
    "ip_address": "124.55.76.142"
  }, {
    "id": 5,
    "first_name": "Price",
    "last_name": "Geck",
    "email": "pgeck4@last.fm",
    "gender": "Male",
    "ip_address": "187.202.97.245"
  }, {
    "id": 6,
    "first_name": "Monti",
    "last_name": "Jeppensen",
    "email": "mjeppensen5@cnn.com",
    "gender": "Male",
    "ip_address": "61.185.63.145"
  }, {
    "id": 7,
    "first_name": "Worth",
    "last_name": "Lebrun",
    "email": "wlebrun6@salon.com",
    "gender": "Male",
    "ip_address": "109.7.253.188"
  }, {
    "id": 8,
    "first_name": "Bob",
    "last_name": "Cortez",
    "email": "bcortez7@ezinearticles.com",
    "gender": "Male",
    "ip_address": "221.146.121.146"
  }, {
    "id": 9,
    "first_name": "Hugues",
    "last_name": "Wigzell",
    "email": "hwigzell8@huffingtonpost.com",
    "gender": "Male",
    "ip_address": "143.8.248.217"
  }, {
    "id": 10,
    "first_name": "Dorian",
    "last_name": "Blum",
    "email": "dblum9@theguardian.com",
    "gender": "Female",
    "ip_address": "164.85.41.83"
  }
] 