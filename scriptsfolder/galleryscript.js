

      // 1. Data for 30 Images (Replace paths with your actual image filenames)
      const imageData = [
        { src: "images/ardent3.jpg", caption: "Ardent Hot Springs" },
        { src: "images/ardent2.webp", caption: "Ardent Hot Springs" },
        { src: "images/mantik.jpg", caption: "Mantigue Island Nature Park" },
        { src: "images/lansones.jpg", caption: "Sweet Camiguin Lanzones" },
        { src: "images/historyicon.jpg", caption: "Sunken Cemetery" },
        { src: "images/notblackisland.webp", caption: "White Island" },
        { src: "images/tuasan.jpg", caption: "Tuasan Falls" },
        { src: "images/jungletemple.avif", caption: "Temple" },
        { src: "images/macao.jpg", caption: "Macao Spring" },
        { src: "images/clam2.jpg", caption: "Giant Clam " },
        { src: "images/spring.JPG", caption: "Sto Niño Cold Spring" },
        { src: "images/dakongatahon.webp", caption: "Giant Clam Sanctuary" },
        { src: "images/spring.JPG", caption: "Soda Bora Water Spring" },
        { src: "images/soda.jpg", caption: "Sto Niño Cold Spring" },
        { src: "images/morotower1.jpg", caption: "Moro Watch Tower" },
        { src: "images/mangrove-park.jpg", caption: "Katunggan Mangrove Park" },
        { src: "images/p1070177.webp", caption: "Jigdug Reef" },
        { src: "images/hbk2.jpg", caption: "Mt. Hibok-Hibok" },
        { src: "images/goy.jpg", caption: "Goi Ob Church Ruins" },
        { src: "images/spring.JPG", caption: "Sto Niño Cold Spring" },
        { src: "images/owlmain.jpg", caption: "Owl" },
        { src: "images/sodabora3.jpg", caption: "Soda Bora 3" },
        { src: "images/tree.jpg", caption: "Tree" },
        { src: "images/sopro.jpg", caption: "Tree" },
        { src: "images/mount.jpg", caption: "Mountain" },
        { src: "images/st3.webp", caption: "Sto Nino Cold Spring Sign" },
        { src: "images/paras-beach-resort.jpg", caption: "Paras Resort" },
        { src: "images/r2.jpg", caption: "Reef" },
        { src: "images/lansonesfes.jpg", caption: "Lansones Festival" },
        { src: "images/katib1.jpeg", caption: "Katibawsan Falls" },
        
      ];

      // Length sa array
      var len = imageData.length;


      for (let i = imageData.length + 1; i <= len; i++) {
        imageData.push({
          src: `images/camiguin-${i}.jpg`,
          caption: `Scenic View of Camiguin #${i}`,
        });
      }

      const container = document.getElementById("gallery-container");
      let currentIndex = 0;


      imageData.forEach((img, index) => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-2";
        col.innerHTML = `
          <img src="${img.src}" 
               class="img-fluid rounded gallery-img shadow-sm" 
               alt="${img.caption}" 
               onclick="openLightbox(${index})"
               onerror="this.src='https://via.placeholder.com/400x300?text=Camiguin+Photo'">
        `;
        container.appendChild(col);
      });

      // samok samok
      const modal = new bootstrap.Modal(
        document.getElementById("lightboxModal"),
      );
      const lbImage = document.getElementById("lightbox-image");
      const lbCaption = document.getElementById("lightbox-caption");

      function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        modal.show();
      }

      function updateLightbox() {
        lbImage.src = imageData[currentIndex].src;
        lbCaption.innerText = imageData[currentIndex].caption;
      }

      function changeImage(step) {
        currentIndex += step;
        if (currentIndex >= imageData.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = imageData.length - 1;
        updateLightbox();
      }