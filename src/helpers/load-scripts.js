export const loadScript = async (url) =>
  new Promise((resolve, reject) => {
    const apiUrl = `${url}/support/console/59.0/integration.js`
    const scriptRef = document.createElement('script');
    const tag = document.getElementsByTagName('script')[0];

    scriptRef.src = apiUrl;
    scriptRef.type = 'text/javascript';
    scriptRef.async = true;
    scriptRef.onerror = reject;
    scriptRef.onload = scriptRef.onreadystatechange = res =>
      (!res.readyState || res.readyState === 'complete') && resolve(res);

    tag.parentNode.insertBefore(scriptRef, tag);
  });