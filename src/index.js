import { removeOutgoingRequests } from './somemodule.js'

const onLoad = () => {

  VK.UI.button('login-button');

  VK.Auth.login((response) => {
    if (response.session) {
      /* Пользователь успешно авторизовался */

      if (response.settings) {
        /* Выбранные настройки доступа пользователя, если они были запрошены */
      }
    } else {
      /* Пользователь нажал кнопку Отмена в окне авторизации */
    }
  });

  VK.Api.call('users.get', {user_ids: 6492, v:"5.73"}, function(r) {
    if(r.response) {
      alert('Привет, ' + r.response[0].first_name);
      removeOutgoingRequests();
    }
  });

};

document.addEventListener('load', onLoad, false);
