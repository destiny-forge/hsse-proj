import React from 'react';
import { Link } from 'react-router-dom';

const Landing = props => (
    <div className="abs-center">
        <div className="text-center my-3">
            <div className="text-bold text-lg mb-3">HEALTH - SOCIAL SYSTEMS EVIDENCE</div>
            <p className="lead m-0">Welcome to HSSE Admin Portal.</p>
            <br />
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
    </div>
)

export default Landing;
