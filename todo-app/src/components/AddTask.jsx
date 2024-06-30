import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import { TextField, Button, Container, Box } from '@mui/material';
import { useSnackbar } from 'notistack';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const taskId = useSelector((state) => state.tasks.taskId); // Get task ID from Redux state
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: taskId, title, description, completed: false }));
    setTitle('');
    setDescription('');
    enqueueSnackbar('Task added successfully!', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' }, autoHideDuration: 3000 });
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 3,
        }}
      >
        <TextField
          placeholder='title'
          variant='filled'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{
            '& .MuiFilledInput-root:before': {
              borderBottomColor: '#00b8a9', // underline color when not focused
            },
            '& .MuiFilledInput-root:after': {
              borderBottomColor: '#00b8a9', // underline color when focused
            },
          }}
        />
        <TextField
          placeholder='Description'
          variant='filled'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          sx={{
            '& .MuiFilledInput-root:before': {
              borderBottomColor: '#00b8a9', // underline color when not focused
            },
            '& .MuiFilledInput-root:after': {
              borderBottomColor: '#00b8a9', // underline color when focused
            },
          }}
        />
        <Button type="submit" variant="contained" sx={{
          bgcolor: '#00b8a9', '&:hover': {
            bgcolor: 'white',
            color: '#00b8a9',
          },
        }}>
          Add Task
        </Button>
      </Box>
    </Container>
  );
};

export default AddTask;
