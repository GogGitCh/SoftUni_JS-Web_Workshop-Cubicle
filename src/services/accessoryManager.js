const mongoose = require('mongoose');
const Accessory = require('../models/Accessory')


exports.create = (accessoryData) => {
    Accessory.save(accessoryData);
};