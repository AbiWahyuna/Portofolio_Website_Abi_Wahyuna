const projects = [
      {
        id:'p1',title:'SeaPedia',subtitle:'UI/UX Design · Mobile App',
        desc:'A maritime education UI/UX design project focused on the Crystal Jellyfish. The main goal of this project was to test the implementation of parallax interactions on mobile devices to increase user engagement. A dark blue monochromatic color scheme was used to keep the focus on sharp, high-contrast content visuals.',
        cat:'uiux',tags:['Figma','Prototyping','User Research','Design System'],
        tools:'Figma',year:'2024',role:'UI/UX Designer',demo:'https://www.figma.com/design/6Oft40U2YNqF7cjk24tNl3/Abi_Wahyuna_Project?node-id=413-2&t=ofRZOr8kpuEVpR81-1',
        images:[
          'img/JellyFish_0.png',
          'img/JellyFish_1.png',
          'img/JellyFish_2.png',
          'img/JellyFish_3.png',
          'img/JellyFish_4.png',
        ]
      },

      {
        id:'p2',title:'MagicType',subtitle:'Game Dev · Unity',
        desc:'MagicType is a wave-survival game that challenges the player\'s typing speed and accuracy. Built with Unity and C#, the game transforms traditional attack mechanics into a spell-casting system via keyboard input. This project demonstrates the integration of a real-time string input system into RPG combat logic.',
        cat:'game',tags:['Unity','C#'],
        tools:'Unity 2022, C#',year:'2025',role:'Game Developer / Artist',demo:'https://abiwahyuna.itch.io/magictype',
        images:[
          'img/MagicType_2.png',
          'img/MagicType_3.png',
          'img/MagicType_1.png'
        ]
      },

      {
        id:'p3',title:'Wanderly',subtitle:'UI/UX Design · Website',
        desc:'This UI/UX project embraces a global exploration theme with a modern and vibrant aesthetic. The use of high-quality imagery combined with bold typography aims to build trust and excitement for travelers. Elements such as interactive destination cards, a travel gallery, and a testimonials section are strategically arranged to optimize conversion and user navigation comfort.',
        cat:'uiux',tags:['Figma','User Research','Design System'],
        tools:'Figma',year:'2024',role:'UI/UX Designer',demo:'https://www.figma.com/design/6Oft40U2YNqF7cjk24tNl3/Abi_Wahyuna_Project?node-id=413-2&t=ofRZOr8kpuEVpR81-1',
        images:[
          'img/Wanderly_1.png',
          'img/Wanderly_2.png',
          'img/Wanderly_3.png'
        ]
      },


      {
        id:'p4',title:'TripLoka',subtitle:'UI/UX Design · Website',
        desc:'This UI/UX project is a Bali-exclusive tour guide platform that aims to connect travelers with authentic local Balinese guides who know every corner of the island deeply. Unlike mass tour agencies, this design focuses on a more personal and meaningful experience — from mountain hikes to exploring local traditions. The interface is crafted to reflect the natural beauty of Bali, ensuring every adventure feels safer, more comfortable, and rich with cultural stories.',
        cat:'uiux',tags:['Figma','Prototyping','User Research','Design System'],
        tools:'Figma',year:'2024',role:'UI/UX Designer',demo:'https://www.figma.com/design/6Oft40U2YNqF7cjk24tNl3/Abi_Wahyuna_Project?node-id=413-2&t=ofRZOr8kpuEVpR81-1',
        images:[
          'img/TripLoka_1.png',
          'img/TripLoka_2.png',
          'img/TripLoka_3.png',
          'img/TripLoka_4.png',
          'img/TripLoka_5.png',
          'img/TripLoka_6.png',
        ]
      },


      {
        id:'p5',title:'SmartPark',subtitle:'Website · Laravel',
        desc:'QuickPark is a SaaS (Software as a Service) solution designed to digitalize parking management from small to large scale. The system divides the workflow into three strategic roles: Admin for area management, Officer for real-time transaction recording and receipts, and Owner for revenue monitoring and data statistics. This project focuses on efficient vehicle recording and financial data transparency to prevent revenue leakage in the field.',
        cat:'web',tags:['Laravel','PHP','PHPMyAdmin','CSS'],
        tools:'Laravel, PHP, PHPMyAdmin, CSS',year:'2026',role:'Backend Developer',demo:'#',
        images:[
          'img/QuickPark_1.png',
          'img/QuickPark_2.png',
          'img/QuickPark_3.png',
          'img/QuickPark_4.png',
        ]
      },

      {
        id:'p6',title:'ArtTech',subtitle:'UI/UX Design · Website',
        desc:'ArtTech is a UI/UX solution for digital art exhibition needs that merges technology and aesthetics. The platform provides a space for artists to showcase their work with an exclusive and professional presentation. Focused on ease of navigation and sharp visual display, ArtTech redefines how we experience art in the digital era.',
        cat:'uiux',tags:['Figma','Prototyping','Design System'],
        tools:'Figma',year:'2024',role:'UI/UX Designer',demo:'https://www.figma.com/design/6Oft40U2YNqF7cjk24tNl3/Abi_Wahyuna_Project?node-id=413-2&t=ofRZOr8kpuEVpR81-1',
        images:[
          'img/ArtTech_1.png',
          'img/ArtTech_2.png',
          'img/ArtTech_3.png',
          'img/ArtTech_4.png',
        ]
      },

      {
        id:'p7',title:'Dunia Nara',subtitle:'Game Dev · Unity',
        desc:'Amidst the hustle and bustle of life, Dunia Nara offers a moment to pause. In this 2D platformer, players navigate a beautiful world while solving puzzles that reflect a journey of self-discovery. A blend of illustration art and Unity programming that aims to touch the player\'s heart through every small step Nara takes.',
        cat:'game',tags:['Unity','C#'],
        tools:'Unity 2022, C#',year:'2025',role:'Game Developer',demo:'',
        images:[
          'img/DuniaNara_2.png',
          'img/DuniaNara_1.png',
          'img/DuniaNara_3.png',
          'img/DuniaNara_4.png',
        ]
      },
      
      {
        id:'p8',title:'ZipPoint Star',subtitle:'Game Dev · Unity',
        desc:'ZipPoint Star is a casual mobile game that tests the player\'s precision and imagination. The core mechanic requires players to connect numbered dots in order to reveal a mysterious silhouette. Once the shape is uncovered, the next challenge is to guess the object using an available word-arrangement system. This project combines the visual satisfaction of drawing lines with cognitive stimulation through word puzzles.',
        cat:'game',tags:['Unity','C#'],
        tools:'Unity 2022, C#',year:'2025',role:'Game Developer',demo:'#',
        images:[
          'img/ZipPoint_1.png',
          'img/ZipPoint_2.png',
          'img/ZipPoint_3.png'
        ]
      },
    ];

    const catLabel = {uiux:'UI/UX',game:'Game Dev',web:'Website'};
    const catClass  = {uiux:'cat-uiux',game:'cat-game',web:'cat-web'};

    function renderCards(filter){
      const grid = document.getElementById('projectsGrid');
      grid.innerHTML = '';
      projects.forEach((p,i)=>{
        const hidden = (filter!=='all'&&p.cat!==filter)?'hidden':'';
        const card = document.createElement('div');
        card.className = `project-card ${hidden}`;
        card.dataset.id = p.id;
        card.style.animationDelay = `${i*0.06}s`;
        card.innerHTML = `
          <div class="project-thumb">
            <img src="${p.images[0]||''}" alt="${p.title}" loading="lazy" />
            <span class="project-cat-badge ${catClass[p.cat]}">${catLabel[p.cat]}</span>
          </div>
          <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.desc.substring(0,90)}…</p>
            <div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
          </div>`;
        card.addEventListener('click',()=>openModal(p.id));
        grid.appendChild(card);
      });
    }
    renderCards('all');

    document.getElementById('filterBar').addEventListener('click',e=>{
      const btn = e.target.closest('.filter-btn');
      if(!btn)return;
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });

    let currentImages=[],currentImg=0;

    function openModal(id){
      const p = projects.find(x=>x.id===id);
      if(!p)return;
      document.getElementById('mTitle').textContent=p.title;
      document.getElementById('mSubtitle').textContent=p.subtitle;
      document.getElementById('mDesc').textContent=p.desc;
      document.getElementById('mTools').textContent=p.tools;
      document.getElementById('mYear').textContent=p.year;
      document.getElementById('mRole').textContent=p.role;
      document.getElementById('mDemo').href=p.demo;
      currentImages=[...p.images]; currentImg=0;
      renderGallery();
      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow='hidden';
    }
    function closeModal(){
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow='';
    }
    document.getElementById('modalClose').addEventListener('click',closeModal);
    document.getElementById('modalOverlay').addEventListener('click',e=>{
      if(e.target===document.getElementById('modalOverlay'))closeModal();
    });

    function renderGallery(){
      const mainImg = document.getElementById('galleryMainImg');
      mainImg.style.opacity=0;
      setTimeout(()=>{mainImg.src=currentImages[currentImg];mainImg.style.opacity=1;},100);
      document.getElementById('galleryCounter').textContent=`${currentImg+1} / ${currentImages.length}`;
      const strip = document.getElementById('galleryThumbs');
      strip.querySelectorAll('.gallery-thumb').forEach(el=>el.remove());
      currentImages.forEach((src,i)=>{
        const thumb = document.createElement('div');
        thumb.className=`gallery-thumb${i===currentImg?' active':''}`;
        thumb.innerHTML=`<img src="${src}" alt="Thumbnail ${i+1}" loading="lazy" />`;
        thumb.addEventListener('click',()=>{currentImg=i;renderGallery();});
        strip.appendChild(thumb);

      });
    }
    document.getElementById('galleryPrev').addEventListener('click',()=>{
      currentImg=(currentImg-1+currentImages.length)%currentImages.length;renderGallery();
    });
    document.getElementById('galleryNext').addEventListener('click',()=>{
      currentImg=(currentImg+1)%currentImages.length;renderGallery();
    });
    document.addEventListener('keydown',e=>{
      if(!document.getElementById('modalOverlay').classList.contains('open'))return;
      if(e.key==='ArrowLeft'){currentImg=(currentImg-1+currentImages.length)%currentImages.length;renderGallery();}
      if(e.key==='ArrowRight'){currentImg=(currentImg+1)%currentImages.length;renderGallery();}
      if(e.key==='Escape')closeModal();
    });

    //kirim pesan ke email
    // INIT EMAILJS
    (function(){
      emailjs.init("KhXYVeff4fU-MxK3u");
    })();

    // KIRIM FORM
    document.getElementById('sendBtn').addEventListener('click', function(e) {
      e.preventDefault();

      const nama = document.querySelector('.form-input[type="text"]').value;
      const email = document.querySelector('.form-input[type="email"]').value;
      const pesan = document.querySelector('.form-textarea').value;

      if (!nama || !email || !pesan) {
        alert('Isi dulu semua field bro 😄');
        return;
      }

      const templateParams = {
        nama: nama,
        email: email,
        pesan: pesan,
        time: new Date().toLocaleString()
      };

      emailjs.send(
        "service_rfdceol",
        "template_jin37le",
        templateParams
      )
      .then(function(response) {
        alert('Pesan terkirim! 🚀');

        // reset form
        document.querySelector('.form-input[type="text"]').value = '';
        document.querySelector('.form-input[type="email"]').value = '';
        document.querySelector('.form-textarea').value = '';

      }, function(error) {
        alert('Gagal kirim 😢');
        console.log(error);
      });
    }); 