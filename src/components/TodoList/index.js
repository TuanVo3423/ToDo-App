import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { todosRemainingSelector } from '../../redux/selectors';
import { todoSlice } from './ReducerSlice';
import { AppContext } from '../../context/AppProvider';
import { AuthContext } from '../../context/AuthProvider';

export default function TodoList() {
    const todolist = useSelector(todosRemainingSelector); // get value from store
    const {
        user: { uid },
    } = useContext(AuthContext);
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState('');
    const [valuePriority, setValuePriority] = useState('Medium');
    const inputRef = useRef(null);
    const handleType = (e) => {
        setValueInput(e.target.value);
    };
    const handleAddTodo = () => {
        dispatch(
            todoSlice.actions.addTodolist({
                // add vao state
                // nó đã tự động tạo function creator kèm theo type , nên kh care
                id: uuidv4(),
                name: valueInput,
                prioriry: valuePriority,
                completed: false,
                uid: uid,
            }),
        );
        dispatch(todoSlice.actions.reset());
        inputRef.current.focus();
        setValuePriority('medium');
        setValueInput('');
        // dispatch(todoSlice.actions.removeState());
        // dispatch(todoSlice.actions.initData(todo));
    };
    const handleSelect = (value) => {
        setValuePriority(value);
    };
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todolist.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.prioriry}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input ref={inputRef} value={valueInput} onChange={handleType} />
                    <Select defaultValue="Medium" value={valuePriority} onChange={handleSelect}>
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button onClick={handleAddTodo} type="primary">
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
