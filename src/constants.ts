export interface ScoreAsset {
  id: string;
  name: string;
  musicXmlUrl: string;
  audioUrl: string;
}

export interface Performance {
  id: number;
  title: string;
  videoComparison: {
    oursHybrid: string;
    oursOnline: string;
    logicPro: string;
  };
  scoreComparison: {
    oursHybrid: ScoreAsset;
    oursOnline: ScoreAsset;
    liuEtAl: ScoreAsset;
    beyerEtAl: ScoreAsset;
  };
}

const MOCK_XML = `<?xml version="1.0" encoding="UTF-8"?><score-partwise version="3.1"><part-list><score-part id="P1"><part-name>Music</part-name></score-part></part-list><part id="P1"><measure number="1"><attributes><divisions>1</divisions><key><fifths>0</fifths></key><time><beats>4</beats><beat-type>4</beat-type></time><clef><sign>G</sign><line>2</line></clef></attributes><note><pitch><step>C</step><octave>4</octave></pitch><duration>4</duration><type>whole</type></note></measure></part></score-partwise>`;
export const DEFAULT_XML_DATA_URI = `data:application/vnd.recordare.musicxml+xml;base64,${btoa(MOCK_XML)}`;

const PIECE_NAMES = [
  'Improvisation',
  'Elysium of the Blue Sky',
  'Eroded Valley',
  'French Suite No.3 in B minor, Allemande',
  'TSUYOGARU OTONANO Secret Labo',
  'Connect',
  'Counterattack',
  'Senbonzakura',
  'Pixel Time',
]

export const PERFORMANCES: Performance[] = Array.from({ length: 9 }, (_, i) => {
  const exampleId = String(i + 1).padStart(2, '0');
  return {
    id: i + 1,
    title: PIECE_NAMES[i],
    videoComparison: {
      oursHybrid: `${import.meta.env.BASE_URL}hybrid/${exampleId}.mov`,
      oursOnline: 'https://www.w3schools.com/html/mov_bbb.mp4',
      logicPro: `${import.meta.env.BASE_URL}logic/${exampleId}.mov`,
    },
    scoreComparison: {
      oursHybrid: { id: `h-${i}`, name: 'Ours (Hybrid)', musicXmlUrl: `${import.meta.env.BASE_URL}hybrid/${exampleId}.musicxml`, audioUrl: `${import.meta.env.BASE_URL}hybrid/${exampleId}.mp3` },
      oursOnline: { id: `o-${i}`, name: 'Ours (Online)', musicXmlUrl: `${import.meta.env.BASE_URL}online/${exampleId}.musicxml`, audioUrl: `${import.meta.env.BASE_URL}online/${exampleId}.mp3` },
      liuEtAl: { id: `l-${i}`, name: 'Liu et al.', musicXmlUrl: `${import.meta.env.BASE_URL}liu_et_al/${exampleId}.musicxml`, audioUrl: `${import.meta.env.BASE_URL}liu_et_al/${exampleId}.mp3` },
      beyerEtAl: { id: `b-${i}`, name: 'Beyer et al.', musicXmlUrl: `${import.meta.env.BASE_URL}beyer_et_al/${exampleId}.musicxml`, audioUrl: `${import.meta.env.BASE_URL}beyer_et_al/${exampleId}.mp3` },
    },
  };
});
