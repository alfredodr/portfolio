import { projects } from "../../../lib/projects";

export default function hander(req, res) {
    const { projectId } = req.query;
    const project = projects.find(project => project.id === parseInt(projectId)); //find a project whos id is equal to the id from the url converted to
    //number
    res.status(200).json(project);//send back the data in json format to the browser
}

//maps to /api/projects/[projectId]. Looks for the id in the url and if its fond returns the corresponding data 