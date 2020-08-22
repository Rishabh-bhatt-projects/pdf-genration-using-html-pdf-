module.exports = (Students) =>{
    const today  = new Date();
let starthtml = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <style>
     *{
    margin: 0;
    padding: 0;
      }
   .table-content{
      border-collapse: collapse;
      font-size: 0.9em;
      margin-left: 70px;
      min-width: 800px;
      border-radius: 6px 10px 0 0;
      overflow: hidden;
      box-shadow: 0px 15px 20px 3px rgb(24 66 90);  
      }
      .content-table thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: justify;
      font-weight: bold;
      margin: 25px ;
      }
      .tablehead{
      background-color: #009879;
      margin: 12px;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
      margin: 25px ;
      }

      .table-body td{
         text-align: center;
         padding: 0.7rem;
         margin: 0.5rem; 
         font-size :18px;     
      }
      #logo{
      margin:3px 6px;
      }
    
      #navbar{
      display: flex;
      align-items: center;
      position: relative;
      top: auto;
      }
      #navbar ul{
      margin-top : 35px;
      margin-left : 19rem;
      font-family:  'Bree Serif', serif;
      font-size : 30px;
      font-weight: bold;
      text-align : centre;
      }
      .content-table tbody tr {
      border-bottom: 1px solid #dddddd;
      }

      .content-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
      }

      .content-table tbody tr{
      border-bottom: 2px solid #009879;
      text-align : justify ;
      }

      .content-table tbody tr.active-row {
      font-weight: bold;
      color: #009879;
      }
   </style>
</head>
<body>
   <nav id="navbar">
     <ul>
      Student DataBase <br>
     </ul>
   </nav>
  <br>
   <table class = "table-content">
      <thead class = "tablehead" >
         <tr>
           <th>Name</th>
           <th>Enrollment no.</th>
           <th>Course</th>
           <th>Branch</th>
           <th>Year</th>
           <th>College Name</th>
         </tr>
       </thead>
       <tbody class="table-body">
`
     Students.forEach(student => {
        let middlehtml = `
        <tr>
                <td>${student.Name} </td>
                <td>${student.EnrollmentNo}</td>
                <td> ${student.Course} </td>
                <td>${student.Branch}</td>
                <td>${student.Year}</td>
                <td>${student.CollegeName}</td>
        </tr>
      `
      starthtml = starthtml + middlehtml;
  });

     let lasthtml = `  </tbody> 
 
     </table>
     </body>
     </html>`

     return  starthtml + lasthtml;

}
