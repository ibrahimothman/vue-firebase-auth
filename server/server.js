const express = require('express')
const axios = require('axios')
const { checkAuthentication } = require('./auth.middleware')
const morgan = require('morgan')
const Cors = require('cors')
const dotenv = require('dotenv')



dotenv.config()
const app = express()
app.use(Cors())
app.use(morgan('dev'))

app.get('/data', checkAuthentication, async (_,res) => {
    const data = await getApiData()
    res.json(data)
})


async function getApiData() {
    const apiUrl = 'https://www.breakingbadapi.com/api/characters'
    try {
        const { data } = await axios.get(apiUrl)
        return data
    } catch (error) {
        console.error(error);
    }
}

app.listen('3000', () => console.log('Server is running'))