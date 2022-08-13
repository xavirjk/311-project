import { makeGETrequest } from '../../context';
const REACT_APP_OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

export const geocoder = async (address, dispatch) => {
  //Physical Address Geocoding to Geometric transformations

  //use opencageData Googlemaps Api requesting Billing address
  const base_uri = 'https://api.opencagedata.com/geocode/v1/json';
  console.log('SS', REACT_APP_OPENCAGE_API_KEY);
  const uri = `${base_uri}?q=${address}&key=${REACT_APP_OPENCAGE_API_KEY}`;

  return await makeGETrequest(uri, dispatch, true);
};

export async function reverseGeocode(dispatch, coords) {
  dispatch({ type: 'REQUEST_API' });
  console.log('KK', process.env.REACT_APP_OPENCAGE_API_KEY);
  var query = coords[0] + ',' + coords[1];
  var api_url = 'https://api.opencagedata.com/geocode/v1/json';

  var request_url =
    api_url +
    '?' +
    'key=' +
    REACT_APP_OPENCAGE_API_KEY +
    '&q=' +
    encodeURIComponent(query) +
    '&pretty=1';

  return await makeGETrequest(request_url, dispatch, false);
}
