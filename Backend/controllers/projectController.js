import Project from "../models/project.js";

export const createProject = async (req, res) => {

    try {

        const project = await Project.create({
            ...req.body,
            createdBy: req.user.id,
        });

        res.status(201).json(project);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

export const getProjects = async (req, res) => {

    try {

        const projects = await Project.find()
            .populate("members", "name email")
            .populate("createdBy", "name");

        res.json(projects);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};