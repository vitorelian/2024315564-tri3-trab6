document.querySelectorAll("[data-folder]").forEach(el => {
    const total = el.dataset.total;
    const folder = el.dataset.folder;
    let html = '';
    for (let i = 1; i <= total; i++) {
      html += `
        <div>
          <img src="imgs/${folder}/${folder} (${i}).jpg" alt="Imagem ${i}">
        </div>    
      `;
    }
    el.innerHTML = html;
  });
  
  const galeriaImageModal = document.querySelector('.galeria-image-modal');
  const galeriaBtClose = galeriaImageModal.querySelector('.bt-close');
  const galeriaContent = galeriaImageModal.querySelector('.content');
  const imgs = document.querySelectorAll('.galeria img');
  
  let currentImgIndex = null;
  let imgArray = [];
  
  imgs.forEach((img, index) => {
    imgArray.push(img);
  });
  
  imgs.forEach(img => {
    img.addEventListener('click', () => {
      currentImgIndex = imgArray.indexOf(img);
      galeriaContent.innerHTML = `<img src="${img.src}">`;
      galeriaImageModal.showModal();
    });
  });
  
  galeriaBtClose.addEventListener('click', () => {
    galeriaImageModal.close();
  });
  
  const galeriaBtNext = galeriaImageModal.querySelector('.bt-next');
  const galeriaBtPrev = galeriaImageModal.querySelector('.bt-prev');
  
  function updateImage(index) {
    if (index >= 0 && index < imgArray.length) {
      galeriaContent.innerHTML = `<img src="${imgArray[index].src}">`;
    }
  }
  
  galeriaBtNext.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % imgArray.length;
    updateImage(currentImgIndex);
  });
  
  galeriaBtPrev.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
    updateImage(currentImgIndex);
  });