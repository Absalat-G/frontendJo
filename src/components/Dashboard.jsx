import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [loginActivity, setLoginActivity] = useState([]);

    useEffect(() => {
        fetchLoginActivity();
    }, []);

    const fetchLoginActivity = async () => {
        try {
            const response = await fetch('https://jollofsummit-df2363f7dc94.herokuapp.com/login');
            if (!response.ok) {
                throw new Error('Failed to fetch login activity data');
            }
            const data = await response.json();
            setLoginActivity(data);
        } catch (error) {
            console.error('Error fetching login activity data:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Login Activity Dashboard</h1>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">User ID</th>
                        <th className="px-4 py-2">Timestamp</th>
                        <th className="px-4 py-2">IP Address</th>
                    </tr>
                </thead>
                <tbody>
                    {loginActivity.map((login, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{login.userId}</td>
                            <td className="border px-4 py-2">{login.timestamp}</td>
                            <td className="border px-4 py-2">{login.ipAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
