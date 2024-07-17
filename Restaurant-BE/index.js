const express = require('express')
const app = express()

const port = process.env.PORT || 3050

app.use(express.json())


app.listen(port, () => {
    console.log('listening on port', port)
})