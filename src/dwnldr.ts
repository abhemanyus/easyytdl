import { query, Router } from "express";
import { exec } from "child_process";

const router = Router();

router.post('/', (req, res, next) => {
  const {format, url} = req.query;
  exec(`media ${format} ${url}`, (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  });
  res.status(200).send();
});


export { router };