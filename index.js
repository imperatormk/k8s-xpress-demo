const express = require('express')
const app = express()

const startDate = new Date()
const id = Math.random().toString(36).substring(2)

app.get('/', (_, res) => {
  res.json({
		id,
		available: true,
		start_date: startDate
	})
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})