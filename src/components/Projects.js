import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';


class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        let projectItems;
        if (this.props.projects){
            //For each object in property 'projects', map that item to projectItems and return a ProjectItem component 
            projectItems = this.props.projects.map(project =>{
                console.log(project);
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
                );
            });
        }
        //console.log(this.props);
        return (
        <div className="Projects">
            <h3>Latest Projects</h3>
            {projectItems}
        </div>
        );
    }
}

Projects.propTypes = {
    projects:PropTypes.array,
    onDelete:PropTypes.func
}

export default Projects;