import { Button, Col, Row, Typography } from 'antd';
import { FacebookFilled, GoogleSquareFilled } from '@ant-design/icons';
import React from 'react';
import firebase, { auth } from '../../firebase/config';
import { addDocument } from '../../firebase/services';
import { ParticleLogin } from '../Particle';
let fbProvider = new firebase.auth.FacebookAuthProvider();
let ggProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
    const handleFbLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
        // check newbie to add info into the db
        if (additionalUserInfo.isNewUser) {
            // collection , in firebase It means table in sql server
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
            });
        }
    };
    const handleggLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(ggProvider);
        // check newbie to add info into the db
        if (additionalUserInfo.isNewUser) {
            // collection , in firebase It means table in sql server
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
            });
        }
    };
    return (
        <div style={{}}>
            <Row justify="center" style={{ height: '100vh' }}>
                <Col span={12} style={{ textAlign: 'center' }}>
                    <Typography.Title style={{ margin: '10px', color: 'white' }} level={3}>
                        WELCOME TO TODO-APP
                    </Typography.Title>
                    <Button icon={<GoogleSquareFilled />} ghost onClick={handleggLogin} block>
                        Login With Google
                    </Button>
                    <Button icon={<FacebookFilled />} ghost onClick={handleFbLogin} block>
                        Login With Facebook
                    </Button>
                </Col>
            </Row>
            <ParticleLogin />
        </div>
    );
}
