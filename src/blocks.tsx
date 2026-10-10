import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = { children: ReactNode; className?: string };

export function Reveal({ children, className = "" }: RevealProps) {
  const node = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = node.current;
    if (!element || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={node} className={"reveal " + className}>{children}</div>;
}

type ReviewsProps = { placeId: string; title: string; mapHref: string; className?: string };

export function YandexReviews({ placeId, title, mapHref, className = "" }: ReviewsProps) {
  return <div className={"reviews-embed " + className}>
    <iframe
      title={"Отзывы о " + title + " на Яндекс Картах"}
      src={"https://yandex.ru/maps-reviews-widget/" + placeId + "?comments"}
      loading="lazy"
    />
    <a className="source-link" href={mapHref} target="_blank" rel="noreferrer">Все отзывы и карточка на Яндекс Картах</a>
  </div>;
}

type MapProps = { coords: string; title: string; mapHref: string; zoom?: number };

export function YandexMap({ coords, title, mapHref, zoom = 16 }: MapProps) {
  const encodedPoint = coords.split(",").join("%2C");
  const src = "https://yandex.ru/map-widget/v1/?ll=" + encodedPoint + "&z=" + zoom + "&pt=" + encodedPoint + "%2Cpm2rdm&lang=ru_RU";
  return <div className="map-embed">
    <iframe title={"Карта: " + title} src={src} loading="lazy" />
    <a className="source-link" href={mapHref} target="_blank" rel="noreferrer">Открыть точку в Яндекс Картах</a>
  </div>;
}

export const baseUrl = import.meta.env.BASE_URL;
