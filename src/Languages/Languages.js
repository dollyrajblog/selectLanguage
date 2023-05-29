import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  en: {
    how: 'How do you want your breakfast today?',
    boiledEgg: 'Boiled water',
    softBoiledEgg: 'Soft-boiled pasta',
    choice: 'How to choose the breakfast',
  },
  hi: {
    how: 'आज आप अपना नाश्ता कैसा चाहते हैं?',
    boiledEgg: 'उबला हुआ पानी',
    softBoiledEgg: 'नरम उबला हुआ पास्ता',
    choice: 'नाश्ता कैसे चुनें',
  },
  it: {
    how: 'Come vuoi il tuo uovo oggi?',
    boiledEgg: 'Uovo sodo',
    softBoiledEgg: 'Uovo alla coque',
    choice: "Come scegliere l'uovo",
  },
});
export default strings;
