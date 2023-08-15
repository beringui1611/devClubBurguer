import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import User from '../app/models/User'
import configDatabase from '../config/database'
import Product from '../app/models/Product'
import Category from '../app/models/Category'


const models = [User,Product, Category]
class Database{
    constructor() {
        this.init()
        this.mongo()
       
      
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:6lr40Ipc4OFSoTUr9gKY@containers-us-west-51.railway.app:7799/railway')
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            )
    }


    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:L3UAdXZLoEcODs4cqHja@containers-us-west-101.railway.app:7520',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        )
}

}

export default new Database()