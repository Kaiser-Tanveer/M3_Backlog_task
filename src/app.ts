import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
 res.send('Backlog App is running');
});

export default app;