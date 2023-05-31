import express from 'express';
import { PORT } from './config.js';
import authenticate from 'middleware/auth.middleware.js';
import deviceController from 'routes/device/device.controller.js';
const app = express();

app.use('/device', authenticate, deviceController);

app.listen(PORT, () => {
  console.log(`Servering listening on port ${PORT}`);
});
