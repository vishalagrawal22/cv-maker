import { Component } from 'react';
import { EducationFactory, EducationSection } from './components/Education';
import { ProjectFactory, ProjectSection } from './components/Project';
import {
  WorkExperienceFactory,
  WorkExperienceSection,
} from './components/WorkExperience';
import { UserInfoFactory, UserInfoSection } from './components/UserInfo';

class App extends Component {
  render() {
    const educations = [
      EducationFactory(
        'Utah University',
        'BA in Cloud Systems',
        '8.5 CGPA',
        '2013',
        '2016'
      ),
    ];

    const projects = [
      ProjectFactory(
        'Todo list',
        'https://example.com/elit/todo-list',
        'https://elit.example.io/todo-list',
        ['HTML', 'SCSS', 'Javascript(Jquery)'],
        'A simple todo-list with jquery'
      ),
      ProjectFactory(
        'COVID Tracker App',
        'https://example.com/elit/covid-tracker',
        '',
        ['JavaScript(Jquery)', 'Covid API'],
        'A simple website which shows covid stats of the world, user’s location or any specific state of any country.'
      ),
      ProjectFactory(
        'Movie Database',
        'https://example.com/elit/movie-database',
        '',
        ['MongoDB', 'Express', 'React', 'NodeJS'],
        ''
      ),
    ];

    const workExperiences = [
      WorkExperienceFactory(
        'Hilll, Watsica and Zboncak',
        'DevOps',
        'I built the customer-focused value-added project',
        '2016',
        '2020'
      ),
    ];

    const userInfo = UserInfoFactory(
      'Skyler Russell',
      'adipiscing.elit@hotmail.com',
      '0987 364 5160'
    );

    return (
      <div>
        <UserInfoSection userInfo={userInfo} />
        <EducationSection educations={educations} />
        <WorkExperienceSection workExperiences={workExperiences} />
        <ProjectSection projects={projects} />
      </div>
    );
  }
}

export default App;
