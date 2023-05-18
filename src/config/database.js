// Responsible for configuring the connection to the database
import mongoose from 'mongoose'

export async function initMongoose() {
    mongoose.Promise = Promise

    mongoose.connection.on('connected', () => {
        console.log('Connection Established')
    })

    mongoose.connection.on('reconnected', () => {
        console.log('Connection Reestablished')
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Connection Disconnected')
    })

    mongoose.connection.on('close', () => {
        console.log('Connection Closed')
    })

    mongoose.connection.on('error', (error) => {
        console.log('ERROR: ' + error)
    })

    const run = async () => {
        await mongoose.connect(process.env.DATABASE_URL)
    }

    run().catch((error) => console.error(error))
}