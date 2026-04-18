const projects = [
      {
        id:'p1',title:'FinTrack — Manajemen Keuangan',subtitle:'UI/UX Design · Mobile App',
        desc:'Desain antarmuka aplikasi manajemen keuangan personal dengan fitur pelacakan pengeluaran, anggaran bulanan, dan laporan visual. Riset pengguna dilakukan melalui 12 sesi wawancara mendalam untuk memastikan UX yang intuitif.',
        cat:'uiux',tags:['Figma','Prototyping','User Research','Design System'],
        tools:'Figma, Maze, Miro',year:'2024',role:'UI/UX Designer',demo:'#',code:'#',
        images:[
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
        ]
      },
      {
        id:'p2',title:'PixelRealm — Platformer 2D',subtitle:'Game Dev · Unity',
        desc:'Game platformer indie bertema retro pixel-art dengan 8 level unik, sistem musuh berbasis state machine, dan boss fight yang menantang. Dirilis di itch.io dengan 1.200+ unduhan.',
        cat:'game',tags:['Unity','C#','Aseprite','FMOD'],
        tools:'Unity 2023, C#, Aseprite',year:'2024',role:'Game Developer / Artist',demo:'#',code:'#',
        images:[
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop',
        ]
      },
      {
        id:'p3',title:'BaliCraft — E-Commerce Kerajinan',subtitle:'Website · Full-stack',
        desc:'Platform e-commerce khusus kerajinan tangan pengrajin Bali. Fitur: galeri produk interaktif, keranjang real-time, integrasi Midtrans, dan dashboard admin untuk manajemen stok.',
        cat:'web',tags:['Next.js','Tailwind','Supabase','Midtrans'],
        tools:'Next.js, TypeScript, Supabase, Midtrans',year:'2023',role:'Full-stack Developer',demo:'#',code:'#',
        images:[
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop',
        ]
      },
      {
        id:'p4',title:'SmartFarm — Monitoring Tanaman',subtitle:'IoT · Raspberry Pi',
        desc:'Sistem monitoring kebun otomatis menggunakan sensor suhu, kelembaban tanah, dan cahaya terkoneksi ke dashboard web real-time. Data dikirim via MQTT, divisualisasikan di Grafana, notifikasi ke WhatsApp.',
        cat:'iot',tags:['Arduino','Raspberry Pi','MQTT','Python','Node-RED'],
        tools:'Arduino, Python, MQTT, Grafana',year:'2024',role:'IoT Engineer',demo:'#',code:'#',
        images:[
          'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop',
        ]
      },
      {
        id:'p5',title:'Wanderlust — Travel App',subtitle:'UI/UX Design · Mobile',
        desc:'Aplikasi perjalanan dengan fitur itinerary pintar, rekomendasi tempat berbasis preferensi, dan peta offline. High-fidelity prototype dengan 40+ screen yang telah diuji ke 20 pengguna nyata.',
        cat:'uiux',tags:['Figma','Auto Layout','Prototyping','Usability Testing'],
        tools:'Figma, FigJam, Notion',year:'2023',role:'UI/UX Designer',demo:'#',code:'#',
        images:[
          'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&auto=format&fit=crop',
        ]
      },
      {
        id:'p6',title:'SmartDoor — Akses Pintu IoT',subtitle:'IoT · RFID + Web Dashboard',
        desc:'Sistem akses pintu otomatis berbasis RFID dan fingerprint terintegrasi dengan web dashboard untuk manajemen pengguna. Log akses disimpan di cloud dan dipantau real-time dari smartphone.',
        cat:'iot',tags:['ESP32','RFID','Firebase','React','Node.js'],
        tools:'ESP32, Arduino IDE, Firebase, React',year:'2023',role:'IoT + Full-stack Developer',demo:'#',code:'#',
        images:[
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop',
        ]
      },
    ];

    const catLabel = {uiux:'UI/UX',game:'Game Dev',web:'Website',iot:'IoT'};
    const catClass  = {uiux:'cat-uiux',game:'cat-game',web:'cat-web',iot:'cat-iot'};

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
      document.getElementById('mCode').href=p.code;
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
        strip.insertBefore(thumb,document.getElementById('uploadZone'));
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
    document.getElementById('file-upload').addEventListener('change',function(){
      Array.from(this.files).forEach(file=>{
        const r=new FileReader();
        r.onload=e=>{currentImages.push(e.target.result);currentImg=currentImages.length-1;renderGallery();};
        r.readAsDataURL(file);
      });
      this.value='';
    });