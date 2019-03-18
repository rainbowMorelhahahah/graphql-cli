import * as express from 'express';
import * as path from 'path';

import * as bodyParser from 'body-parser';
import graphql from './graphql';

const app = express();

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

graphql(app);

app.listen(4000, () => {
    console.log('server started on port 4000');
});
