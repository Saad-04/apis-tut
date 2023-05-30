import express from "express";
import {userFromParams} from "../controllers/userFromParams.js";
import {userFromName} from "../controllers/userFromName.js";
import {userAll} from "../controllers/userAll.js";
import { updateUser } from "../controllers/updateUser.js";
import { deleteUser } from "../controllers/deleteUser.js";

export const router = express.Router()


router.get('/all', userAll)

router.get('/userid/:name', userFromParams)
router.route('/userid/:name').get(userFromName).put(updateUser).delete(deleteUser)
