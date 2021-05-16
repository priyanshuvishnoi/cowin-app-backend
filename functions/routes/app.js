const router = require('express').Router();
const axios = require('axios').default;

router.get('/getSlot',async (req, res) => {
  const pinCode = 244501;
  const date = '18-05-2021';
  try {
    const response = await axios.get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${date}`,
      { headers: { 'User-Agent': 'PostmanRuntime/7.28.0' } }
    );
    res.json({ response: response.data });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
