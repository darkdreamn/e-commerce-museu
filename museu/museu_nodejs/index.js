const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3001, () => console.log('servidor rodando porta 3001'))
