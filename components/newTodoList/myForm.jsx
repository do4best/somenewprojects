import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    TextField,
    Typography
} from "@mui/material";


function OurToDoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();

        const trimmedTask = task.trim();
        if (!trimmedTask) return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: trimmedTask,
                completed: false
            }
        ]);
        setTask('');
    };

    const handleToggleTask = (id) => {
        setTasks(
            tasks.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ py: 5 }}>
                <Card elevation={4}>
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom align="center">
                            To Do List
                        </Typography>

                        <Box component="form" onSubmit={handleAddTask} sx={{ mb: 3 }}>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    fullWidth
                                    label="Enter a task"
                                    variant="outlined"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                />
                                <Button type="submit" variant="contained">
                                    Add
                                </Button>
                            </Stack>
                        </Box>

                        <List>
                            {tasks.length === 0 ? (
                                <Typography variant="body2" color="text.secondary" align="center">
                                    No tasks yet. Add one above.
                                </Typography>
                            ) : (
                                tasks.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        secondaryAction={
                                            <IconButton edge="end" onClick={() => handleDeleteTask(item.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        disablePadding
                                        sx={{
                                            mb: 1,
                                            px: 1,
                                            borderRadius: 1,
                                            bgcolor: 'background.paper'
                                        }}
                                    >
                                        <Checkbox
                                            checked={item.completed}
                                            onChange={() => handleToggleTask(item.id)}
                                        />
                                        <ListItemText
                                            primary={item.text}
                                            sx={{
                                                textDecoration: item.completed ? 'line-through' : 'none',
                                                color: item.completed ? 'text.secondary' : 'text.primary'
                                            }}
                                        />
                                    </ListItem>
                                ))
                            )}
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default OurToDoList;