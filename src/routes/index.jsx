import React from 'react';
import { Route, Routes, Outlet } from "react-router-dom";
import Header from '../components/Header';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard';
import IssuerDashboard from '../pages/issuer/Dashboard';
import IssuerList from '../pages/IssuerList';
import IssuerList1 from '../pages/IssuerList1/IssuerList1';
import MasterResult from '../pages/masterResult';
import ProtectedRoute from './ProtectedRoute'
import { useIsAuthenticated } from "@azure/msal-react";
import IssuerDetails from '../pages/IssuerDetails/IssuerDetails';

const Router = () => {
    const isAuthenticated = useIsAuthenticated();

    const Layout = () => {
        return (
            <div className='h-full flex w-full flex-col'>
                <Outlet />
            </div>
        )
    }
    const HeaderSection = () => {
        return (
            <React.Fragment>
                <Header />
                <Outlet />
            </React.Fragment>
        )
    }
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Login />} />
                <Route path='/about' element={<Login />} />
                <Route element={<HeaderSection />}>
                    {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute isSignedIn={isAuthenticated}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                     <Route
                        path="/issuer"
                        element={
                            <ProtectedRoute isSignedIn={isAuthenticated}>
                                <IssuerDashboard />
                            </ProtectedRoute>
                        }
                    />
                    {/* <Route
                        path="/issuerdetails"
                        element={
                            <ProtectedRoute isSignedIn={isAuthenticated}>
                                <IssuerDetails />
                            </ProtectedRoute>
                        }
                    /> */}
                    <Route path='/issuerdetails' element={<IssuerDetails />} />
                    <Route path='/issuer' element={<IssuerDashboard />} />
                    {/* <Route path='/issuer' element={<IssuerDashboard />} />
                    <Route path='/product' element={<IssuerDashboard />} />
                    <Route path='/portfolio' element={<IssuerDashboard />} /> */}
                    <Route path='/result' element={<MasterResult />} />
                    <Route path='/issuerlist' element={<IssuerList />} />
                    <Route path='/issuerlist1' element={<IssuerList1 />} />
                </Route >
            </Route >
        </Routes >
    )
}

export default Router