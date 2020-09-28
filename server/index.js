const express= require('express');
const app= express();
app.use(express.json());
const ctrl=require('./controllers/ScriptCtrl');

app.get('/api/scripts', ctrl.getScripts);
app.get('/api/script/:id', ctrl.getSingleScript);
app.post('/api/script', ctrl.addScript);
app.put('/api/script/:id',ctrl.updateScript);
app.delete('/api/script/:id',ctrl.deleteScript);

app.listen(3333,()=> console.log('server running on 3333'));