import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    date: {type: String}
}, {
    collection: 'paramsMP'
});
paramSchema.plugin(uniqueValidator);

const ParamModel = mongoose.model('paramsMP', paramSchema);

async function query() {
    const result = await ParamModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
 }

 async function get(id) {
    return ParamModel.findOne({'_id': id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
 }

 async function getLast() {
    return ParamModel.findOne().sort({'_id':-1}).limit(1).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    })
 }

 async function postData() {
    const date = new Date()
    return ParamModel.insert({temp:"2",humidity:"60",pressure:"1028",date:`${date.getFullYear}:${date.getMonth} ${date.getHours}:${date.getMinutes}`}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
 }
 
 

export default {
    query: query,
    get: get,
    getLast,
    postData,

    model: ParamModel
};
