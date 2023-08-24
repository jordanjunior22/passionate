export default async function handler(req, res) {
  
const { email } = req.body;
console.log('Received email:', email);

const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({"accessToken":"pat-na1-f3d8c3a4-6561-41a7-a5b0-36554770004a"});
const properties = {
  "company": "Biglytics",
  "email": email,
  "firstname": "Bryan",
  "lastname": "Cooper",
  "phone": "(877) 929-0687",
  "website": "biglytics.net"
};
const SimplePublicObjectInputForCreate = { properties, associations: [{"to":{"id":"101"},"types":[{"associationCategory":"HUBSPOT_DEFINED","associationTypeId":1}]}] };

try {
  const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInputForCreate);
  console.log(JSON.stringify(apiResponse, null, 2));
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}

}



