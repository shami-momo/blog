import type { ImageMetadata } from 'astro';

export const photos = [
  ['cos_1.webp',          'Tokyo, Japan',              'C106에서 촬영한 코스어'], //가로
  
  ['chisa.webp',          'Tokyo, Japan',              'C106에서 촬영한 코스어'], //세로
  ['skogafoss.webp',      'Skogafoss, Iceland',        '이끼 낀 절벽 사이의 폭포'], //가로
  ['shomyo.webp',         'Toyama, Japan',             '풀이 덮인 바위 사이를 내려오는 쇼묘폭포'], //세로
  
  ['cos_3.webp',          'Tokyo, Japan',              'C107에서 촬영한 코스어'], //가로
  
  ['eiger.webp',          'Bernese Alps, Switzerland', '초원을 달리는 산악 열차와 아이거'], //세로
  ['biei.webp',           'Hokkaido, Japan',           '푸른 강과 눈 덮인 바위'], //세로
  ['seljalandsfoss.webp', 'Seljalandsfoss, Iceland',   '절벽에서 떨어지는 여러 폭포'], //가로
  ['rome.webp',           'Vatican City',              '성당 돔의 창으로 들어오는 빛'], //세로
  ['positano.webp',       'Positano, Italy',           '절벽의 건물과 푸른 바다'], //세로
  ['fuji.webp',            'Yamanashi, Japan',          '후지산을 배경으로 한 일주 사진'], //가로
  
  ['oigawa.webp',         'Shizuoka, Japan',           '푸른 강 위를 지나는 철길'], //가로
  
  ['kawasaki.webp',       'Kanagawa, Japan',           '입에서 불을 뿜는 사람'], //세로
  ['nikko.webp',          'Tochigi, Japan',            '눈 내리는 닛코의 폭포'], //세로
  ['seto.webp',           'Ehime, Japan',              '사다미사키 등대와 푸른 하늘'], //가로
  ['airplane.webp',       'Okinawa, Japan',            '푸른 하늘을 날아가는 일본 트랜스오션 항공기'], //가로
  ['bernesealps.webp',    'Bernese Alps, Switzerland', '푸른 하늘 아래의 설산'], //가로
  ['nagasaki.webp',       'Nagasaki, Japan',           '산과 호수의 흑백 풍경'], //세로
] as const;

const thumbnails = import.meta.glob<{ default: ImageMetadata }>('../assets/images/photos/thumbs/*.webp', { eager: true });
const fullImages = import.meta.glob<{ default: ImageMetadata }>('../assets/images/photos/full/*.webp', { eager: true });

export function photoAssets(file: string) {
  const thumbnail = thumbnails[`../assets/images/photos/thumbs/${file}`]?.default;
  const full = fullImages[`../assets/images/photos/full/${file}`]?.default;
  if (!thumbnail || !full) throw new Error(`사진 파일을 찾을 수 없습니다: ${file}`);
  return { thumbnail, full };
}
