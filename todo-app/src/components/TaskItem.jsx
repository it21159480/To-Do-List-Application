import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../store/tasksSlice';
import { Card, CardContent, CardActions, IconButton, Switch, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    enqueueSnackbar('Task deleted successfully!', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      autoHideDuration: 3000,
    });
  };

  return (
    <Card variant="outlined" sx={{ backgroundColor: task.completed ? '#c9faf2' : 'white', borderRadius: 3, borderColor: '#00b8a9' }}>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={() => onEdit(task)} sx={{ color: '#00b8a9' }}>
          <EditIcon fontSize='small' />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body1" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
         {task.id} {task.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Switch
          checked={task.completed}
          onChange={() => dispatch(toggleComplete(task.id))}
          sx={{ color: '#00b8a9' }}
          size='small'
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Box>
          <IconButton onClick={handleDelete} sx={{ color: '#00b8a9' }}>
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
