import express from 'express';

const router = express.Router();

const DEVICES_DB = [
  {
    id: 1,
    name: 'DEVICE1',
    activated: false,
    packages: ['PACKAGE1', 'PACKAGE34'],
  },
];

router.post('/:id/activate', async (req, res) => {
  const {
    params: { id },
  } = req;

  const device = DEVICES_DB.find((d) => d.id === id);

  if (!device) {
    return res.status(404).end();
  }

  const user = req.app.get('user');

  if (user.type === 'user') {
    return res
      .status(403)
      .json({ code: 'unauthorized', message: 'Please contact your administrator' });
  }

  device.activated = true;

  return res.status(201).json({ success: true, device });
});

export default router;
