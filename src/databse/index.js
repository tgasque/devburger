import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import configDatabase from '../config/database'

import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';


const models = [User, Product, Category]

class Databese {
    constructor() {
        this.init();
        this.mongo()
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:JdGoiZvOWxuFHrOMGvpyTCPfiHHQFfFv@postgres.railway.internal:5432/railway')
        models.map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models))
    }
    mongo(){
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:gaGyDrKfPPacTPLXqUiNZxTrrlwsLumg@autorack.proxy.rlwy.net:21185')
    }
}

export default new Databese()