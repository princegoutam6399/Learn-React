import React, { useEffect, useState } from 'react'

const FetchDataUsingApi = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            } const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log("Error", error)
        }
    };

    console.log(users);

    return (
        <div>
            <div className="container-fluid bg-danger-subtle min-vh-100">
                <div className="items m-2 d-block">
                    {users.map((user) => {
                        return (
                            <div key={user.id}>
                                <p className='p-1' style={{ backgroundColor: "orange" }}>{user.id}. {user.name}{user.email}</p>
                            </div>

                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default FetchDataUsingApi