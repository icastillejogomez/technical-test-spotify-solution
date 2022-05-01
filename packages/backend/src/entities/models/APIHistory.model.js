import { DataTypes } from 'sequelize'
import { getSequelizeClient } from '../postgres/database.js'

export function defineApiHistoryModel () {
  const sequelize = getSequelizeClient()
  sequelize.define('APIHistory', {
    ipAddress: {
      type: DataTypes.STRING, // <-- This could be a VARCHAR(255) for IPv6 addresses
      allowNull: true // <-- Could happen if some loadbalancer or network middleware is not configured properly... :(
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    query: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
