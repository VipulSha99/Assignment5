import { Pool} from "pg";

const pool = new Pool({
    user:'vipul',
    host:'localhost',
    database:'mydb',
    password:'vipul123',
    port: 5432
})

// module.exports = pool;
export default pool;

