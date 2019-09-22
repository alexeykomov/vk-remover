import { removeOutgoingRequests } from './somemodule.js'
const Uri = goog.require('goog.Uri');

const onLoad = () => {
  const url = window.location.href;
  const parsedUrl = Uri.parse(url.replace(/#/, '?'));
  const userId = parsedUrl.getParameterValue('user_id');
  const accessToken = parsedUrl.getParameterValue('access_token');

  console.log('url: ', parsedUrl);
  console.log('userId: ', userId);
  console.log('accessToken: ', accessToken);
  //
};

window.addEventListener('load', onLoad, false);

