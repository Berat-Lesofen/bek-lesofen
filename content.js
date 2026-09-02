/*
  SİTENİN İÇERİK DOSYASI
  Kişisel bilgilerini değiştirmek için yalnızca bu dosyayı düzenle.
  Tırnak işaretlerinin içindeki metinleri kendi bilgilerinle değiştirmen yeterli.
*/
const siteContent = {
  siteName: 'Bek Lesofen',
  shortName: 'BL',
  description: 'Tarih, felsefe, sosyoloji, teknoloji ve fitness üzerinden insanı, toplumu ve sistemleri anlamaya çalışan kişisel bir düşünce ve yazı alanı.',
  tagline: 'Zihin, Beden ve Sistemler Üzerine Notlar',

  hero: {
    eyebrow: 'Düşünce ve araştırma notları',
    // <br> yeni satır, <em> ise turuncu ve italik vurgulu metin oluşturur.
    title: 'Zihin, Beden ve<br><em>Sistemler Üzerine Notlar.</em>',
    paragraphs: [
      'Tarihin bıraktığı izler, toplumların çalışma biçimleri, teknolojinin dönüştürdüğü dünya ve bedenin hareket mekanikleri...',
      'Bek Lesofen, farklı disiplinleri tek bir merak etrafında buluşturuyor: İnsan ve onu şekillendiren sistemler.',
      'Burada tarih, felsefe, sosyoloji, teknoloji ve fitness üzerine araştırıyor, düşünüyor ve notlarımı paylaşıyorum.',
    ],
    button: 'Notları keşfet <span aria-hidden="true">↓</span>',
  },

  about: {
    eyebrow: '01 — Hakkımda',
    title: 'Bağlantıları<br>aramak.',
    text: 'Disiplinler arasındaki bağlantıları kurmayı, bir konunun görünen kısmının arkasındaki nedenleri araştırmayı seviyorum. Sosyoloji ve insan davranışlarından tarihe ve felsefeye, teknolojiden antrenman bilimine kadar farklı alanlarda okuyorum, araştırıyorum ve kendi süzgecimden geçiriyorum.',
    detail: 'Bazen bir toplumsal yapının nasıl oluştuğunu, bazen bir fikrin insan davranışını nasıl etkilediğini, bazen de bir hareketin biyomekaniğini anlamaya çalışıyorum. Bu site, bütün bu merakların bir araya geldiği kişisel not defterim.',
    tags: ['Tarih', 'Felsefe', 'Sosyoloji', 'Teknoloji', 'Fitness'],
  },

  categories: {
    eyebrow: '02 — Konular',
    title: 'Merakın beş yönü.',
    intro: 'Farklı alanlar, tek bir temel soru: İnsan ve onu biçimlendiren sistemler nasıl çalışır?',
    items: [
      { name: 'Tarih', description: 'Geçmişi olayların ötesinde; kurumlar, toplumlar ve süreklilikler üzerinden okumak.' },
      { name: 'Felsefe', description: 'İnsan, irade, ahlak, anlam, özgürlük ve varoluş üzerine sorular.' },
      { name: 'Sosyoloji', description: 'Toplumu, insan davranışlarını, iktidarı ve değişen sosyal yapıları anlamaya çalışma.' },
      { name: 'Teknoloji', description: 'Yapay zekâ, yazılım, dijital dünya ve teknolojinin insan hayatını nasıl dönüştürdüğü.' },
      { name: 'Fitness', description: 'Antrenman bilimi, biyomekanik, anatomi, kuvvet gelişimi ve fiziksel adaptasyon.' },
    ],
  },

  posts: {
    eyebrow: '03 — Yazılar',
    title: 'Son notlar.',
    items: [
      {
        category: 'Tarih',
        meta: 'TARİH · YAKINDA',
        title: "Geçmişin Mirası: Osmanlı'dan Cumhuriyet'e Kurumların Sürekliliği",
        text: 'Kurumları ve dönüşümü, kopuşlardan çok süreklilikler üzerinden okumaya dair bir not.',
        featured: true,
      },
      {
        category: 'Felsefe',
        meta: 'FELSEFE · YAKINDA',
        title: 'İrade, Disiplin ve İnsan: Zorluğu Neden Seçeriz?',
        text: 'Zorlukla kurduğumuz ilişkinin irade, anlam ve disiplinle kesiştiği yerler.',
      },
      {
        category: 'Sosyoloji',
        meta: 'SOSYOLOJİ · YAKINDA',
        title: 'Gözetim Toplumundan Algoritmik Topluma',
        text: 'Görünürlük, veri ve algoritmaların gündelik davranışlarımızı nasıl biçimlendirdiği üzerine.',
      },
      {
        category: 'Teknoloji',
        meta: 'TEKNOLOJİ · YAKINDA',
        title: 'Yapay Zekâ Çağında Bilgiye Ulaşmak Değişti mi?',
        text: 'Bilgi bolluğu içinde doğrulama, seçme ve düşünmenin yeni biçimleri.',
      },
      {
        category: 'Fitness',
        meta: 'FITNESS · YAKINDA',
        title: 'Kas Gelişimini Anlamak: Mekanik Gerilim, Stimulus ve Progresif Yükleme',
        text: 'Kuvvet gelişimi ve adaptasyonun arkasındaki temel ilkeler için bir başlangıç rehberi.',
      },
    ],
  },

  contact: {
    eyebrow: '04 — İletişim',
    title: 'Bir fikrin mi var?<br><em>Konuşalım.</em>',
    email: 'merhaba@beklesofen.com',
  },
};
