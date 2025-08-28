import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

let server: Server;

const port: number = 5000;

async function startServer() {
    try {
        await mongoose.connect(`mongodb+srv://M3_Backlog_Task_User:M3_Backlog_Task_Password@cluster0.tl2ww1y.mongodb.net/M3_Backlog_Task?retryWrites=true&w=majority&appName=Cluster0`);

        console.log('Connected to MongoDB');

        server = app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        })
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();
// M3_Backlog_Task_User
// M3_Backlog_Task_Password