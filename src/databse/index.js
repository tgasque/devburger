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
        this.connection = new Sequelize('postgresql://postgres:PuuHBUxkXJLZZnMaASvrLyFZqnGkdmei@junction.proxy.rlwy.net:13397/railway')
        models.map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models))
    }
    mongo(){
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:vsRKAFBpMiEoKsmYvBSnnzCyPyMZGHbx@autorack.proxy.rlwy.net:21209')
    }
}

export default new Databese()