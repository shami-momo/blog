# Hojun Yoo — Astro blog

기존 `shami-momo.github.io`의 디자인과 URL 구조를 이어받되, Astro의 콘텐츠 컬렉션과 정적 생성을 중심으로 다시 만든 블로그입니다.

## 로컬 실행

Node.js 22.12 이상이 필요합니다.

```bash
npm install
npm run dev
```

프로덕션 빌드는 `npm run build`, 빌드 결과 확인은 `npm run preview`를 사용합니다.

## 기존 글과 이미지 옮기기

이 저장소에는 의도적으로 기존 글과 사진을 포함하지 않았습니다. 아래 두 경로에 그대로 복사하면 됩니다.

```text
기존 _posts/*.md          → src/content/posts/*.md
기존 assets/images/**/*  → public/assets/images/**/*
```

기존 글 파일은 이름과 본문을 바꿀 필요가 없습니다.

- `2026-04-22-kepler.md`는 `/posts/kepler/`로 생성됩니다.
- `layout: post`처럼 Astro에서 쓰지 않는 기존 frontmatter도 허용합니다.
- `{{ '/assets/...' | relative_url }}` 형식의 Jekyll 이미지·링크 경로는 상세 페이지에서 자동으로 `/assets/...`로 바꿉니다.
- 기존 MathJax 매크로(`\odv`, `\oddv`, `\ehat` 등)를 그대로 지원합니다.
- 글 목록, 검색, 이전·다음 글, RSS가 빌드할 때 자동 생성됩니다.

사진 갤러리는 `public/assets/images/photos/thumbs`와 `public/assets/images/photos/full`을 사용합니다. 기존 사진 메타데이터는 `src/data/photos.ts`에 옮겨 두었으므로 이미지 폴더만 복사하면 갤러리가 표시됩니다.

## 글 작성 형식

```md
---
title: "글 제목"
date: 2026-09-27
tags: [궤도역학, 우주추진]
description: "선택 사항인 검색·공유 설명"
image: "/assets/images/posts/example/cover.webp"
draft: false
---

본문
```

## Vercel 배포

Vercel에서 이 저장소를 연결하면 Astro를 자동 감지합니다.

- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: 22 이상

기본 canonical URL은 `https://shami-momo.github.io`입니다. 다른 도메인을 사용할 때는 Vercel 환경 변수 `SITE`에 전체 URL을 설정하세요.

댓글은 새 `blog` 저장소에서 GitHub Discussions와 giscus를 설정한 뒤 추가하면 됩니다. 기존 저장소의 giscus ID는 새 저장소에서 작동하지 않아 이번 마이그레이션에서는 제외했습니다.
