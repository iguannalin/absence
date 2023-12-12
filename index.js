window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");

  // if (container.dataset.info) moveElements();
  // else createElement(true);

  function start(e) {
    e.preventDefault();

    const text = `<!DOCTYPE html><html> <head> <title>absence</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://iguannalin.github.io/absence/index.css"/></head> <body><div id="overlay"></div> <div id="container" data-info=${btoa(info)}></div></body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,width=${getRandomInt(200,500)},height=${getRandomInt(100,400)}`);
    window.URL.revokeObjectURL(blobUrl);
  }

  // setTimeout(start, 500);
  document.addEventListener('touchstart', start, {passive: false});
});