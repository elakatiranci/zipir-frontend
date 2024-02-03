const people = [
    {
      name: 'Şeyma Gündüz',
      email: 'gunduzseyma@gmail.com',
      role: 'Kadın Doğum Uzmanı',
      imageUrl:
        'https://st.depositphotos.com/1017986/4567/i/450/depositphotos_45671649-stock-photo-doctor-with-stethoscope-writing-prescription.jpg',
      lastSeen: '3 saat önce',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Ahmet Dağcı',
      email: 'dagcı.ahmet@hotmail.com',
      role: 'Çocuk Doktoru',
      imageUrl:
        'https://previews.123rf.com/images/flisakd/flisakd1710/flisakd171000315/87920560-m%C3%A4nnlicher-doktor-mit-stethoskop-gesundheitswesen-medizinisches-konzept.jpg',
      lastSeen: '7 saat önce',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Cengiz Deniz',
      email: 'cengizdeniz@gmail.com',
      role: 'Çocuk Sağlığı ve Hastalıkları Uzmanı',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTK2AdPLy80YB1NnC0Nz6Cjx8a8smRx6GnXxHwyKxs9vZzG4gH2CQ2yIzSBHn97fNRi4&usqp=CAU',
      lastSeen: null,
    },
    {
      name: 'Yasemin Güzeş',
      email: 'güzesyasemin@gmail.com',
      role: 'Kadın Doğum Uzman Doktoru',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5HsAmbF6BjFFq2aP2Yk-QDNEuMjvrbK-p8CRwIS9i_CtDPcrlXv0F0yZnNbYnIkcz88&usqp=CAU',
      lastSeen: 'Yarım saat önce',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Beyza Nur Çelik',
      email: 'beyzacelik@hotmail.com',
      role: 'Yeni Doğan Uzman Doktoru',
      imageUrl:
        'https://st.depositphotos.com/1017986/3965/i/450/depositphotos_39654767-stock-photo-smiling-female-african-american-doctor.jpg',
      lastSeen: '1 saat önce',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Umut Sanel',
      email: 'sanelumut@hotmail.com',
      role: 'Kadın Sağlığı ve Hastalıkları Uzmanı',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEEp5vagCptGdj4GBxCkzR3qdliPIO-QIiwnaZPTMc7J493sRto5cTeKoE9ZB-ZcXRVI&usqp=CAUs',
      lastSeen: null,
    },
    {
        name: 'Şeyma Gündüz',
        email: 'gunduzseyma@gmail.com',
        role: 'Kadın Doğum Uzmanı',
        imageUrl:
          'https://st.depositphotos.com/1144472/1432/i/450/depositphotos_14326511-stock-photo-happy-smiling-doctor-showing-isolated.jpg',
        lastSeen: '3 saat önce',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Ahmet Yılmaz',
        email: 'yıldız.ahmet@hotmail.com',
        role: 'Çocuk Doktoru',
        imageUrl:
          'https://www.ozelsaglikhastanesi.com/afis/6814483-26964-dr_hilmi_tezgel_foto%C4%9Fraf.jpg',
        lastSeen: '7 saat önce',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Duygu Ozyeldan',
        email: 'ozyeldanduygu@gmail.com',
        role: 'Çocuk Sağlığı ve Hastalıkları Uzmanı',
        imageUrl:
          'https://st.depositphotos.com/2818715/4054/i/450/depositphotos_40542515-stock-photo-healthy-lifestyle-portrait-of-a.jpg',
        lastSeen: null,
      },
      {
        name: 'Yıldız Bakan',
        email: 'bakanyıldız@gmail.com',
        role: 'Kadın Doğum Uzman Doktoru',
        imageUrl:
          'https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-260nw-1724693776.jpg',
        lastSeen: 'Yarım saat önce',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
  ]
  
  export default function Example() {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person, index) => (
        <div style={{ margin: '2px 0', height: '80px'}}> 
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-white-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-purple-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-purple-900">{person.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-purple-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Son Görülme <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Çevrimiçi</p>
                </div>
              )}
            </div>
          </li>
          </div>
        ))}
      </ul>
    )
  }
  