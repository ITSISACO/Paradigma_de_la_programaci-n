var settings = {
  "url": "http://localhost:3000/bancos/153",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos/767",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos/135",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "bank": "banco de la republica",
    "city": "Bogota",
    "conuntry": "US",
    "id": "777",
    "password": "ahsjdhasjd",
    "routing": "372"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "bank": "nequi",
    "city": "ibague",
    "conuntry": "US",
    "id": "999",
    "password": "ngransgvinei",
    "routing": "642"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "bank": "bancolombia",
    "city": "Medellin",
    "conuntry": "US",
    "id": "767",
    "password": "ueuwueruo",
    "routing": "64382"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos/777",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos/999",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos/767",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "bank": "BANK OF MONEY",
    "city": "WASHINTON",
    "country": "US",
    "id": "767",
    "password": "bK9FJFAIO8o",
    "routing": "091"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/bancos/60",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "bank": " BANK Y YA",
    "city": "EL PEDAZO",
    "country": "US",
    "id": "60",
    "password": "sincontraseña",
    "routing": "164"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});