import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoSlice } from '../TodoList/ReducerSlice';
import { DeleteOutlined } from '@ant-design/icons';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ id, name, prioriry, completed }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();

    const toggleCheckbox = (e) => {
        setChecked(!checked);
        dispatch(todoSlice.actions.editCheckedTodo(id));
    };
    const handleDelete = () => {
        dispatch(todoSlice.actions.deleteTodo(id));
    };

    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <div>
                <Checkbox checked={checked} onChange={toggleCheckbox}>
                    {name}
                </Checkbox>
            </div>
            <div>
                <Tag color={priorityColorMapping[prioriry]} style={{ margin: '0 4px 0 0' }}>
                    {prioriry}
                </Tag>
                <DeleteOutlined onClick={handleDelete} style={{ fontSize: '16px' }} />
            </div>
        </Row>
    );
}
