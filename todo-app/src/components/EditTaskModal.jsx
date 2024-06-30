import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store/tasksSlice';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
const EditTaskModal = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ id: task.id, title, description }));
    onClose();
    enqueueSnackbar('changes are saved successfully!', {
      variant: 'info',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      autoHideDuration: 3000
    });

  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Update the title and description of your task.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#00b8a9', // default border color
              },
              '&:hover fieldset': {
                borderColor: '#00b8a9', // border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00b8a9', // border color when focused
              },
            },
            '& .MuiInputLabel-root': {
              color: '#00b8a9', // default label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00b8a9', // label color when focused
            },
          }}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#00b8a9', // default border color
              },
              '&:hover fieldset': {
                borderColor: '#00b8a9', // border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00b8a9', // border color when focused
              },
            },
            '& .MuiInputLabel-root': {
              color: '#00b8a9', // default label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00b8a9', // label color when focused
            },
          }}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: '#00b8a9' }} >
          Cancel
        </Button>
        <Button onClick={handleSave} sx={{
          bgcolor: '#00b8a9', color: 'white', '&:hover': {
            color: '#00b8a9'
          }
        }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskModal;
