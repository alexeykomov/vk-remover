goog.require('goog.Uri');

const onLoad = async () => {
  const url = window.location.href;
  const parsedUrl = goog.Uri.parse(url.replace(/#/, '?'));
  const userId = parsedUrl.getParameterValue('user_id');
  const accessToken = parsedUrl.getParameterValue('access_token');

  console.log('url: ', parsedUrl);
  console.log('userId: ', userId);
  console.log('accessToken: ', accessToken);

  if (userId && accessToken) {
    const requestUrl = `https://api.vk.com/method/friends.getRequests?
    access_token=${accessToken}
    &user_ids=${userId}
    &offset=0
    &count=1000
    &out=1
    &v=5.101`.replace(/\s+/g, '');
    console.log('requestUrl: ', requestUrl);
    const response = await fetch(requestUrl, {
      credentials: 'include',
      method: 'GET',
      mode: 'cors'
    });
    if (response.ok) {
      const res = response.json();
      console.log('res: ', res);
    }
  }
};

window.addEventListener('load', onLoad, false);

