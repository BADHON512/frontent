import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from './../components/Layout/Loader';

const AdminProtectedRoute = ({ children }) => {
    const { loading, user, isAuthenticated } = useSelector((state) => state.user);

    // If loading, show a loading spinner or return null
    if (loading) {
        return <Loader/>;
    }

    // If not authenticated, navigate to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If user.role is undefined or not "Admin", navigate to home page
    if (user.role !== 'Admin') {
        return <Navigate to="/" replace />;
    }

    // If authenticated and user is an Admin, render the protected children
    return children;
};

export default AdminProtectedRoute;
