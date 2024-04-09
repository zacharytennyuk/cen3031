require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const newUser = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: {
        type: String,
        unique: true,
        require: true
    },
    password: { type: String, required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }] 
});

module.exports = mongoose.model('User', newUser);