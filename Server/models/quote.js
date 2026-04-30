const con = require("./db_connect")
const bcrypt = require("bcrypt")

async function createQuoteTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS Quote (
        quoteId INT AUTO_INCREMENT PRIMARY KEY,
        quote VARCHAR(255) NOT NULL,
        userId INT NOT NULL,
        CONSTRAINT userFK FOREIGN KEY(userId) REFERENCES User(userId)
      ); `
    await con.query(sql)
}

createQuoteTable()

/*
{
        CONSTRAINT userPK PRIMARY KEY(userId)
      ); `

    await con.query(sql)
}

createUserTable()

/*
{
  email: "cathy123",
  password: "icecream"
}
*/

async function getAllQuotes() {
    let sql = `
      SELECT * FROM Quote;
    `
    return await con.query(sql)
}

// Register function
/*
{
  email: "cathy123",
  password: "icecream",
  firstName: "Cathy",
  lastName: "Bates"
}
*/


module.exports = { getAllQuotes }