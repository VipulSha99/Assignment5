import pool from '../util/db.js';

export const getUserData = (req:any,res:any)=>{

    pool.query('SELECT * from users',(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code(404).json("some error occur",q_err);
        }
        res.json(q_res.rows);
    })
}

export const deleteUser = (req:any,res:any)=>{
    console.log(req.query.userid);
    pool.query('DELETE FROM users WHERE user_id = $1',[req.query.userid],(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code(404).json("some error occur",q_err);
        }
        res.json(q_res);    
    })
}
export const createUser = (req:any,res:any)=>{
    console.log(req.body);
    const data = [req.body.firstName,req.body.middleName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.role,req.body.address,req.body.createdDate];
    pool.query('insert into users (first_name,middle_name,last_name,email,phone_number,role,address,created_date) values ($1,$2,$3,$4,$5,$6,$7,$8)',data,(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code(404).json("some error occur",q_err);
        }
        res.json(q_res);
    })
}

export const updateUser = (req:any,res:any)=>{
    console.log(req.body);
    const data = [req.body.firstName,req.body.middleName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.role,req.body.address,req.body.createdDate,req.body.userId];
    pool.query('UPDATE users SET first_name=$1,middle_name=$2, last_name=$3, email=$4, phone_number=$5, role=$6, address=$7, created_date=$8 WHERE user_id=$9',data,(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code(404).json("some error occur",q_err);
        }
        res.json(q_res);
    })
}