import React, { useContext, useEffect } from 'react';
import { Divider } from 'antd';
import Filters from '../Filters';
import { useDispatch } from 'react-redux/';
import TodoList from '../TodoList';
import { ParticleHome } from '../Particle';
import UserInfo from '../UserInfo';
import { AppContext } from '../../context/AppProvider';
import { todoSlice } from '../TodoList/ReducerSlice';

export default function AppTodo() {
    const { todo } = useContext(AppContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(todoSlice.actions.reset());
        dispatch(todoSlice.actions.initData(todo));
    }, [todo]);
    return (
        <div style={{ display: 'flex' }}>
            <div
                style={{
                    width: 500,
                    margin: '30px auto 0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: 20,
                    boxShadow: '0 0 10px 4px #bfbfbf',
                    borderRadius: 5,
                    height: '90vh',
                }}
            >
                <UserInfo />
                <Filters />
                <Divider />
                <TodoList />
                <ParticleHome />
            </div>
        </div>
    );
}
