import {Router} from "express";
import {getUserData,deleteUser, createUser,updateUser} from "../controller/user";

const router = Router();

router.get("/",getUserData);
router.delete('/userDelete',deleteUser);
router.post('/userCreate',createUser);
router.put('/updateUser',updateUser)

export default router;