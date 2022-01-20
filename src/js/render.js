import { galleryWrap } from './gallery'

export function renderPictures(pictures) {
    const murkup = pictures
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => `<a class=" photo-card" href="${largeImageURL}">
        <div class="gallery__item">
          <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
          </div>
          <div class="info">
    <p class="info-item">
      <b class="info-item-title">Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b class="info-item-title">Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b class="info-item-title">Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b class="info-item-title">Downloads</b>
      ${downloads}
    </p>
  </div>
</a>`,
        )
        .join('');

    galleryWrap.insertAdjacentHTML('beforeend', murkup);
}