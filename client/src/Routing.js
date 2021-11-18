import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

// import Home from './sections/Home';
import Login from './sections/Login';
import Register from './sections/Register';
import NotFound from './sections/NotFound';
import Header from './sections/Header';
// import Main from './sections/Main';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SubmitForm from './pages/SubmitForm';
import Submissions from './pages/Submissions';
import Tasks from './pages/Tasks';
import Forms from './pages/ManageForms/Forms';
import AllSubmissions from './pages/ManageForms/AllSubmissions';
import Reports from './pages/ManageForms/Reports';
import SelectTemplate from './pages/ManageForms/Forms/SelectTemplate';
import SampleForm from './pages/ManageForms/Forms/SelectTemplate/SampleForm';
import BlankForm from './pages/ManageForms/Forms/SelectTemplate/BlankForm';
import EmployeeRequestForm from './pages/ManageForms/Forms/SelectTemplate/EmployeeRequestForm';
import Process from './pages/ManageForms/Forms/pages/Process';
import Permission from './pages/ManageForms/Forms/pages/Permission';
import Designer from './pages/ManageForms/Forms/pages/Designer';
import ReportsInner from './pages/ManageForms/Forms/pages/Reports';
import Setting from './pages/ManageForms/Forms/pages/Setting';
import PreviewForm from './pages/ManageForms/Forms/components/PreviewForm';

const Routing = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<PreviewForm />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/submit-form' element={<SubmitForm />} />
        <Route exact path='/tasks' element={<Tasks />} />
        <Route path='/submissions' element={<Submissions />} />
        <Route exact path='/manage-forms/forms' element={<Forms />} />
        <Route
          exact
          path='/manage-forms/forms/select-template'
          element={<SelectTemplate />}
        />

        <Route path='/manage-forms/form/sample/edit/:id' element={<Setting />}>
          <Route path='settings' element={<SampleForm />} />
          <Route path='designer' element={<Designer />} />
          <Route path='process' element={<Process />} />
          <Route path='permission' element={<Permission />} />
          <Route path='reports' element={<ReportsInner />} />
        </Route>

        <Route path='/manage-forms/form/blank/edit/:id' element={<Setting />}>
          <Route path='settings' element={<BlankForm />} />
          <Route path='designer' element={<Designer />} />
          <Route path='process' element={<Process />} />
          <Route path='permission' element={<Permission />} />
          <Route path='reports' element={<ReportsInner />} />
        </Route>

        <Route
          path='manage-forms/form/employee-leave/edit/:id'
          element={<Setting />}
        >
          <Route path='settings' element={<EmployeeRequestForm />} />
          <Route path='designer' element={<Designer />} />
          <Route path='process' element={<Process />} />
          <Route path='permission' element={<Permission />} />
          <Route path='reports' element={<ReportsInner />} />
        </Route>
        <Route
          exact
          path='/manage-forms/submissions'
          element={<AllSubmissions />}
        />
        <Route exact path='/manage-forms/reports' element={<Reports />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
