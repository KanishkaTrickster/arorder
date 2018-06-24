import { resolve } from "path";
const pool = require("../utils/dbConnection");

const user = {
    login:(username, password)=>{
        return new Promise((resolve, reject)=>{
            var sql = "select * from users where username = ? and password = ? ";
            var parameters = [username, password];
            pool.query(sql, parameters, (err,rows)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }else{
                    if(row.length > 0){
                        resolve(rows);
                    }else{
                        resolve(false);
                    }
                }
            })
        })
    }
};
