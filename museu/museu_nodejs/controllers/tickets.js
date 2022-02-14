module.exports = app => {
    app.get('/ingresso', (req, res) => res.send('servidor ok para ingresso'))

    app.post('/ingresso', (req, res) => {
        console.log(req.body)
        res.send('realizando um post em ingresso')
    })
}

