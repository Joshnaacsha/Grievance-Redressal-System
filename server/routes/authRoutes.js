import express from 'express';
import { loginPetitioner, loginOfficial, loginAdmin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login/petitioner', loginPetitioner);
router.post('/login/official', loginOfficial);
router.post('/login/admin', loginAdmin);

export default router;
