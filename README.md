# Healthcare Dashboard

Sağlık hizmetlerini dijitalleştiren modern bir web uygulaması. Hastalar randevu alabilir, doktorlar takvim yönetebilir ve profil bilgilerini güncelleyebilirler.

## 📋 Proje Hakkında

Healthcare Dashboard, hastaların doktor randevusu alabilmeleri ve doktorların hastalarını yönetebilmeleri için tasarlanan kapsamlı bir platform sunar.

### Temel Özellikler

- ✅ **Hasta Paneli**

  - Doktor arama ve filtreleme
  - Uzmanlık alanına göre doktor görüntüleme
  - Randevu alma
  - Profil yönetimi

- ✅ **Doktor Paneli**

  - Takvim yönetimi
  - Hastalar listesi
  - Profil görüntüleme
  - Uygun olmayan zaman aralıklarını ayarlama

- ✅ **Kimlik Doğrulama**
  - Giriş (Login)
  - Kayıt (Signup)
  - Rol tabanlı erişim denetimi

## 🛠️ Teknolojiler

### Frontend

- **React 19** - UI framework
- **React Router DOM 7.6** - Sayfa yönlendirmesi
- **CSS Modules** - Stil yönetimi
- **FontAwesome 6** - İkonlar

### Geliştirme Araçları

- **React Scripts 5.0** - Build ve test araçları
- **Testing Library** - Otomatik testler
- **Node.js + npm** - Paket yöneticisi

## 📁 Proje Yapısı

```
healthcare-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DoctorPanel/          # Doktor gösterge tablosu
│   │   │   ├── DoctorCalendar.jsx
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── DoctorProfile.jsx
│   │   │   ├── PatientList.jsx
│   │   │   └── PatientDetail.jsx
│   │   ├── Footer/               # Sayfa alt bilgisi
│   │   ├── HeroBanner/           # Ana sayfa başlık
│   │   ├── Navbar/               # Üst navigasyon
│   │   ├── SpecialitySection/    # Uzmanlık alanları
│   │   └── TopDoctorsSection/    # Popüler doktorlar
│   ├── pages/
│   │   ├── AppointmentPage/      # Randevu alma sayfası
│   │   ├── CalendarPage/         # Takvim görünümü
│   │   ├── DoctorDetailPage/     # Doktor detayları
│   │   ├── HomePage/             # Ana sayfa
│   │   ├── LoginPage/            # Giriş sayfası
│   │   ├── ProfilePage/          # Profil sayfası
│   │   └── SignupPage/           # Kayıt sayfası
│   ├── assets/                   # Resimler ve medya dosyaları
│   ├── styles/                   # Global stiller
│   ├── App.jsx                   # Ana uygulama bileşeni
│   └── index.jsx                 # Giriş noktası
├── package.json                  # Bağımlılıklar ve script'ler
└── README.md                      # Bu dosya
```

## 🚀 Başlangıç

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm (v6 veya üzeri)

### Kurulum Adımları

1. **Depoyu klonlayın**

```bash
git clone https://github.com/yourusername/healthcare-dashboard.git
cd healthcare-dashboard
```

2. **Bağımlılıkları yükleyin**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**

```bash
npm start
```

Uygulama, [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

## 📱 Sayfalar ve Rotalar

| Rota                     | Sayfa            | Açıklama                                        |
| ------------------------ | ---------------- | ----------------------------------------------- |
| `/`                      | HomePage         | Ana sayfa - Doktor listesi ve uzmanlık alanları |
| `/login`                 | LoginPage        | Kullanıcı giriş sayfası                         |
| `/signup`                | SignupPage       | Yeni kullanıcı kayıt sayfası                    |
| `/profile`               | ProfilePage      | Kullanıcı profil sayfası                        |
| `/appointment/:doctorId` | AppointmentPage  | Randevu alma sayfası                            |
| `/doctor/:doctorId`      | DoctorDetailPage | Doktor detay sayfası                            |
| `/calendar`              | CalendarPage     | Takvim görünümü                                 |
| `/doctor`                | DoctorDashboard  | Doktor gösterge tablosu                         |
| `/doctor/profile`        | DoctorProfile    | Doktor profili                                  |
| `/doctor/calendar`       | DoctorCalendar   | Doktor takvimi                                  |
| `/doctor/patients`       | PatientList      | Hasta listesi                                   |

## 🔧 Yapılandırma

### Rol Tabanlı Erişim

Dosya: [src/App.jsx](src/App.jsx#L16-L17)

```javascript
const isLoggedIn = true;
const userRole = "doctor"; // "doctor" veya "patient"
```

Mevcut durumda statik olarak ayarlanmıştır. Gerçek uygulamada, bu değerler Context API veya Redux gibi global state yönetim araçlarından alınmalıdır.

## 🎨 Stil Yönetimi

Proje, CSS Modules kullanarak stil yönetimi yapmaktadır:

- Her bileşen için ayrı `.module.css` dosyası
- Global stiller: [src/styles/](src/styles/)
- Scoped CSS otomatik olarak ad çakışmalarını önler

## 📦 Build

Üretim için uygulamayı build etmek için:

```bash
npm run build
```

Bu komut, `build/` klasörüne optimize edilmiş dosyalar oluşturur.

## 🧪 Testler

Testleri çalıştırmak için:

```bash
npm test
```

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'i push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📧 İletişim

Sorularınız veya önerileriniz için:

- Email: support@healthcaredashboard.com
- GitHub Issues: [Sorunları bildir](https://github.com/yourusername/healthcare-dashboard/issues)

## 🗺️ Gelecek Özellikler

- [ ] Gerçek zamanlı bildirimler
- [ ] Video danışma seçeneği
- [ ] SMS/Email randevu hatırlatıcıları
- [ ] İlaç yönetimi sistemi
- [ ] Tıbbi tahlil sonuçları
- [ ] Çevrimdışı mod
- [ ] Mobil uygulama
- [ ] API entegrasyonu

## 🐛 Bilinen Sorunlar

- Şu anda kullanıcı kimlik doğrulaması hardcoded'dir
- Backend API entegrasyonu henüz yapılmamıştır
- Veritabanı bağlantısı bulunmamaktadır

## 📚 Kaynaklar

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [FontAwesome Icons](https://fontawesome.com/icons)

---

**Geliştirme Tarihi:** 2026  
**Son Güncelleme:** Ocak 2026
