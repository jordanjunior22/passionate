export default async function handler(req, res) {
  // Get the Mailchimp API key and server prefix from environment variables
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  // Extract the email address from the request body
  const { email } = req.body;
  console.log('Received email:', email);

  // Configure the Mailchimp client with the API key and server prefix
  const client = require("@mailchimp/mailchimp_marketing");
  client.setConfig({
    apiKey: apiKey,
    server: serverPrefix,
  });

  // Define a function to subscribe the email address to the Mailchimp list
  const run = async () => {
    try {
      const response = await client.lists.addListMember("50063a05c1", {
        email_address: email,
        status: "subscribed",
      });
      console.log(response);
      return true; // Indicate successful API call
    } catch (error) {
      console.error(error);
      return false; // Indicate failed API call
    }
  };

  // Call the function to subscribe the email
  const apiCallSuccess = await run();

  // Send the appropriate response to the client based on the API call result
  if (apiCallSuccess) {
    res.status(200).json({ message: "Email subscribed successfully" });
  } else {
    res.status(500).json({ error: "An error occurred while subscribing the email" });
  }
}
