const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

var data = [
    {
        id: 1,
        first: "Maxx",
        last: "Flinn",
        age: 17,
        description: "Loves basketball",
        thumbnail: "https://goo.gl/1KNpiy"
    },
    {
        id: 2,
        first: "Allen",
        last: "Matt",
        age: 25,
        description: "Food Junky.",
        thumbnail: "https://goo.gl/rNLgwv"
    },
    {
        id: 3,
        first: "Kris",
        last: "Chen",
        age: 23,
        description: "Music Lover.",
        thumbnail: "https://goo.gl/EVbPHb"
    }
]


app.get('/api/hello', (req, res) => {

  res.json([
    {
        id: 2,
        first: "Allen",
        last: "Matt",
        age: 25,
        description: "Food Junky.",
        thumbnail: "https://goo.gl/rNLgwv"
    },
    {
        id: 3,
        first: "Kris",
        last: "Chen",
        age: 23,
        description: "Music Lover.",
        thumbnail: "https://goo.gl/EVbPHb"
    }
]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
