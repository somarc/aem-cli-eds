export default function decorate(block) {
  let videoSrc;
  let posterSrc;

  [...block.children].forEach((row) => {
    const link = row.querySelector('a[href]');
    if (!link) return;
    if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(link.href)) {
      videoSrc = link.href;
      row.remove();
    } else if (/\.(avif|webp|png|jpe?g|svg)(\?|#|$)/i.test(link.href)) {
      posterSrc = link.href;
      row.remove();
    }
  });

  const content = document.createElement('div');
  content.className = 'video-hero-content';
  [...block.children].forEach((row) => {
    [...row.children].forEach((cell) => {
      while (cell.firstChild) content.append(cell.firstChild);
    });
  });

  block.textContent = '';

  if (posterSrc) {
    const poster = document.createElement('img');
    poster.className = 'video-hero-poster';
    poster.src = posterSrc;
    poster.alt = '';
    poster.loading = 'eager';
    poster.setAttribute('aria-hidden', 'true');
    block.append(poster);
  }

  if (videoSrc) {
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.poster = posterSrc || '';
    video.setAttribute('aria-hidden', 'true');

    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4';
    video.append(source);
    block.append(video);
    block.classList.add('has-video');
  }

  block.append(content);
}
