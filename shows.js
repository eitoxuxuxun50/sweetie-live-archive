/* ============================================================
   ライブ予定データ:shows-admin.html で生成して丸ごと置き換える
   date / open / start / end / act / calhour / calmin / venue / title / price / onsale
   / posted / ticket / flyer / mapurl / address / floor / note
   ============================================================ */
const SHOWS = [
  {
    date: "2026-09-25",
    open: "18:30",
    start: "19:00",
    venue: "三国ヶ丘FUZZ",
    title: "姫野光太郎×三国ヶ丘FUZZ pre.",
    price: "2,000円+1D（600円）",
    onsale: "2026-07-08",
    setup: "かけおちごっこ",
    posted: "https://x.com/kakeochigokko/status/2074830207140442345?s=46",
    flyer: "flyers/2026-09-25.jpeg",
    mapurl: "https://maps.app.goo.gl/v29ihfTcMaKNE7a8A?g_st=ic",
    address: "大阪府堺市堺区向陵中町４丁４−３２",
    floor: "チボリビル1F",
    note: "KOTARO HIMENO & THE FUJIWARA BAND\nLiTT\nかけおちごっこ"
  },
  {
    date: "2026-09-20",
    open: "12:30",
    start: "",
    venue: "SPACE DOG!2nd",
    title: "風立つ、かもめ、あさひの献立2026",
    price: "0円+飲食チケット¥1000別途要",
    onsale: "2026-08-01",
    end: "18:00",
    setup: "アコースティック",
    posted: "https://x.com/kondate_fes/status/2079159817311314415?s=46",
    ticket: "https://www.mimimi-syokudou.com/kondate-fes/",
    flyer: "flyers/2026-09-20.jpeg",
    mapurl: "https://maps.app.goo.gl/4EeQRiR5SmCqpAE37?g_st=ic",
    address: "〒651-0095 兵庫県神戸市中央区旭通３丁目５−６",
    floor: "2F"
  },
  {
    date: "2026-08-22",
    open: "",
    start: "",
    venue: "瀧安寺前広場",
    title: "箕面の森の音楽会",
    price: "無料",
    onsale: "",
    act: "17:10",
    setup: "アコースティック",
    posted: "https://x.com/sweetie_genki/status/2076680746081927528?s=46",
    mapurl: "https://maps.app.goo.gl/kiPGkmndD8bFzZ7c7?g_st=ic",
    address: "大阪府箕面市箕面公園２−２３"
  },
  {
    date: "2026-07-31",
    open: "18:30",
    start: "19:00",
    venue: "BAR TONE8.0 +BASEMENT GALLERY",
    title: "おなじ街",
    price: "2,000円+1D",
    onsale: "2026-06-03",
    posted: "https://x.com/kakeochigokko/status/2062128111693816082?s=46",
    flyer: "flyers/2026-07-31.jpeg",
    mapurl: "https://maps.app.goo.gl/TkA6Vo78JyF9vZZu7?g_st=ic",
    address: "大阪府大阪市中央区南新町１丁目１−１",
    floor: "ＥＸＡ南新町ビル 1F",
    note: "RATFLAP\n川の石\nかけおちごっこ\nアタギケンスケ\n出店\nCham Cham\n無人古着家"
  },
  {
    date: "2026-06-20",
    open: "15:30",
    start: "16:00",
    venue: "八王子Match Vox",
    title: "やまぴーpre.「アイス将軍vol.15」",
    price: "3,500円",
    onsale: "2026-04-26",
    act: "16:40",
    posted: "https://x.com/sweetie_genki/status/2048060985173586291?s=46",
    mapurl: "https://maps.app.goo.gl/KUcBZCRbboBo5z9a7?g_st=ic",
    address: "〒192-0084 東京都八王子市三崎町２−７",
    floor: "ヨーロービル B1F",
    note: "閃光少女\nバイバイ・ニーチェ\n寺田寛明\nかいじゅうと花束\nスウィーティ\nand more！"
  },
  {
    date: "2026-06-04",
    open: "18:30",
    start: "19:00",
    venue: "堺FANDANGO",
    title: "Etranger “Kishibe” Release TOUR 2026",
    price: "前売 2,500円 / 当日 3,000円",
    onsale: "2026-07-01",
    setup: "バンドセット",
    posted: "https://x.com/fandango_sakai/status/2040303578435530936?s=46",
    note: "Etrnger\nメガマサヒデ\nガリザベン\n秘密のコペカチータ\nスウィーティ (band set)"
  }
];
