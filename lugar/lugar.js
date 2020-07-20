const axios = require("axios");

const getLugarLating = async (direccion) => {
  const encodedUrl = encodeURI(direccion);
  

  const instance = axios.create({
    baseURL: `https://geocode.xyz/[requestfont>&auth=808592731518131126754x6705)location=${encodedUrl}?json=1`,
    headers: {
      "x-rapidapi-key": "658c82edbemsh5371e80692743c1p1c3859jsn1e2f2a56f851",
    },
  });

  let data;

  // Make a request for a user with a given ID
  let resp = await instance
    .get()
    .then((response) => {
      // handle success
      const data = response.data;

      const direccionRes = data.standard.city + " - " + data.standard.countryname;
      const lat = data.latt;
      const lng = data.longt;

        if(data.standard.countryname !== undefined){
            return {
                direccion: direccionRes,
                lat,
                lng,
              };
        }else{
            return false;
        }

      
      console.log(response.data.longt + "*-*" + response.data.latt);
    })
    .catch((err) => console.log('No hubo un resultado para ' + direccion,err));

    return resp;
  
};

module.exports = {
  getLugarLating,
};
