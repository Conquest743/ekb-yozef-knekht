import { baseUrl, Reveal, YandexMap, YandexReviews } from "./blocks";

const mapHref = "https://yandex.com/maps/org/yozef_knekht/87476087714/";
const phone = "+7 (343) 286-14-23";
const coords = "60.600658,56.839088";
const email = "books.ekb@gmail.com";

export default function App() {
  return <div className="site site-yozef" id="top">
    <div className="concept-note"><span>Книжный сайт-концепт</span><span>Независимый макет · Неофициальный концепт · не связан с бизнесом</span></div>
    <header className="masthead"><a className="wordmark" href="#top">Йозеф Кнехт</a><nav aria-label="Навигация"><a href="#catalogue">Лавка</a><a href="#reviews">Отзывы</a><a href="#location">Вход</a></nav><a className="call-button" href="tel:+73432861423">Позвонить</a></header>
    <main>
      <section className="hero"><div className="hero-copy"><h1>Йозеф Кнехт</h1><p className="lead">Книги об Урале, архитектуре и фотографии — и лавка, где можно искать не спеша.</p><a className="primary-action" href="tel:+73432861423">Спросить о книге</a><p className="category-note">Категория: Букинистический магазин · центр Екатеринбурга</p><a className="mail-link" href="mailto:books.ekb@gmail.com">books.ekb@gmail.com</a></div><figure className="hero-image"><img src={baseUrl + "hero.webp"} alt="Сгенерированный концепт букинистической лавки с книгами в тёплом подвальном пространстве; не фактическое фото" fetchPriority="high"/><figcaption>Вход в цоколь · книги внутри</figcaption></figure></section>
      <Reveal className="reveal-signature"><section className="index-list" id="catalogue"><div><h2>Найдите, попросите, подарите.</h2></div><dl><div><dt>01</dt><dd>Букинистические книги</dd></div><div><dt>02</dt><dd>Выкуп книг</dd></div><div><dt>03</dt><dd>Доставка</dd></div><div><dt>04</dt><dd>Подарочные сертификаты</dd></div></dl><p className="inventory-note">Наличие конкретного издания лучше уточнить по телефону или почте; сайт не показывает выдуманный остаток каталога.</p></section></Reveal>
      <Reveal><section className="reviews" id="reviews"><h2>Слова читателей и рейтинг в источнике.</h2><YandexReviews placeId="87476087714" title="Йозеф Кнехт" mapHref={mapHref}/></section></Reveal>
      <section className="location" id="location"><div className="location-copy"><h2>На 8 Марта, ниже уровня улицы.</h2><address>ул. 8 Марта, 7, цокольный этаж</address><dl><div><dt>Время</dt><dd>Справочник указывает 12:00–21:00 ежедневно; Яндекс Карты при проверке показывали открытие до 20:00 — график лучше уточнить.</dd></div><div><dt>Телефон</dt><dd><a href="tel:+73432861423">{phone}</a></dd></div><div><dt>Почта</dt><dd><a href="mailto:books.ekb@gmail.com">{email}</a></dd></div><div><dt>ВКонтакте</dt><dd><a href="https://vk.com/josephknecht" target="_blank" rel="noreferrer">Страница лавки</a></dd></div></dl></div><YandexMap coords={coords} title="Йозеф Кнехт, ул. 8 Марта, 7" mapHref={mapHref} zoom={16}/></section>
      <section className="closing"><p>Уточните наличие одной книги.</p><a className="primary-action" href="tel:+73432861423">{phone}</a></section>
    </main>
    <footer><span>Публичные сведения сверены 10.10.2026</span><span>Каталоги не выданы за собственный сайт; изображения созданы для макета.</span></footer>
  </div>;
}