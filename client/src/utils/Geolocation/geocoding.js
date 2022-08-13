import { makeGETrequest } from '../../context';

const base_uri = process.env.REACT_APP_OPENCAGE_URI;
const api_key = process.env.REACT_APP_OPENCAGE_API_KEY;

export const geocoder = async (address, dispatch) => {
  const uri = `${base_uri}?q=${address}&key=${api_key}`;

  return await makeGETrequest(uri, dispatch, true);
};

export async function reverseGeocode(dispatch, coords) {
  dispatch({ type: 'REQUEST_API' });
  var query = coords[0] + ',' + coords[1];

  var request_url =
    base_uri +
    '?' +
    'key=' +
    api_key +
    '&q=' +
    encodeURIComponent(query) +
    '&pretty=1';

  return await makeGETrequest(request_url, dispatch, false);
}
