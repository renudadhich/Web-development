var express = require('express');
var app = express();
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/linked-cases', function (req, res) {
    let linkedCases = {
        recordsFiltered:3,
        recordsTotal:3,
        data:[
        {caseID:1,
        crimeType:"normal",
        dateOpened:"01/01/2013",
       dateClosed:"01/01/2015",
       status:"Closed",
      SARRecomendation:"Lorem ipsum recommendation"
       },
       {caseID:2,
        crimeType:"critical",
        dateOpened:"01/01/2013",
       dateClosed:"01/01/2015",
       status:"Open",
      SARRecomendation:"Lorem ipsum recommendation"
       },
       {caseID:3,
        crimeType:"high",
        dateOpened:"01/01/2013",
       dateClosed:"01/01/2015",
       status:"Approved",
      SARRecomendation:"Lorem ipsum recommendation"
       }
    ]
}
  res.send(linkedCases);
});

app.get('/linked-alerts', function (req, res) {
    let linkedCases = {
        recordsFiltered:3,
        recordsTotal:3,
        data:[
        {alertID:1,
        rules:"normal",
        dateOpened:"01/01/2013",
       dateClosed:"01/01/2015",
       status:"Closed",
      SARRecomendation:"Lorem ipsum recommendation"
       },
       {alertID:2,
        rules:"critical",
        dateOpened:"01/01/2013",
       dateClosed:"01/01/2015",
       status:"Open",
      SARRecomendation:"Lorem ipsum recommendation"
       },
       {alertID:3,
        rules:"high",
        dateOpened:"01/01/2013",
       dateClosed:"01/01/2015",
       status:"Approved",
      SARRecomendation:"Lorem ipsum recommendation"
       }
    ]
}
  res.send(linkedCases);
});

app.get('/attachments', function(req, res) {
  let data = ["assets/images/Document1.doc", "assets/images/Document1.xls", "assets/images/Document1.pdf", "assets/images/Document1.txt", "assets/images/Document1.docx",
  "assets/images/Document1.doc", "assets/images/Document1.ppt", "assets/images/Document1.doc", "assets/images/Document1.txt", "assets/images/Document1.doc", 
  "assets/images/Document1.pdf", "assets/images/Document1.xls"]
  res.send(data);
});

app.get('/case-info', function(req, res) {
 let caseInformation = {
    caseID: 1323254,
    priority:'Medium',
    relation:'Parent',
    crimeType:'Money landering',
    subCrimeType:'Lorem ipsum sub type',
    caseScore:"43%",
    breakdownOfScoreFields :'Lorem ipsum brealdown',
    status:'Under investigation',
    assignee:'User #2123',
    dateOpened:'01/01/2013',
    assignmentDate:'02/01/2013',
    dateClosed:'02/01/2013',
    sarRecommendation:'Lorem ipsun  recommendation'
   }
   res.send(caseInformation);
});
app.get('/customer-details', function(req, res) {
   let customerInformation = {
    customerName: "John Example",
    address:'Example str, apt 25',
    city:'Amsterdam',
    zip:'33434',
    country:'Netherlands',
    noOfAccounts:3,
    noOfCards :4,
    alertedDays:342,
    alertedAccount:'Account #2345',
    alertedCard:'Card #124',
    dateIssue:8,
    currentStatus:'Lorem ipsum status',
    noOfCustomers:8

   }
   res.send(customerInformation);
});
app.post('/edit-case-status', function(req, res) {
   res.send(true);
});
app.listen('3000');
console.log('working on 3000');