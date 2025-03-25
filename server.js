const app = require('./app');

const PORT = 8080;
const HOST = '192.168.1.69';
app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
