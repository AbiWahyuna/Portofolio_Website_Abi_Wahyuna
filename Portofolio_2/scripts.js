const projects = [
      {
        id:'p1',title:'SeaPedia',subtitle:'UI/UX Design · Mobile App',
        desc:'Proyek desain UI/UX bertema edukasi maritim yang berfokus pada ubur-ubur kristal (Crystal Jellyfish). Tujuan utama proyek ini adalah menguji penerapan interaksi parallax pada perangkat mobile untuk meningkatkan keterlibatan pengguna (user engagement). Menggunakan skema warna monokromatik biru tua untuk menjaga fokus pada visual konten yang kontras dan tajam.',
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
        desc:'MagicType adalah game berbasis wave-survival yang menantang kecepatan dan akurasi mengetik pemain. Dibangun menggunakan Unity dan C#, game ini mengubah mekanisme serangan tradisional menjadi sistem spell-casting melalui keyboard. Proyek ini mendemonstrasikan integrasi sistem input string real-time ke dalam logika pertempuran RPG.',
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
        desc:'Proyek UI/UX ini mengusung tema eksplorasi global dengan estetika yang modern dan cerah. Penggunaan high-quality imagery dikombinasikan dengan tipografi yang tegas bertujuan untuk membangun kepercayaan dan rasa antusias bagi para traveler. Elemen-elemen seperti kartu destinasi yang interaktif, galeri perjalanan, dan bagian testimoni disusun secara strategis untuk mengoptimalkan konversi dan kenyamanan navigasi pengguna.',
        cat:'uiux',tags:['Figma','User Research','Design System'],
        tools:'Figma',year:'2024',role:'UI/UX Designer',demo:'https://www.figma.com/design/6Oft40U2YNqF7cjk24tNl3/Abi_Wahyuna_Project?node-id=413-2&t=ofRZOr8kpuEVpR81-1',
        images:[
          'img/wanderly_1.png',
          'img/wanderly_2.png',
          'img/wanderly_3.png'
        ]
      },


      {
        id:'p4',title:'TripLoka',subtitle:'UI/UX Design · Website',
        desc:'Proyek UI/UX ini adalah platform tour guide khusus Bali yang bertujuan menghubungkan pelancong dengan pemandu lokal asli Bali yang mengenal setiap sudut pulau secara mendalam. Berbeda dengan agen tur massal, desain ini berfokus pada pengalaman yang lebih personal dan bermakna—mulai dari mendaki gunung hingga menjelajahi tradisi lokal. Antarmukanya dirancang untuk mencerminkan keindahan alam Bali, memastikan setiap petualangan terasa lebih aman, nyaman, dan penuh cerita budaya.',
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
        desc:'QuickPark adalah solusi SaaS (Software as a Service) yang dirancang untuk mendigitalisasi pengelolaan parkir dari skala kecil hingga besar. Sistem ini membagi alur kerja ke dalam tiga peran strategis: Admin untuk manajemen area, Petugas untuk pencatatan transaksi real-time dan struk, serta Owner untuk pemantauan pendapatan dan statistik data. Proyek ini berfokus pada efisiensi pencatatan kendaraan dan transparansi data keuangan untuk mencegah kebocoran pendapatan di lapangan.',
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
        desc:'ArtTech adalah solusi UI/UX untuk kebutuhan pameran seni digital yang menggabungkan teknologi dan estetika. Platform ini menyediakan ruang bagi seniman untuk memamerkan karya mereka dengan tampilan yang eksklusif dan profesional. Berfokus pada kemudahan navigasi dan penyajian visual yang tajam, ArtTech mendefinisikan ulang cara kita menikmati seni di era digital.',
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
        desc:'Di tengah hiruk pikuk kehidupan, Dunia Nara hadir sebagai tempat pemberhentian sejenak. Dalam game platformer 2D ini, pemain akan menavigasi dunia yang indah sambil memecahkan teka-teki yang merefleksikan perjalanan mencari jati diri. Sebuah perpaduan seni ilustrasi dan pemrograman Unity yang bertujuan menyentuh hati pemain melalui setiap langkah kecil Nara.',
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
        desc:'ZipPoint Star adalah game mobile kasual yang menguji ketelitian dan imajinasi pemain. Mekanik utamanya mengharuskan pemain menghubungkan titik-titik sesuai urutan angka untuk membentuk siluet misterius. Setelah bentuk terungkap, tantangan berikutnya adalah menebak objek tersebut menggunakan sistem susun kata yang tersedia. Proyek ini menggabungkan kepuasan visual saat menggambar garis dengan stimulasi kognitif melalui teka-teki kata.',
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