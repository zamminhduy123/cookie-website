import { useTranslation } from 'react-i18next';

export default function LangSwitch () {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  console.log("Current language:", currentLang);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {if (currentLang != 'en') i18n.changeLanguage('en')}}
        className={`text-sm cursor-pointer ${currentLang === 'en' ? 'font-bold text-crimson underline' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => {if (currentLang != 'vn') i18n.changeLanguage('vn')}}
        className={`text-sm cursor-pointer ${currentLang === 'vn' ? 'font-bold text-crimson underline' : ''}`}
      >
        VN
      </button>
    </div>
  );
}