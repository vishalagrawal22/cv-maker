import { useState } from 'react';
import {
  EducationFactory,
  InputEducationSection,
} from './components/Education';
import { ProjectFactory, InputProjectsSection } from './components/Project';
import { InputUserInfoSection, UserInfoFactory } from './components/UserInfo';
import {
  InputWorkExperienceSection,
  WorkExperienceFactory,
} from './components/WorkExperience';
import { Resume } from './components/Resume';
import { deepCopy } from './utils/helper-functions';

function useFormList(setMainList, factory) {
  const [editMode, setEditMode] = useState(true);
  const [formList, setFormList] = useState([]);

  function onAdd() {
    setFormList([...formList, factory()]);
  }

  function onDelete(event) {
    event.preventDefault();

    const id = event.target.parentNode.id;
    const newFormList = formList.filter((item) => {
      return item.id !== id;
    });
    setFormList(newFormList);
  }

  function onChange(event) {
    const id = event.target.parentNode.id;
    const index = formList.findIndex((item) => {
      return item.id === id;
    });
    const newFormList = deepCopy(formList);
    newFormList[index][event.target.name] = event.target.value;
    setFormList(newFormList);
  }

  function onStartEditMode() {
    setEditMode(true);
  }

  function onEndEditMode() {
    setEditMode(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    onEndEditMode();
    setMainList(formList);
  }

  return {
    editMode,
    formList,
    onAdd,
    onDelete,
    onChange,
    onStartEditMode,
    onSubmit,
  };
}

function useFormInfo(setMainInfo, initialValue) {
  const [editMode, setEditMode] = useState(true);
  const [formInfo, setFormInfo] = useState(initialValue);

  function onChange(event) {
    const newFormInfo = deepCopy(formInfo);
    newFormInfo[event.target.name] = event.target.value;
    setFormInfo(newFormInfo);
  }

  function onStartEditMode() {
    setEditMode(true);
  }

  function onEndEditMode() {
    setEditMode(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    onEndEditMode();
    setMainInfo(formInfo);
  }

  return {
    editMode,
    formInfo,
    onChange,
    onStartEditMode,
    onSubmit,
  };
}

function App() {
  const [projects, setProjects] = useState([]);
  const projectsFormData = useFormList(setProjects, ProjectFactory);
  const [educations, setEducations] = useState([]);
  const educationsFormData = useFormList(setEducations, EducationFactory);
  const [workExperiences, setWorkExperiences] = useState([]);
  const workExperiencesFormData = useFormList(
    setWorkExperiences,
    WorkExperienceFactory
  );
  const initialValue = UserInfoFactory();
  const [userInfo, setUserInfo] = useState(initialValue);
  const userInfoFormData = useFormInfo(setUserInfo, initialValue);
  return (
    <>
      <div>
        <InputUserInfoSection userInfo={userInfo} {...userInfoFormData} />
        <InputEducationSection
          educations={educations}
          {...educationsFormData}
        />
        <InputWorkExperienceSection
          workExperiences={workExperiences}
          {...workExperiencesFormData}
        />
        <InputProjectsSection projects={projects} {...projectsFormData} />
      </div>
      <Resume
        userInfo={userInfo}
        educations={educations}
        workExperiences={workExperiences}
        projects={projects}
        {...projectsFormData}
      />
    </>
  );
}

export default App;
