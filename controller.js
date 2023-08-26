var database = require("./datasource");

const Controller = {

    GetAllCustomers: async () => {  
       const db = new database();
       const queryResults = await db.executeQuery('SELECT * FROM customers');
       db.closePool();
       return queryResults;
    }

}

module.exports = Controller;