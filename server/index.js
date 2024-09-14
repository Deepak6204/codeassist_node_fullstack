const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});