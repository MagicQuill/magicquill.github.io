export interface ScoreAsset {
  id: string;
  name: string;
  musicXmlUrl: string;
  audioUrl: string;
}

export interface Performance {
  id: number;
  title: string;
  description: string;
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

const DESCRIPTIONS = [
  "Improvised in the key of Ab major in 4/4 meter, this performance employs rubato and expressive timing deviations to convey emotional nuance, demonstrating the capability of neural-network based models in transcribing expressive performances.",
  "This piece is composed by Yasunori Mitsuda in the key of C minor in 3/4 meter. The performance employs rubato and expressive timing deviations to emphasize key dramatic moments.",
  "Composed by Falcom Sound Team jdk and arranged by the author in F minor with 6/8 meter, this example illustrates the model's ability to handle an expressive performance in a compound meter, following the previous examples in 4/4 and 3/4.",
  "Composed by J.S. Bach, this piece does not appear in the training, validation, or test data, yet it represents a musical style familiar to the models. While our hybrid model fails to correctly identify the 4/4 meter, it successfully preserves the relative inter-onset interval ratios, as demonstrated in the transcribed score playback.",
  'Composed by Famishin in D minor (4/4) and arranged by the author, this piece challenges all the models with its swing rhythm. As an out-of-distribution style, it tests the limits of the models\' ability to transcribe non-straight rhythmic patterns. Interestingly, our hybrid model interprets the piece in 6/8, while Beyer et al.\'s end-to-end model treats the notes as dotted sixteenths.',
  'Composed by Shō Watanabe and arranged by marasy, this piece challenges all the models with sudden key and tempo change, alongside complex, out-of-distribution rhythms.',
  'Composed by Kenji Hiramatsu and arranged by the author, this piece again challenges the models with complex, out-of-distribution rhythms, alongside the added difficulty of fast running notes and piano tremolos.',
  'Composed by Kurousa-P and arranged by marasy, this piece contains highly complex rhythms that all models fail to capture accurately at the introduction of the first verse.',
  'Composed by Mitsukiyo and arranged by the author, this swing piece features extreme rhythmic complexity that causes all models to fail significantly in their transcriptions.',





]

export const PERFORMANCES: Performance[] = Array.from({ length: 9 }, (_, i) => {
  const exampleId = String(i + 1).padStart(2, '0');
  return {
    id: i + 1,
    title: PIECE_NAMES[i],
    description: DESCRIPTIONS[i],
    videoComparison: {
      oursHybrid: `hybrid/${exampleId}.mov`,
      oursOnline: 'https://www.w3schools.com/html/mov_bbb.mp4',
      logicPro: `logic/${exampleId}.mov`,
    },
    scoreComparison: {
      oursHybrid: { id: `h-${i}`, name: 'Ours (Hybrid)', musicXmlUrl: `/hybrid/${exampleId}.musicxml`, audioUrl: `/hybrid/${exampleId}.mp3` },
      oursOnline: { id: `o-${i}`, name: 'Ours (Online)', musicXmlUrl: `/online/${exampleId}.musicxml`, audioUrl: `/online/${exampleId}.mp3` },
      liuEtAl: { id: `l-${i}`, name: 'Liu et al.', musicXmlUrl: `/liu_et_al/${exampleId}.musicxml`, audioUrl: `/liu_et_al/${exampleId}.mp3` },
      beyerEtAl: { id: `b-${i}`, name: 'Beyer et al.', musicXmlUrl: `/beyer_et_al/${exampleId}.musicxml`, audioUrl: `/beyer_et_al/${exampleId}.mp3` },
    },
  };
});
