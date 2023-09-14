import express from 'express';
import {
  createRole,
  deleteRole,
  getAllRole,
  updateRole,
} from '../controllers/role.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create a new role in DB
router.post('/create',verifyAdmin, createRole);

//update role in DB
router.put('/update/:id',verifyAdmin, updateRole);

//Get all the role
router.get('/getAll', getAllRole);

//Delete role from DB
router.delete('/deleteRole/:id',deleteRole);

export default router;
