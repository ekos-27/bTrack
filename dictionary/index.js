
import en from './en';
import ru from './ru';

const dictionary = {
  en,
  ru
};

const translate = (lang, word) => dictionary[lang] && dictionary[lang][word] ? dictionary[lang][word] : word;

export default translate;
