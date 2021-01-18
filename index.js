const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3036;


// handlebars
app.engine("handlebars", exphbs());
app.set('view engine', '.hbs');
app.engine('.hbs', exphbs({ defaultLayout: false }));

// middleware
app.get('/', function (req, res) {
    res.render('main');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
