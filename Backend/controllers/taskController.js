import Task from "../models/Task.js";

export const createTask = async (req, res) => {

    try {

        const task = await Task.create(req.body);

        res.status(201).json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

export const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find()
            .populate("assignedTo", "name email")
            .populate("project", "title");

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

export const updateTaskStatus = async (req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};