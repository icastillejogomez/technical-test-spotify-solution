import { DataTypes } from 'sequelize'

// Server initializer set this value but here we can apply several pattern
// one problem we can find here is with big table relationships.
// https://stackoverflow.com/a/13151025
export const APIHistory = null

export function getApiHistoryModelSchema () {
  const schema = {
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
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('success', 'error', 'pending'),
      allowNull: false
    },
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
  return schema
}
