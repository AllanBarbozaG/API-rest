import Database from "../database/Database.js";

class DAO {

    static async ativaForeignKeys(){

        const query = 'PRAGMA foreign_keys = ON'

        Database.run(query, error => {
            if(error){
                console.log(error)
            }else{
                console.log("Chaves estrangeiras funcionando")
            }
        })    
    }

    static createTable(query){

        return new Promise((resolve, reject) => {
            Database.run(query, (error) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve("Tabela criada")
                }
            })
        })
    }

    static inserir(entidade, query){
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (error) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve({error: false, message: "Cadastrou"})
                }
            })
        })
    }


    static listarTodas(query){
        return new Promise((resolve, reject) => {
            Database.all(query, (error, resultado) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve(resultado)
                }
            })
        })
    }

    static listarLimpeza(id, query){
        return new Promise((resolve, reject) => {
            Database.all(query, id, (error, resultado) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve(resultado)
                }
            })
        })
    }
}

export default DAO