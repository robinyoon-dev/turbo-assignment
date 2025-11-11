# Turbo Assignment

Turborepo를 활용한 모노레포 프로젝트입니다. Next.js 15 기반의 웹 애플리케이션과 Storybook을 포함하고 있습니다.

## 🚀 배포 URL

**프로덕션**: [https://turbo-assignment.vercel.app/](https://turbo-assignment.vercel.app/)

## 📦 프로젝트 구조

```
my-turborepo/
├── apps/
│   ├── web/                          # Next.js 15 메인 애플리케이션
│   │   ├── app/
│   │   │   ├── page.tsx              # 메인 페이지 (지원자 소개)
│   │   │   ├── result/               # 포토 뷰어 페이지
│   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └──  MainComponent.tsx
│   │   │   │  
│   │   │   ├── not-found.tsx         # 404 페이지
│   │   │   ├── layout.tsx            # 루트 레이아웃
│   │   │   └── globals.css           # 글로벌 스타일 (Tailwind CSS v4)
│   │   ├── api/
│   │   │   └── photo/                # 사진 API
│   │   │       └── photo.api.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── Header.tsx        # 공통 헤더 컴포넌트
│   │   │   │   └── result/
│   │   │   │       ├── PhotoImage.tsx
│   │   │   │       ├── PhotoInfo.tsx
│   │   │   │       ├──MainSkeleton.tsx
│   │   │   │       └──PreviousButton.tsx
│   │   │   ├── constants/
│   │   │   │   ├── api.ts
│   │   │   │   └── info.ts
│   │   │   └── types/
│   │   │       └── photo.ts
│   │   └── package.json
│   │
│   ├── storybook/                    # Storybook 워크스페이스
│   │   ├── .storybook/
│   │   │   ├── main.ts
│   │   │   └── preview.ts
│   │   ├── src/
│   │   │   ├── stories/
│   │   │   │   └── Button.stories.tsx
│   │   │   └── storybook.css
│   │   └── package.json
│   │
│   └── docs/                         # 문서 앱 (기본 템플릿)
│
├── packages/
│   ├── ui/                           # 공유 UI 컴포넌트 라이브러리
│   │   ├── src/
│   │   │   ├── button.tsx            # Button 컴포넌트
│   │   │   └── fonts/
│   │   │       └── PretendardVariable.woff2  # Pretendard 폰트
│   │   └── package.json
│   │
│   ├── typescript-config/            # 공유 TypeScript 설정
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   └── react-library.json
│   │
│   └── eslint-config/                # 공유 ESLint 설정
│       ├── base.js
│       ├── next.js
│       └── react-internal.js
│
├── package.json
├── pnpm-workspace.yaml
└── turbo.json                        # Turborepo 설정
```

## 🛠 기술 스택

- **모노레포 도구**: Turborepo
- **패키지 매니저**: pnpm
- **프레임워크**: Next.js 15 (App Router)
- **스타일링**: Tailwind CSS v4
- **UI 문서화**: Storybook v8
- **언어**: TypeScript
- **폰트**: Pretendard 
- **배포**: Vercel

## 📋 사전 요구사항

- Node.js 18 이상
- pnpm 8 이상

## 🚀 시작하기

### 1. 의존성 설치

```bash
cd my-turborepo
pnpm install
```

### 2. 개발 서버 실행

#### 웹 애플리케이션 실행

```bash
pnpm --filter web dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

#### Storybook 실행

```bash
pnpm --filter storybook dev
```

브라우저에서 [http://localhost:6006](http://localhost:6006) 접속

#### 모든 앱 동시 실행

```bash
pnpm dev
```

## 🏗 빌드

### 전체 프로젝트 빌드

```bash
pnpm build
```

### 개별 앱 빌드

```bash
# 웹 앱 빌드
pnpm --filter web build

# Storybook 빌드
pnpm --filter storybook build
```

## 📱 주요 기능

### 웹 애플리케이션 (`apps/web`)

1. **메인 페이지 (`/`)**
   - 지원자 소개 페이지
   - "다음" 버튼으로 포토 뷰어 이동
   - 반응형 디자인 (모바일, 태블릿, 데스크톱)

2. **포토 뷰어 페이지 (`/result`)**
   - Picsum Photos API를 통한 사진 데이터 가져오기
   - 사진 및 메타데이터 표시 (id, author, width, height, url)
   - 서버 컴포넌트 & Suspense 활용
   - 스켈레톤 UI 로딩 상태
   - "이전" 버튼으로 메인 페이지 이동

3. **404 페이지 (`/not-found`)**
   - 커스텀 404 에러 페이지
   - "홈으로 돌아가기" 버튼

### UI 컴포넌트 라이브러리 (`packages/ui`)

- **Button**: 재사용 가능한 버튼 컴포넌트
  - 기본, hover, active(pressed) 상태
  - Tailwind CSS 스타일링
  - TypeScript 타입 지원

### Storybook (`apps/storybook`)

- Button 컴포넌트 스토리
- 다양한 상태 시각화 (Default, Hover, Pressed)
- Pretendard 폰트 적용

## 🎨 디자인 시스템

- **폰트**: Pretendard Variable (공유 리소스: `packages/ui/src/fonts/`)
- **색상**:
  - Primary Button: `#111111`
- **반응형 브레이크포인트**:
  - Mobile: 기본
  - Tablet: `md` (768px)
  - Desktop: `lg` (1024px), `xl` (1280px)

## 🔧 주요 스크립트

```bash
# 개발 모드
pnpm dev                    # 모든 앱 실행
pnpm --filter web dev       # 웹 앱만 실행
pnpm --filter storybook dev # Storybook만 실행

# 빌드
pnpm build                  # 전체 빌드
pnpm --filter web build     # 웹 앱 빌드
pnpm --filter storybook build # Storybook 빌드

# 린트
pnpm lint                   # 전체 린트 검사
```

## 📂 워크스페이스 구성

프로젝트는 pnpm 워크스페이스를 사용하여 다음과 같이 구성되어 있습니다:

- `apps/*`: 애플리케이션들 (web, storybook, docs)
- `packages/*`: 공유 패키지들 (ui, typescript-config, eslint-config)

## 🌐 API

### Photo API

**Endpoint**: `https://picsum.photos`

- `/id/{id}/info`: 특정 ID의 사진 정보 가져오기

## 📝 주요 라이브러리

- `next`: ^15.5.6
- `react`: ^19.2.0
- `tailwindcss`: ^4.0.0
- `@storybook/react`: ^8.6.14
- `typescript`: ^5

## 👤 작성자

**윤원빈**

## 📄 라이선스

이 프로젝트는 개인 과제용으로 제작되었습니다.
