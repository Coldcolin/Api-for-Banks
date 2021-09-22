const express = require("express");
const bankModel = require("../models/bankModel")

const createBank = async (req, res) => {
    try{
        const newBank = await bankModel.create({
            name: req.body.name,
            rank: req.body.rank,
            open: req.body.open
        });
        console.log(newBank)
        res.status(200).json({message: "New bank Created Successfully", data: newBank})
    }catch(error){
        console.log({message: error.message})
    }
}

const getBanks = async (req, res) => {
    try{
        const banks = await bankModel.find();
        if(!banks){
            res.send("There was no bank in the database.")
        }
        res.status(200).json({message: "List of all banks", data: banks})
    }catch(error){
        console.log({message: error.message})
    }
}

const getSingle = async (req, res) => {
    try{
        const bankId = req.params.id;
        if(!bankId){
            res.status(404).json(`there was no bank with this id: ${bankId}`)
        }
        const myBank = await bankModel.findById(bankId);
        res.status(200).json({message: "These are the bank details", data: myBank})
    }catch(error){
        console.log({message: error.message})
    }
}

const updateBank = async (req, res)=>{
    try{
        const bankId = req.params.id;
        if(!bankId){
            res.status(400).json({message: "wrong id"})
        }
        const updatedBank = await bankModel.updateOne({
            name: req.body.name,
            rank: req.body.rank,
            open: req.body.open
        })
        res.status(200).json({message: "updated Successfully", updatedBank})
    }catch(error){
        console.log({message: error.message})
    }
}
const deleteBank = async (req, res) => {
    try{
        const bankId = req.params.id;
        if(!bankId){
            res.status(404).json({message: `This id: ${bankId}is not found.`})
        }
        const deleteBank = await bankModel.findByIdAndDelete(bankId);
        res.status(200).json({message: "bank deleted successfully."})
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

module.exports = {
    createBank,
    getBanks,
    getSingle,
    updateBank,
    deleteBank, 
}