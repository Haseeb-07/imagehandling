import { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                const modifiedUsers = response.data.map(user => ({
                    ...user,
                    // No need to encode the image path here, as it's already done on the server side
                }));
                setUsers(modifiedUsers);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            <h2>All Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>
                                <img
                                    src={`http://localhost:5000/${user.image}`}
                                    alt={user.name}
                                    style={{ width: '100px' }}
                                    onError={(e) => {
                                        e.target.src = 'placeholder_image_url'; // Provide a placeholder image URL here
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
