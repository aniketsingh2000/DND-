const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Hello Task 1 Data' },
        'task-2': { id: 'task-2', content: 'Hello Task 2 Data' },
        'task-3': { id: 'task-3', content: 'Hello Task 3 Data' },
        'task-4': { id: 'task-4', content: 'Hello Task 4 Data' },
        'task-5': { id: 'task-5', content: 'Hello Task 5 Data' },
        'task-6': { id: 'task-6', content: 'Hello Task 6 Data' },
        'task-7': { id: 'task-7', content: 'Hello Task 7 Data' },
        'task-8': { id: 'task-8', content: 'Hello Task 8 Data' },
        'task-9': { id: 'task-9', content: 'Hello Task 9 Data' },
        'task-10': { id: 'task-10', content: 'Hello Task 10 Data' },
        'task-11': { id: 'task-11', content: 'Hello Task 11 Data' },
    },
    columns: {
        'column-1': { id: 'column-1', title: 'To Do', taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5', 'task-6', 'task-7', 'task-8'] },
        'column-2': { id: 'column-2', title: 'In Progress', taskIds: ['task-9', 'task-10','task-11'] },
        'column-3': { id: 'column-3', title: 'Done', taskIds: [] },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData;