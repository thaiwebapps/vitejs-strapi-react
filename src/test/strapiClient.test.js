import strapiClient from '../middleware/strapi.js';
const client = new strapiClient();

client
  .get(
    'https://strapi-app-pwvxp.ondigitalocean.app/api/articles?populate=*&locale=th'
  )
  .then((res) => {
    console.log(res.data);
  });
