/* Videos das aulas: a miniatura vira o player do YouTube so no clique.
   Carregar os 7 iframes de uma vez deixava a pagina pesada no 4G. */
document.querySelectorAll('.video-yt').forEach(function (box) {
  box.addEventListener('click', function () {
    if (box.querySelector('iframe')) return;
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + box.dataset.yt + '?autoplay=1&rel=0&modestbranding=1';
    f.title = 'Aula em vídeo';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    f.allowFullscreen = true;
    box.appendChild(f);
  });
});
