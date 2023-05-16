const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class User {
  constructor() {
    this._id = faker.string.uuid();
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number; //No me funciona el phone
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.string.uuid();
    this.companyName = faker.company.buzzNoun();
    this.address = {
      streetAddress: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    };
  }
}



// generar un usuario aleatorio
app.get('/api/users/new', (req, res) => {
  res.json( new User() );
});

// generar una empresa aleatoria
app.get('/api/companies/new', (req, res) => {
  res.json( new Company() );
});



app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
