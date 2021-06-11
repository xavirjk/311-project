import { makeGETrequest } from '../../context';
const api_key = ''; /** Your Api key Here*/

export const geocoder = async (address, dispatch) => {
  //Physical Address Geocoding to Geometric transformations

  //use opencageData Googlemaps Api requesting Billing address
  const base_uri = 'https://api.opencagedata.com/geocode/v1/json';

  const uri = `${base_uri}?q=${address}&key=${api_key}`;

  return await makeGETrequest(uri, dispatch, true);
};

export async function reverseGeocode(dispatch, coords) {
  dispatch({ type: 'REQUEST_API' });

  var query = coords[0] + ',' + coords[1];
  var api_url = 'https://api.opencagedata.com/geocode/v1/json';

  var request_url =
    api_url +
    '?' +
    'key=' +
    api_key +
    '&q=' +
    encodeURIComponent(query) +
    '&pretty=1';

  return await makeGETrequest(request_url, dispatch, false);
}
