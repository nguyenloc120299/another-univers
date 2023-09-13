const URL = "https://au-api-v2.enabledemo.com/openapi";
const HOME_PAGE = "https://au.milkywaygalaxy.io/";

const getPlatform = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }

  return "";
};

const redirect = (url) => (window.location.href = url);

const getURLRedirect = () => {
  const platform = getPlatform();
  if (!platform) {
    redirect(HOME_PAGE);
  }

  fetch(`${URL}/version/${platform}/link`)
    .then((res) => res.json())
    .then((data) => redirect(data?.data || HOME_PAGE))
    .catch(() => redirect(HOME_PAGE));
};

getURLRedirect();
