require('dotenv').config ()

export const Config = {
  // server: {
  //   db_user: process.env.DB_USER,
  //   db_password: process.env.DB_PASSWORD
  // },
  port: process.env.PORT || 5000,
  mongourl: process.env.DB_CONNECTION,
  origin: process.env.ORIGIN || 3000
}