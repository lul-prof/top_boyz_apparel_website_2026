import axios from 'axios'

const generateToken = async (req, res, next) => {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const authLink =process.env.MPESA_AUTH_LINK;
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64",
  );
  try {
    const response = await axios(authLink, {
      headers: { Authorization: `Basic ${auth}` },
    });

    console.log(response);
    
    req.token = response.data.access_token;
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default generateToken;