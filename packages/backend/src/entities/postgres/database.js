import { Sequelize } from 'sequelize'
import { getApiHistoryModelSchema } from './models/APIHistory.model.js'

// Define constants
const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
const POSTGRES_HOST = process.env.POSTGRES_HOST
const POSTGRES_PORT = process.env.POSTGRES_PORT
const POSTGRES_DB = process.env.POSTGRES_DB

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  dialect: 'postgres'
})

// Here we're going to storage all out models as a singleton pattern
export const modelsKeys = {
  APIHistory: 'APIHistory'
}
const models = {}

export function getSequelizeClient () {
  // Singleton pattern
  return sequelize
}

export async function startDatabaseConnection () {
  try {
    // Check connection
    const sequelize = getSequelizeClient()
    await sequelize.authenticate()
    console.log('Database connection has been established successfully.')

    // Sync tables
    models[modelsKeys.APIHistory] = sequelize.define('APIHistory', getApiHistoryModelSchema())
    await sequelize.sync()
  } catch (error) {
    console.error('Unable to connect to the database')
    throw error
  }
}

export function getModel (modelName) {
  return models[modelName]
}
