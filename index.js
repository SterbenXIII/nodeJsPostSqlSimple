const express = require('express');
const userRouter = require('./routes/user.router.js');

const app = express();
const port = process.env.PORT || 8080;
const www = process.env.WWW || './';
app.use(express.static(www));
app.use('/api', userRouter)
console.log(`serving ${www}`);


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
