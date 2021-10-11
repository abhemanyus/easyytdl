import express from 'express';
import { router } from './dwnldr.js';
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.listen(port, () => {
    console.log(`Youtube downloader running on port ${port}`);
});
