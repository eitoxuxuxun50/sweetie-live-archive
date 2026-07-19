/* ============================================================
   動画データ:ここに1件ずつ追加していく
   id      : YouTubeのURLの v= 以降の文字列
   date    : YYYY-MM-DD
   title   : 表示タイトル
   tour    : ツアー名(単発なら "" でOK)
   venue   : ライブハウス名
   setlist : 曲名の配列(不明なら [])
   tweet   : 告知ツイートのURL(なければ "" か省略)
   flyer   : 告知画像のパス(例 "flyers/2026-05-10.jpg"。リポジトリに画像を置く)
   ============================================================ */
const VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    date: "2026-05-10",
    title: "ワンマンライブ「サンプル」",
    tour: "SAMPLE TOUR 2026",
    venue: "梅田Shangri-La",
    setlist: ["曲名A", "曲名B", "曲名C"],
    tweet: "https://twitter.com/jack/status/20",
    flyer: "flyers/sample.jpg"
  },
  {
    id: "jNQXAC9IVRw",
    date: "2026-03-21",
    title: "対バンイベント出演",
    tour: "",
    venue: "心斎橋Pangea",
    setlist: []
  }
];
