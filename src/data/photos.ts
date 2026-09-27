import type { ImageMetadata } from 'astro';

export const photos = [
  ['cos_3.webp', 'Tokyo, Japan · 2026', 'C107에서 촬영한 코스어'],
  ['shomyo.webp', 'Toyama, Japan · 2026', '풀이 덮인 바위 사이를 내려오는 쇼묘폭포'],
  ['seto.webp', 'Ehime, Japan · 2026', '사다미사키 등대와 푸른 하늘'],
  ['fuji.webp', 'Yamanashi, Japan · 2026', '후지산을 배경으로 한 일주 사진'],
  ['cos_1.webp', 'Tokyo, Japan · 2026', 'C106에서 촬영한 코스어'],
  ['biei.webp', 'Hokkaido, Japan · 2026', '푸른 강과 눈 덮인 바위'],
  ['nikko.webp', 'Tochigi, Japan · 2026', '눈 내리는 닛코의 폭포'],
  ['positano.webp', 'Positano, Italy · 2025', '절벽의 건물과 푸른 바다'],
  ['rome.webp', 'Vatican City · 2025', '성당 돔의 창으로 들어오는 빛'],
  ['bernesealps.webp', 'Bernese Alps, Switzerland · 2025', '푸른 하늘 아래의 설산'],
  ['eiger.webp', 'Bernese Alps, Switzerland · 2025', '초원을 달리는 산악 열차와 아이거'],
  ['skogafoss.webp', 'Skogafoss, Iceland · 2025', '이끼 낀 절벽 사이의 폭포'],
  ['seljalandsfoss.webp', 'Seljalandsfoss, Iceland · 2025', '절벽에서 떨어지는 여러 폭포'],
  ['nagasaki.webp', 'Nagasaki, Japan · 2024', '산과 호수의 흑백 풍경'],
  ['oigawa.webp', 'Shizuoka, Japan · 2024', '푸른 강 위를 지나는 철길'],
] as const;

const thumbnails = import.meta.glob<{ default: ImageMetadata }>('../assets/images/photos/thumbs/*.webp', { eager: true });
const fullImages = import.meta.glob<{ default: ImageMetadata }>('../assets/images/photos/full/*.webp', { eager: true });

export function photoAssets(file: string) {
  const thumbnail = thumbnails[`../assets/images/photos/thumbs/${file}`]?.default;
  const full = fullImages[`../assets/images/photos/full/${file}`]?.default;
  if (!thumbnail || !full) throw new Error(`사진 파일을 찾을 수 없습니다: ${file}`);
  return { thumbnail, full };
}
