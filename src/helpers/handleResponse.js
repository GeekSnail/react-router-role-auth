import { authService } from "../services";

export function handleResponse(res) {
  return res.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(res, data);
    if (!res.ok) {
      if ([401, 403].indexOf(res.status) !== -1) {
        authService.logout();
        location.reload(true);
      }
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
