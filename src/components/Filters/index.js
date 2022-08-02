import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersSlice } from './ReducerSlice';

const { Search } = Input;

export default function Filters() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [statusValue, setStatusValue] = useState('All');
    const [priorityValue, setPriorityValue] = useState([]);
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        dispatch(filtersSlice.actions.searchTextTodoList(e.target.value));
    };
    const handleSelectStatus = (e) => {
        setStatusValue(e.target.value);
        dispatch(filtersSlice.actions.searchStatusTodoList(e.target.value));
    };
    const handleSelectPriority = (e) => {
        setPriorityValue(e);
        dispatch(filtersSlice.actions.searchPriorityTodoList(e));
    };
    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Search
                </Typography.Paragraph>
                <Search value={searchValue} onChange={handleSearch} placeholder="input search text" />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group onChange={handleSelectStatus} value={statusValue}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    onChange={handleSelectPriority}
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    value={priorityValue}
                >
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
            </Col>
        </Row>
    );
}
