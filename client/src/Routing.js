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
import MessageSidebar from './pages/ManageForms/Forms/components/MessageSidebar';
import Process from './pages/ManageForms/Forms/pages/Process';
import Permission from './pages/ManageForms/Forms/pages/Permission';
import Designer from './pages/ManageForms/Forms/pages/Designer';
import ReportsInner from './pages/ManageForms/Forms/pages/Reports';
import FormNavbar from './pages/ManageForms/Forms/components/FormNavbar';
import PreviewForm from './pages/ManageForms/Forms/components/PreviewForm';
import LoadingCard from './components/LoadingCard';
import HoverComponent from './pages/ManageForms/Forms/components/HoverComponent';
import DummyData from './pages/ManageForms/Forms/components/DummyData';

const Routing = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Process />} />
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
        <Route
          exact
          path='/manage-forms/form/sample/edit/:id/settings'
          element={<SampleForm />}
        />
        <Route
          exact
          path='/manage-forms/form/sample/edit/:id/designer'
          element={<Designer />}
        />
        <Route
          exact
          path='/manage-forms/form/sample/edit/:id/process'
          element={<Process />}
        />
        <Route
          exact
          path='/manage-forms/form/sample/edit/:id/permission'
          element={<Permission />}
        />
        <Route
          exact
          path='/manage-forms/form/sample/edit/:id/reports'
          element={<ReportsInner />}
        />
        <Route
          exact
          path='/manage-forms/form/blank/edit/:id/settings'
          element={<BlankForm />}
        />
        <Route
          exact
          path='/manage-forms/form/blank/edit/:id/designer'
          element={<Designer />}
        />
        <Route
          exact
          path='/manage-forms/form/blank/edit/:id/process'
          element={<Process />}
        />
        <Route
          exact
          path='/manage-forms/form/blank/edit/:id/permission'
          element={<Permission />}
        />
        <Route
          exact
          path='/manage-forms/form/blank/edit/:id/reports'
          element={<ReportsInner />}
        />
        <Route
          exact
          path='/manage-forms/form/employee-leave/edit/:id/settings'
          element={<EmployeeRequestForm />}
        />
        <Route
          exact
          path='/manage-forms/form/employee-leave/edit/:id/designer'
          element={<Designer />}
        />
        <Route
          exact
          path='/manage-forms/form/employee-leave/edit/:id/process'
          element={<Process />}
        />
        <Route
          exact
          path='/manage-forms/form/employee-leave/edit/:id/permission'
          element={<Permission />}
        />
        <Route
          exact
          path='/manage-forms/form/employee-leave/edit/:id/reports'
          element={<ReportsInner />}
        />
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
