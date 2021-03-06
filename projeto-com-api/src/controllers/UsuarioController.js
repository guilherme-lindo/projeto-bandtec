const database = require('./../database/connection');

module.exports = {
    async index(request, response) {
        database.connect().then(() => {
            return database.sql
                    .query(`SELECT idUsuario, nomeUsuario, dataNasc, cpf, telefoneUsuario, email, login, senha FROM tbUsuario;`)
                    .then(result => {
                        response.send(result.recordset);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    },

    async create(request, response) {
        const { nomeUsuario, dataNasc, cpf, telefoneUsuario, email, login, senha } = request.body;
        
        database.connect().then(() => {
            return database.sql
                    .query(`INSERT INTO tbUsuario (nomeUsuario, dataNasc, cpf, telefoneUsuario, email, login, senha) VALUES ('${nomeUsuario}', CONVERT(Date, '${dataNasc}', 103), '${cpf}', '${telefoneUsuario}', '${email}', '${login}', '${senha}');`)
                    .then(() => {
                        console.log("Registro inserido!");
                        response.sendStatus(200);
                    });
        }).catch(error => {
            console.log("ERRO: "+error);
        }).finally(() => {
            database.sql.close();
        });
    }
}