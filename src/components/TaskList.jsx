import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/tasksSlice';
import TaskItem from './TaskItem';
import EditTaskModal from './EditTaskModal';
import { Box, Container, IconButton, Menu, MenuItem, Grid, Fab, Modal, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import AddTask from './AddTask';

const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
];

const ITEM_HEIGHT = 48;

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks); // Updated to get tasks from the correct path
    const [editingTask, setEditingTask] = useState(null);
    const [filter, setFilter] = useState('all');
    const [anchorEl, setAnchorEl] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (filterValue) => {
        if (filterValue) {
            setFilter(filterValue);
        }
        setAnchorEl(null);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const filteredTasks = tasks
        .filter((task) => {
            if (filter === 'completed') return task.completed;
            if (filter === 'pending') return !task.completed;
            return true;
        })
        .sort((a, b) => b.id - a.id); // Sort by ID in descending order

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Container>
            <Box display="flex" justifyContent="flex-end" m={2}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose(null)}
                >
                    {filterOptions.map((option) => (
                        <MenuItem
                            key={option.value}
                            selected={option.value === filter}
                            onClick={() => handleClose(option.value)}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Grid container spacing={3}>
                {filteredTasks.map((task) => (
                    <Grid item xs={12} sm={6} md={4} key={task.id}>
                        <TaskItem task={task} onEdit={setEditingTask} />
                    </Grid>
                ))}
            </Grid>

            <Fab
                aria-label="add"
                onClick={handleModalOpen}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                    bgcolor: '#00b8a9',
                    color: 'white',
                    '&:hover': { bgcolor: 'white', color: '#00b8a9' }
                }}
            >
                <AddIcon />
            </Fab>

            <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                aria-labelledby="add-task-modal-title"
                aria-describedby="add-task-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '1px solid #00b8a9',
                        borderRadius: 4,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography
                        id="add-task-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: 'center', color: '#00b8a9' }}
                    >
                        Add New Task
                    </Typography>
                    <AddTask />
                </Box>
            </Modal>

            {editingTask && <EditTaskModal task={editingTask} onClose={() => setEditingTask(null)} />}
        </Container>
    );
};

export default TaskList;
