# Klipora

Klipora, videolara tarayıcı içinde altyazı oluşturmak, düzenlemek ve dışa aktarmak için yerel çalışan bir altyazı stüdyosudur.

## Özellikler

- Whisper tabanlı, cihaz üzerinde çalışan konuşma tanıma
- Cümle, kelime grubu, tek kelime ve dinamik karaoke altyazıları
- Zaman çizelgesi, kelime zamanlaması düzenleme ve hazır tipografi stilleri
- SRT, VTT, JSON proje ve altyazısı videoya işlenmiş video dışa aktarma
- Proje ayarlarını tarayıcıda yerel olarak saklama
- GitHub Pages ile statik yayın; uygulama sunucusu veya derleme adımı gerektirmez

## Kullanım

Yayınlanan sayfayı güncel Chrome, Edge veya Safari'de açın. İlk konuşma tanıma işleminde seçilen model internetten indirilir; mobil cihazlarda daha hafif olan Tiny modeli önerilir. Video ve ses dosyaları sunucuya yüklenmez.

Tarayıcıdaki video dışa aktarma desteği cihaza göre değişebilir. Dışa aktarma sırasında sekmeyi açık tutun. Model indirme ve bazı tarayıcı özellikleri için HTTPS ya da `localhost` gereklidir.

Yerel kullanım için `stuido.html` dosyasını açın. GitHub Pages yayını kökte `index.html` sunar.