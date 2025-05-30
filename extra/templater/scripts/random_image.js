let clientID = "S_iM9EBcHMEiTISRK8E6MaZP2amR6unjec4h8tRq6Y0";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

const storeJsonData = fetch(endpoint, {
  method: "GET",
})
  .then((response) => response.json())
  .catch((err) => console.log(err));

const getData = async () => {
  const jsonData = await storeJsonData;
  return jsonData.urls["regular"].toString();
};

module.exports = getData;
