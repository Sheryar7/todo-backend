//import the model
const Todo = require('../models/Todo');


exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: `Todo deleted Sucessfully`,
        })
    }
    catch (err) {
        console.err(err);
        res.status(500).json({
            sucess: false,
            error: 'internal server error',
            message: err.message,
        })
    }
}