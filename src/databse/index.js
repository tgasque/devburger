import Sequelize from 'sequelize';
import mongoose from 'mongoose';

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
        this.connection = new Sequelize('postgresql://postgres:SDuViUElwCKBUHCvtLBOziNPviFtcOme@junction.proxy.rlwy.net:43131/railway')
        models.map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models))
    }
    mongo(){
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:HibaXKhFSkQTuWwKHxVQfRpFtiLyKEdr@autorack.proxy.rlwy.net:33520')
    }
}

export default new Databese()