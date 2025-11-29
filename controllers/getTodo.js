//import the model
const Todo = require('../models/Todo');
exports.getTodo = async(req,res) => {
    try{
        //fetching all ttodo items from database
        const todos = await Todo.find({});
        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:'Entire Todo Data is fetched',
        })
    }
    catch(err){
        console.err(err);
        res.status(500).json({
            sucess:false,
            error:'internal server error',
            message:err.message,
        })
    }
}
exports.getTodoById = async (req,res)=>{
    try{
        //extracting todo item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})
        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message: "No data found with given id",
            })
        }
        //data for given id found
        res.status(200).json({
            success:true,
            data: todo, // ← this was missing
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.err(err);
        res.status(500).json({
            sucess:false,
            error:'internal server error',
            message:err.message,
        })

    }
}