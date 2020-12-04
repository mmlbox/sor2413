const fs = require('fs');
const mgsc = require('mgsc-js');

const entries = [
  { id: "0", mml: "so88e055", category: "", title: "ファンファーレ"},
  { id: "1", mml: "so88e000", category: "", title: "オープニング" },
  { id: "2", mml: "so88e001", category: "", title: "城「ここで逢えるね」" },
  { id: "3", mml: "so88e002", category: "", title: "町「ペンタウァI」" },
  { id: "4", mml: "so88e003", category: "", title: "町「ペンタウァII」" },
  { id: "5", mml: "so88e004", category: "消えた王様の杖", title: "ダンジョン" },
  { id: "6", mml: "so88e005", category: "消えた王様の杖", title: "ヒドラ" },
  { id: "7", mml: "so88e006", category: "消えた王様の杖", title: "生還" },
  { id: "8", mml: "so88e056", category: "", title: "トラベラーズ・イン" },
  { id: "9", mml: "so88e007", category: "失われたタリスマン", title: "森" },
  { id: "10", mml: "so88e008", category: "失われたタリスマン", title: "地下ダンジョン" },
  { id: "11", mml: "so88e009", category: "失われたタリスマン", title: "神官デヒテル" },
  { id: "12", mml: "so88e010", category: "失われたタリスマン", title: "サンド・マリボー" },
  { id: "13", mml: "so88e011", category: "ルシフェルの水門", title: "地下ダンジョン" },
  { id: "14", mml: "so88e012", category: "ルシフェルの水門", title: "クラーケン" },
  { id: "15", mml: "so88e013", category: "ルシフェルの水門", title: "ブラッディ・リバー" },
  { id: "16", mml: "so88e014", category: "呪われたオアシス", title: "砂漠" },
  { id: "17", mml: "so88e015", category: "呪われたオアシス", title: "砂の城" },
  { id: "18", mml: "so88e016", category: "呪われたオアシス", title: "ルワンとゴールド・ドラゴン" },
  { id: "19", mml: "so88e017", category: "盗賊たちの塔", title: "塔" },
  { id: "20", mml: "so88e018", category: "盗賊たちの塔", title: "地底" },
  { id: "21", mml: "so88e019", category: "盗賊たちの塔", title: "屋上" },
  { id: "22", mml: "so88e021", category: "盗賊たちの塔", title: "メジャー・デーモン" },
  { id: "23", mml: "so88e020", category: "盗賊たちの塔", title: "シャドー・ドラゴン" },
  { id: "24", mml: "so88e022", category: "盗賊たちの塔", title: "封印" },
  { id: "25", mml: "so88e023", category: "暗き沼の魔法使い", title: "暗き沼" },
  { id: "26", mml: "so88e024", category: "暗き沼の魔法使い", title: "レッド・ドラゴン" },
  { id: "27", mml: "so88e025", category: "ロマンシア", title: "ロマンシア王国" },
  { id: "28", mml: "so88e026", category: "ロマンシア", title: "ロマンシア城" },
  { id: "29", mml: "so88e027", category: "ロマンシア", title: "アゾルバ王国" },
  { id: "30", mml: "so88e028", category: "ロマンシア", title: "ヴァイデス" },
  { id: "31", mml: "so88e029", category: "紅玉の謎", title: "森" },
  { id: "32", mml: "so88e030", category: "紅玉の謎", title: "モス・ジャイアント" },
  { id: "33", mml: "so88e031", category: "紅玉の謎", title: "平和な森" },
  { id: "34", mml: "so88e032", category: "暗黒の魔道士", title: "ダンジョン" },
  { id: "35", mml: "so88e034", category: "暗黒の魔道士", title: "ダンジョンII" },
  { id: "36", mml: "so88e035", category: "暗黒の魔道士", title: "ゲディス" },
  { id: "37", mml: "so88e033", category: "暗黒の魔道士", title: "ブルー・ドラゴン" },
  { id: "38", mml: "so88e036", category: "呪われたクイーンマリー号", title: "船内" },
  { id: "39", mml: "so88e037", category: "呪われたクイーンマリー号", title: "上陸後" },
  { id: "40", mml: "so88e038", category: "呪われたクイーンマリー号", title: "アーク・デーモン" },
  { id: "41", mml: "so88e039", category: "天の神々たち", title: "村" },
  { id: "42", mml: "so88e040", category: "天の神々たち", title: "コンバット・シーン" },
  { id: "43", mml: "so88e041", category: "天の神々たち", title: "天上界" },
  { id: "44", mml: "so88e042", category: "天の神々たち", title: "竪琴" },
  { id: "45", mml: "so88e043", category: "天の神々たち", title: "エビル＝シャーマン" },
  { id: "46", mml: "so88e044", category: "氷の洞窟", title: "洞窟I" },
  { id: "47", mml: "so88e045", category: "氷の洞窟", title: "洞窟II" },
  { id: "48", mml: "so88e046", category: "氷の洞窟", title: "エキム" },
  { id: "49", mml: "so88e047", category: "メデューサの首", title: "森" },
  { id: "50", mml: "so88e048", category: "メデューサの首", title: "村" },
  { id: "51", mml: "so88e049", category: "メデューサの首", title: "メデューサ" },
  { id: "52", mml: "so88e050", category: "囚われた魔法使い", title: "地下要塞" },
  { id: "53", mml: "so88e051", category: "囚われた魔法使い", title: "ファイヤー・エレメント" },
  { id: "54", mml: "so88e052", category: "不老長寿の水", title: "生きている洞窟" },
  { id: "55", mml: "so88e053", category: "不老長寿の水", title: "動く心臓" },
  { id: "56", mml: "so88e054", category: "不老長寿の水", title: "ダブル＝デビルス" },
  { id: "57", mml: "so88e057", category: "", title: "キング・ドラゴン" },
  { id: "58", mml: "so88e058", category: "", title: "キング・ドラゴン デス" },
  { id: "59", mml: "so88e059", category: "", title: "エンディングI" },
  { id: "60", mml: "so88e060", category: "", title: "エンディングII" },
  { id: "67", mml: "so88e067", category: "Utility", title: "Beautiful Day" },
];

mgsc.initialize().then(() => {
  for (const entry of entries) {
    const inp = `mml/${entry.mml}.mml`;
    const out = (`00${entry.id}`).slice(-3) + ".mgs";

    const mml = fs.readFileSync(inp, 'utf-8');
    const res = mgsc.compile(mml);
    if (!res.success) {
      console.log(res.errorInfo.message + ' in ' + res.errorInfo.lineNumber);
      console.log('>> ' + res.errorInfo.lineText + '\n');
      process.exit(1);
    }
    fs.writeFileSync(`mgs/en/soe${out}`, new Buffer.from(res.mgs), 'binary');

    const jtitle = (entry.category !== "" ? `${entry.category} - ` : "") + entry.title;
    const jmml = mml.replace(/^#title.*$/m, `#title { "${jtitle}" }`);
    const jres = mgsc.compile(jmml);
    fs.writeFileSync(`mgs/ja/soj${out}`, new Buffer.from(jres.mgs), 'binary');

    console.log(`mgsc ${inp} ${out} # ${jtitle}`);
  }
});