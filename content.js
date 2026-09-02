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
    image: {
      src: 'assets/images/profile.jpg',
      alt: 'Bek Lesofen, kitaplarla çevrili bir çalışma odasında portre pozunda',
    },
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
        slug: 'osmanlidan-cumhuriyete-kurumlarin-surekliligi',
        url: 'yazilar/osmanlidan-cumhuriyete-kurumlarin-surekliligi.html',
        category: 'Tarih',
        date: '2 Eylül 2026',
        readingTime: '6 dk okuma',
        meta: 'TARİH · 6 DK OKUMA',
        title: "Geçmişin Mirası: Osmanlı'dan Cumhuriyet'e Kurumların Sürekliliği",
        text: 'Kurumları ve dönüşümü, kopuşlardan çok süreklilikler üzerinden okumaya dair bir not.',
        featured: true,
        image: {
          src: 'assets/images/writing.jpg',
          alt: 'Bek Lesofen, kitaplarla çevrili çalışma odasında not alırken',
        },
        article: {
          intro: 'Bir dönemi anlamak için yalnızca yeni olanı değil, eski düzenin hangi parçalarının yaşamaya devam ettiğini de görmek gerekir.',
          sections: [
            { heading: 'Kopuşun içindeki devamlılık', paragraphs: ['Tarihsel değişim çoğu zaman keskin bir başlangıç ve bitiş hikâyesi gibi anlatılır. Oysa devlet yapıları, idari alışkanlıklar ve toplumsal ilişkiler bir gecede ortadan kalkmaz.', 'Osmanlı’dan Cumhuriyet’e geçişi okurken de yeni rejimin kurumlarını, devraldığı deneyimlerden bağımsız düşünmek eksik kalır.'] },
            { heading: 'Kurumlar neden önemlidir?', paragraphs: ['Kurumlar yalnızca binalar ya da resmi kurallar değildir. İnsanların nasıl karar verdiğini, kaynakları nasıl dağıttığını ve sorunlara hangi araçlarla yaklaştığını belirleyen kalıplardır.', 'Bu kalıpların izini sürmek, siyasi değişimlerin gündelik hayata nasıl yansıdığını daha sakin ve derinlikli biçimde görmeye yardım eder.'] },
            { heading: 'Geçmişle konuşmak', paragraphs: ['Süreklilik fikri, geçmişi romantikleştirmek anlamına gelmez. Tam tersine, hangi alışkanlıkların işe yaradığını ve hangilerinin yeni koşullarda sorun ürettiğini ayırt etmeyi sağlar.', 'Tarih burada yalnızca geçmişe bakmak değil; bugünün kurumlarını ve reflekslerini daha iyi anlamak için bir düşünme aracıdır.'] },
          ],
        },
      },
      {
        slug: 'irade-disiplin-ve-insan',
        url: 'yazilar/irade-disiplin-ve-insan.html',
        category: 'Felsefe',
        date: '2 Eylül 2026',
        readingTime: '5 dk okuma',
        meta: 'FELSEFE · 5 DK OKUMA',
        title: 'İrade, Disiplin ve İnsan: Zorluğu Neden Seçeriz?',
        text: 'Zorlukla kurduğumuz ilişkinin irade, anlam ve disiplinle kesiştiği yerler.',
        image: { src: '', alt: 'Felsefe yazısı için eklenecek görsel' },
        article: {
          intro: 'İnsan bazen konforu değil, bilinçli biçimde zorluğu seçer. Bu seçim, yalnızca sonuçlara değil, kim olmak istediğimize de ilişkindir.',
          sections: [
            { heading: 'Zorluğun anlamı', paragraphs: ['Zorluk tek başına erdem değildir. Anlamlı olan, kişinin hangi amaç için ve nasıl bir bedel ödeyerek zorlandığıdır.', 'Bir hedefe bağlanmak, dikkatini tekrar tekrar o hedefe çevirmeyi gerektirir. Disiplinin ilk yönü de tam burada ortaya çıkar.'] },
            { heading: 'İrade bir anlık güç mü?', paragraphs: ['İrade çoğu zaman tek seferlik, güçlü bir karar gibi düşünülür. Oysa günlük hayatta daha çok küçük seçimlerin toplamıdır.', 'Çevreyi düzenlemek, başlangıcı kolaylaştırmak ve ritim kurmak; iradeyi yalnızca duygusal bir kaynak olmaktan çıkarır.'] },
            { heading: 'Kendini kurmak', paragraphs: ['Zorluğu seçmek, acıyı yüceltmek değildir. Kişinin değer verdiği bir yaşam biçimiyle uyumlu eylemler üretmesidir.', 'Bu yüzden disiplin, yalnızca performansın değil, insanın kendisiyle kurduğu ilişkinin de bir parçasıdır.'] },
          ],
        },
      },
      {
        slug: 'gorezetim-toplumundan-algoritmik-topluma',
        url: 'yazilar/gorezetim-toplumundan-algoritmik-topluma.html',
        category: 'Sosyoloji',
        date: '2 Eylül 2026',
        readingTime: '7 dk okuma',
        meta: 'SOSYOLOJİ · 7 DK OKUMA',
        title: 'Gözetim Toplumundan Algoritmik Topluma',
        text: 'Görünürlük, veri ve algoritmaların gündelik davranışlarımızı nasıl biçimlendirdiği üzerine.',
        image: { src: '', alt: 'Sosyoloji yazısı için eklenecek görsel' },
        article: {
          intro: 'Dijital sistemler bizi yalnızca kaydetmiyor; hangi bilgiyi göreceğimizi ve birbirimizle nasıl karşılaşacağımızı da düzenliyor.',
          sections: [
            { heading: 'Görünür olmanın yeni biçimi', paragraphs: ['Gözetim fikri eskiden daha çok izlenmekle ilişkilendirilirdi. Bugün ise kullanıcılar görünür olmak için gönüllü olarak veri üretiyor.', 'Bu veri, yalnızca kişisel bir iz değil; platformların bizi sınıflandırmak ve tahmin etmek için kullandığı ham maddedir.'] },
            { heading: 'Algoritma bir tercih yapar', paragraphs: ['Algoritmalar nötr bir akış sunmaz. Bazı içerikleri öne çıkarır, bazılarını görünmez kılar ve dikkatimizin yönünü etkiler.', 'Bu seçimin ardında teknik ölçütlerin yanı sıra ticari hedefler, etkileşim beklentileri ve tasarım kararları bulunur.'] },
            { heading: 'Düşünmek için mesafe', paragraphs: ['Algoritmik dünyada eleştirel mesafe, teknolojiden kaçmak anlamına gelmez. Hangi sistemin bizi nasıl yönlendirdiğini fark etmeye çalışmaktır.', 'Bu farkındalık, dijital araçlarla daha bilinçli bir ilişki kurmanın başlangıcı olabilir.'] },
          ],
        },
      },
      {
        slug: 'yapay-zeka-caginda-bilgiye-ulasmak',
        url: 'yazilar/yapay-zeka-caginda-bilgiye-ulasmak.html',
        category: 'Teknoloji',
        date: '2 Eylül 2026',
        readingTime: '5 dk okuma',
        meta: 'TEKNOLOJİ · 5 DK OKUMA',
        title: 'Yapay Zekâ Çağında Bilgiye Ulaşmak Değişti mi?',
        text: 'Bilgi bolluğu içinde doğrulama, seçme ve düşünmenin yeni biçimleri.',
        image: { src: '', alt: 'Yapay zekâ yazısı için eklenecek görsel' },
        article: {
          intro: 'Bilgiye erişim hızlandı; ancak bilginin güvenilirliğini, bağlamını ve sınırlarını değerlendirme ihtiyacı da büyüdü.',
          sections: [
            { heading: 'Cevaba ulaşmak kolaylaştı', paragraphs: ['Arama motorları ve üretken yapay zekâ araçları, bir soruya ilk yanıtı saniyeler içinde verebiliyor. Bu büyük bir kolaylık.', 'Fakat ilk yanıtın ikna edici olması, onun her zaman doğru veya yeterli olduğu anlamına gelmez.'] },
            { heading: 'Doğrulama yeni bir temel beceri', paragraphs: ['Kaynağa dönmek, farklı görüşleri karşılaştırmak ve bir iddianın hangi koşullarda geçerli olduğunu sormak artık daha değerli.', 'Araçlar araştırmayı hızlandırabilir; ama muhakemenin yerini tutmaz.'] },
            { heading: 'Bilgiyle ilişki kurmak', paragraphs: ['Asıl değişim, bilgi tüketmekten bilgiyle çalışmaya geçişte yatıyor. Soruyu iyi kurmak, cevabı sınamak ve kendi notunu üretmek daha merkezi hale geliyor.', 'Yapay zekâ çağında bilgiyi değerli kılan şey, ona erişmekten çok onunla ne yaptığımız olabilir.'] },
          ],
        },
      },
      {
        slug: 'kas-gelisimi-mekanik-gerilim',
        url: 'yazilar/kas-gelisimi-mekanik-gerilim.html',
        category: 'Fitness',
        date: '2 Eylül 2026',
        readingTime: '8 dk okuma',
        meta: 'FITNESS · 8 DK OKUMA',
        title: 'Kas Gelişimini Anlamak: Mekanik Gerilim, Stimulus ve Progresif Yükleme',
        text: 'Kuvvet gelişimi ve adaptasyonun arkasındaki temel ilkeler için bir başlangıç rehberi.',
        image: { src: '', alt: 'Kas gelişimi yazısı için eklenecek görsel' },
        article: {
          intro: 'Kas gelişimini tek bir egzersize ya da tek bir tekrar aralığına indirmek yerine, vücudun yüklenmeye nasıl uyum sağladığını anlamak gerekir.',
          sections: [
            { heading: 'Mekanik gerilim ne anlatır?', paragraphs: ['Kas dokusu, yeterli kuvvet ürettiği ve anlamlı bir yük altında çalıştığı zaman uyaran alır. Mekanik gerilim bu sürecin önemli parçalarından biridir.', 'Hareketin kontrolü, uygun hareket açıklığı ve hedef kasa yük aktarımı; kullanılan kilodan bağımsız olarak önem taşır.'] },
            { heading: 'Stimulus ve toparlanma', paragraphs: ['Antrenman, adaptasyonun kendisi değil; adaptasyon için verilen uyarıdır. Bu nedenle uyku, beslenme ve toparlanma programın ayrılmaz parçasıdır.', 'Yeterli uyaran vermek ile gereksiz yorgunluk oluşturmak arasındaki denge kişiye ve hedefe göre değişir.'] },
            { heading: 'Progresif yükleme', paragraphs: ['Zaman içinde tekrar, ağırlık, set sayısı ya da teknik kalite gibi değişkenlerde ilerleme aramak progresif yüklemenin özüdür.', 'Sürdürülebilir ilerleme, her antrenmanda rekor kırmaktan çok; düzenli takip ve uzun vadeli uyumla ilgilidir.'] },
          ],
        },
      },
    ],
  },

  contact: {
    eyebrow: '04 — İletişim',
    title: 'Bir fikrin mi var?<br><em>Konuşalım.</em>',
    email: 'merhaba@beklesofen.com',
  },
};
