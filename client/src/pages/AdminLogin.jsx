import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavBar from '../components/NavBar';
import { Shield, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        adminId: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        if (!formData.adminId.trim()) {
            tempErrors.adminId = 'Admin ID is required';
            formIsValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            formIsValid = false;
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
            formIsValid = false;
        }

        setErrors(tempErrors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically authenticate with your backend
            console.log('Login attempted:', formData);
            // Simulate successful login
            alert('Login successful!');
            navigate('/admin/dashboard');
        }
    };

    return (
        <>
            <NavBar />
            <div className="container py-4">
                <div className="d-flex align-items-center mb-4">
                    <Link to="/login" className="btn btn-outline-danger me-3">
                        <ArrowLeft size={18} className="me-1" /> Back
                    </Link>
                    <h2 className="mb-0">Master Controller Login</h2>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="row mb-4 justify-content-center">
                            <div className="col-md-6">
                                <div className="text-center mb-4">
                                    <div className="bg-danger d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
                                        <Shield size={40} className="text-white" />
                                    </div>
                                    <h4>Master Controller Access</h4>
                                    <p className="text-muted">Enter your credentials to access the admin panel</p>
                                </div>

                                <div className="alert alert-warning" role="alert">
                                    <strong>Notice:</strong> This is a secure access point for authorized administrators only.
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="adminId" className="form-label">Admin ID*</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.adminId ? 'is-invalid' : ''}`}
                                            id="adminId"
                                            name="adminId"
                                            value={formData.adminId}
                                            onChange={handleChange}
                                            placeholder="Enter your Admin ID"
                                        />
                                        {errors.adminId && <div className="invalid-feedback">{errors.adminId}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email*</label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password*</label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>

                                    <div className="mb-3 d-flex justify-content-between">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="rememberMe"
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember this device
                                            </label>
                                        </div>
                                        <Link to="/forgot-password/admin" className="text-danger">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <div className="d-grid gap-2 mt-4">
                                        <button type="submit" className="btn btn-danger btn-lg">
                                            Login to Admin Panel
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center mt-4">
                                    <p>
                                        Need an admin account? <Link to="/register/admin" className="text-danger">Register here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLogin;