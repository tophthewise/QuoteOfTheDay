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


async function updateQuote(quoteId, newQuoteText) {
    let sql = `
      UPDATE Quote 
      SET quote = ?
      WHERE quoteId = ?
    `
    await con.query(sql, [newQuoteText, quoteId])
    return { success: true, message: "Quote updated" }
}

async function deleteQuote(quoteId) {
    let sql = `
      DELETE FROM Quote 
      WHERE quoteId = ?
    `
    await con.query(sql, [quoteId])
    return { success: true, message: "Quote deleted" }
}

async function addQuote(quoteText, userId) {
    let sql = `
      INSERT INTO Quote(quote, userId)
      VALUES(?, ?)
    `
    await con.query(sql, [quoteText, userId])
    return { success: true, message: "Quote added" }
}

module.exports = { getAllQuotes, updateQuote, deleteQuote, addQuote }