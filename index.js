const express = require('express');
const cors = require('cors')

const port = 443;
const app = express();
const contacts = [{name: 'Telegram', link: 'https://t.me/umteddd'}, {name: 'VK', link: 'https://vk.com/umted'}]


app.use(cors());



app.get('/contacts', (req, res) => {
    res.send(JSON.stringify(contacts));
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}/`)
})
