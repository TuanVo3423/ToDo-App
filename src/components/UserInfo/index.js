import React, { useContext } from 'react';
import { Typography, Button } from 'antd';
import { AuthContext } from '../../context/AuthProvider';
import { auth } from '../../firebase/config';
import { AppContext } from '../../context/AppProvider';

export default function UserInfo() {
    const { Title } = Typography;
    const handleSignOut = () => {
        auth.signOut();
    };
    const {
        user: { displayName },
    } = useContext(AuthContext);
    

    return (
        <div style={{}}>
            <Title style={{ textAlign: 'center' }}>TODO APP OF {displayName.toUpperCase()}</Title>
            <Button onClick={handleSignOut} style={{ float: 'right' }}>
                Sign Out
            </Button>
        </div>
    );
}
