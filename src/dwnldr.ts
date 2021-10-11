import { Router } from "express";
import { exec } from "child_process";

const router = Router();

router.get('/', (req, res, next) => {
  exec(`media ${req.query.format} ${req.query.url}`, (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  });
  res.status(200).send();
});


export { router };