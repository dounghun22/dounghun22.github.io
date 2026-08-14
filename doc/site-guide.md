# CV 웹사이트 운영 가이드

이 문서는 Donghun Jeong의 개인 CV 웹사이트를 수정·운영하기 위한 기본 정보를 정리합니다. 사이트는 Jekyll로 빌드하고 GitHub Pages에 배포합니다.

## 기본 정보

| 항목 | 값 |
| --- | --- |
| 정적 사이트 생성기 | Jekyll |
| 배포 대상 | GitHub Pages |
| Ruby 의존성 | `github-pages`, `webrick` |
| 기본 언어 | 영어 (`_config.yml`의 `lang`) |
| 기본 페이지 | `index.md` (`/`) |
| 한국어 페이지 | `ko/index.md` (`/ko/`) |
| 콘텐츠 원본 | `_data/cv.yml`(영문), `_data/cv-ko.yml`(한국어) |
| 스타일시트 원본 | `assets/css/style.scss` |
| 테마 동작 스크립트 | `assets/js/theme-toggle.js` |

사이트 전체 설정은 `_config.yml`에서 관리합니다. 배포 주소가 확정되면 `url`에 사이트의 전체 주소를 지정합니다. 사용자 사이트는 `baseurl: ""`을 유지하고, 프로젝트 사이트는 `baseurl: "/저장소명"`으로 설정합니다.

## 디렉터리와 역할

| 경로 | 역할 |
| --- | --- |
| `_config.yml` | 사이트 제목, 설명, 언어, URL, Jekyll 플러그인 및 빌드 제외 경로 설정 |
| `_data/cv.yml` | 인적 사항, 학력, 경력, 프로젝트, 특허, 논문 등 반복 CV 콘텐츠의 단일 원본 |
| `_data/cv-ko.yml` | 한국어 CV의 인적 사항, 학력, 경력, 프로젝트, 특허, 논문 원본 |
| `_data/translations.yml` | 공통 UI와 섹션 라벨의 영문·한국어 번역 |
| `index.md`, `ko/index.md` | 언어별 메타데이터와 상호 전환 경로 정의 |
| `_includes/cv-content.html` | 언어별 CV 데이터를 같은 표시 순서로 렌더링하는 공통 Liquid 템플릿 |
| `_layouts/default.html` | HTML 문서 골격, SEO 태그, 건너뛰기 링크, 언어·테마 토글, CSS·JS 로드 |
| `_includes/icon.html` | 섹션 및 연락처에 쓰는 인라인 SVG 아이콘 |
| `assets/css/style.scss` | 색상 토큰, 레이아웃, 반응형 규칙, 접근성 스타일 |
| `assets/js/theme-toggle.js` | 테마 전환 UI와 사용자 선택 저장 |
| `assets/images/` | 프로필·히어로 이미지와 기관 로고의 로컬 원본 |
| `doc/` | 저장소 유지보수 문서 |

## 페이지 내용과 구성

반복되는 사실 정보는 언어별 데이터 파일에서 수정합니다. 영문은 `_data/cv.yml`, 한국어는 `_data/cv-ko.yml`을 사용하며, 두 파일의 항목 순서·날짜·번호·링크·공개 여부를 함께 유지합니다. 공통 UI 문구는 `_data/translations.yml`에서 관리합니다. `index.md`와 `ko/index.md`에는 언어별 메타데이터와 공통 템플릿 호출만 두며, 동일한 사실 정보를 직접 작성하지 않습니다.

영문은 기본 경로 `/`, 한국어는 `/ko/`로 제공됩니다. 각 페이지 우측 상단의 언어 전환 링크는 대응하는 페이지로 이동합니다. 새 언어를 추가할 때는 해당 CV 데이터 파일, `_data/translations.yml`의 번역 키, 페이지 front matter의 `lang`·`alternate_*` 값을 함께 추가합니다.

### 영문·한국어 의미 일치

영문과 한국어를 함께 수정할 때는 두 언어의 대응 항목이 같은 사실과 성과를 전달하는지 확인합니다. 이름, 소속, 역할, 날짜, 수치, 특허 번호, DOI, 링크, 공개 여부는 두 언어에서 동일해야 하며, 한쪽에만 경력·성과·설명을 추가하거나 생략하지 않습니다.

자연스러운 현지화는 허용하지만 의미를 넓히거나 축소하지 않습니다. UI 라벨, 페이지 제목·설명, 이미지 `alt` 텍스트, 링크 라벨도 대상 언어에서 같은 목적을 전달해야 합니다. 번역이 모호하거나 저자·기여도처럼 사실 확인이 어려운 경우에는 추정하지 말고 사용자에게 확인합니다.

`_data/cv.yml`과 `_data/cv-ko.yml`의 항목 수·대응 순서·식별자·공개 상태를 함께 유지하고, 공통 UI 문구는 `_data/translations.yml`에서 동시에 갱신합니다. 배포 전에는 `$verify-cv-site-content`로 언어별 렌더링과 의미 일치를 점검합니다.

페이지는 하나의 `main` 안에 다음 순서로 구성됩니다. 섹션의 순서를 바꾸려면 `index.md`에서 해당 `<section>` 블록을 이동해야 합니다.

| 순서 | 화면 영역 | 데이터·자산 | 표시 내용 |
| --- | --- | --- | --- |
| 1 | 공통 UI | `_layouts/default.html` | 본문 건너뛰기 링크와 우측 상단 언어 전환·테마 토글 |
| 2 | 히어로 | `name`, `role`, `hero-cover.png`, `profile.png` | 커버 이미지, 프로필 사진, `Curriculum Vitae`, 이름, 직무 |
| 3 | 연락처·외부 프로필 | `location`, `email`, `profiles` | 지역, 이메일, GitHub·LinkedIn·Google Scholar 등의 아이콘·라벨·링크 |
| 4 | About Me | `summary` | 자기소개 본문 |
| 5 | Core Skills | `skills` | 역량 그룹별 전문 지식·설계 및 분석 스킬 목록 |
| 6 | Education | `education` | 학교 로고, 학위, 학과, 선택 연구·지도교수 정보, 기간, GPA |
| 7 | Work Experience | `experience` | 기간, 회사 로고, 역할, 회사명, 핵심 업무 목록 |
| 8 | Contributed Projects | `projects` | 제목, 기간·소속, 설명, 기여 항목 목록 |
| 9 | Patents | `patents` | 특허 제목, 공개 여부별 본문, 상태·날짜·번호·기여도, 공개 특허 링크 |
| 10 | Papers | `papers` | 논문 제목, 학술지·학회, 저자, 설명, DOI, 키워드, 논문 링크 |

각 콘텐츠 영역은 제목, 인라인 SVG 아이콘, 구분선, 카드 또는 목록으로 구성합니다. 모든 목록 데이터는 `_data/cv.yml`의 배열 항목 하나가 화면의 카드 또는 행 하나가 됩니다.

### 섹션별 데이터와 기본 표시 순서

| 데이터 키 | 항목별 필수 정보 | 정렬·표시 규칙 |
| --- | --- | --- |
| `profiles` | `label`, `icon`, `value`, `url` | YAML에 작성한 순서대로 표시합니다. `icon`은 `_includes/icon.html`에 정의되어야 합니다. |
| `skills` | `label`, `tone`, `items[].label`, `items[].icon` | YAML에 작성한 순서대로 역량 그룹을 표시하고, `tone`에 따라 전문 지식은 청록·설계 및 분석 스킬은 인디고 계열로 구분합니다. 각 그룹의 `items`는 아이콘과 함께 태그 형태로 표시하며, `icon`은 `_includes/icon.html`에 정의되어야 합니다. |
| `education` | `degree`, `logo`, `department`, `period`, `score` | YAML에 작성한 순서대로 표시합니다. `research`, `advisor`는 입력했을 때만 표시합니다. |
| `experience` | `period`, `role`, `company`, `logo`, `highlights` | YAML에 작성한 순서대로 표시합니다. 최신 경력이 먼저 보이도록 데이터 자체를 최신순으로 유지합니다. |
| `projects` | `title`, `period`, `description`, `contributions` | YAML에 작성한 순서대로 표시합니다. 최신 또는 대표 프로젝트가 먼저 오도록 데이터 자체를 관리합니다. |
| `patents` | 아래 특허 항목 참조 | 등록 여부와 날짜를 기준으로 템플릿에서 정렬합니다. |
| `papers` | `title`, `year`, `is_first_author`, `authors`, `venue`, `doi`, `url` | 주저자 여부를 먼저 구분한 후, 각 그룹을 연도 내림차순으로 정렬합니다. |

### 특허 표시 규칙

특허의 표시 우선순위는 `index.md`에서 계산하며, `_data/cv.yml`의 작성 순서와 무관합니다.

1. `is_registered: true`인 등록 특허를 `registration_date` 내림차순으로 표시합니다.
2. 이어서 `is_registered: false`인 미등록 특허를 `filing_date` 내림차순으로 표시합니다.

각 특허에는 `title`, `status`, `is_public`, `is_registered`, `filing_date`, `kr_number`, `us_number`, `contribution`을 입력합니다. `filing_date`는 미국 출원이 있으면 미국 출원일을 사용하고, 없으면 해당 특허의 다른 국가 출원일을 사용합니다. 등록 특허에는 `registration_date`를 반드시 추가합니다. `publication_date`와 `publication_number`는 값이 있을 때만 표시합니다.

`is_public: true`이면 `abstract`를 제공하여 초록을 표시합니다. 공개 레코드 URL이 있으면 `url`을 추가하며, `link_label`로 링크 라벨을 바꿀 수 있습니다. `is_public: false`이면 초록 대신 **Unpublished**만 보이며, `url`이 있어도 링크는 표시되지 않습니다. 미공개 특허에는 비공개 설명이나 문서 URL을 추가하지 않습니다.

### 논문 표시 규칙

논문은 `is_first_author` 값에 따라 두 그룹으로 나눈 뒤 합칩니다.

1. `is_first_author: true`인 주저자 논문을 `year` 내림차순으로 표시합니다.
2. `is_first_author: false`인 공저 논문을 `year` 내림차순으로 표시합니다.

따라서 더 최근의 공저 논문이 있더라도 주저자 논문 그룹 뒤에 표시됩니다. `authors`, `description`, `doi`, `keywords`는 값이 있을 때만 노출됩니다. `doi`는 DOI 링크로 표시되며, `url`은 각 논문의 **Paper link**로 사용됩니다.

새 로고나 이미지는 `assets/images/`에 저장하고, 데이터에는 파일명만 입력합니다. 기관 로고는 공식 공개 자산인지와 사용 조건을 확인합니다.

## 테마

테마는 `html` 요소의 `data-theme` 값으로 제어하며, 가능한 값은 `light`와 `dark`입니다.

### 초기 테마 결정 순서

`_layouts/default.html`의 인라인 스크립트가 CSS를 읽기 전에 다음 우선순위로 테마를 정합니다.

1. `localStorage`의 `theme` 값이 `light` 또는 `dark`이면 그 값을 사용합니다.
2. 저장값이 없거나 유효하지 않으면 운영체제의 `prefers-color-scheme` 값을 사용합니다.
3. 어느 경우에도 해당하지 않으면 라이트 테마가 적용됩니다.

초기 스크립트를 레이아웃의 `<head>`에 둔 이유는 화면이 먼저 라이트 테마로 표시됐다가 다크 테마로 바뀌는 깜빡임을 줄이기 위해서입니다.

### 색상 토큰

`assets/css/style.scss`의 `:root`는 라이트 테마, `html[data-theme='dark']`는 다크 테마의 CSS 사용자 정의 속성을 정의합니다. 색상 변경은 개별 컴포넌트보다 아래 토큰을 우선 수정합니다.

| 용도 | 주요 토큰 |
| --- | --- |
| 페이지·카드 배경 | `--page-background`, `--surface`, `--surface-subtle`, `--surface-emphasis` |
| 일반·제목·보조 텍스트 | `--text`, `--heading`, `--muted`, `--muted-strong`, `--muted-light`, `--muted-meta` |
| 링크·아이콘 강조 | `--blue`, `--blue-dark`, `--blue-icon` |
| 경계선·구분선·그림자 | `--line`, `--line-soft`, `--section-rule`, `--shadow` |

테마를 수정할 때는 라이트·다크 모드 모두에서 본문, 보조 텍스트, 링크, 테두리의 대비를 확인합니다. 키보드 포커스는 테마와 무관하게 잘 보여야 하므로 `a:focus-visible`의 노란색 외곽선도 함께 검증합니다.

### 토글 동작

`assets/js/theme-toggle.js`는 토글 버튼을 클릭하면 `light`와 `dark`를 전환하고, 선택한 값을 `localStorage`의 `theme` 키에 저장합니다. 스크립트는 현재 테마에 맞춰 다음 항목도 동기화합니다.

- `aria-pressed`
- 화면낭독기용 `aria-label`
- 아이콘과 버튼 라벨

테마 기능을 수정할 때는 시스템 설정을 따르는 첫 방문, 저장된 선택값을 가진 재방문, 라이트·다크 모드 각각에서의 토글 동작을 모두 확인합니다.

## 레이아웃과 반응형 기준

데스크톱에서는 최대 너비 `70rem`의 카드형 CV 페이지를 사용하며, 특허 목록은 두 열로 표시합니다. 화면 폭이 `48rem` 이하가 되면 페이지 외곽 카드 장식을 제거하고, 연락처·학력·경력·프로젝트 헤더와 특허 목록을 한 열에 맞게 재배치합니다. `30rem` 이하에서는 좌우 여백과 프로필 링크 그리드를 추가로 축소합니다.

스타일 수정 시 데스크톱과 폭 768px 이하, 폭 480px 이하를 확인합니다. 긴 링크, 긴 특허 번호, 긴 프로젝트 제목도 줄바꿈이나 말줄임 처리에서 깨지지 않는지 함께 점검합니다.

## 접근성 및 외부 링크

- 페이지 첫머리의 건너뛰기 링크는 키보드 사용자가 바로 본문으로 이동하게 합니다.
- 각 주요 영역은 의미론적 `header`, `main`, `section`, `article`, `nav` 요소와 레이블을 사용합니다.
- 외부 링크는 새 탭으로 열며 `rel="noopener noreferrer"`와 화면낭독기 안내를 유지합니다.
- 이미지에는 내용을 설명하는 `alt` 텍스트를 제공합니다. 장식용이 아닌 이미지의 `alt`를 비워두지 않습니다.
- 새 아이콘은 가능하면 `_includes/icon.html`의 인라인 SVG로 추가합니다.

## 로컬 실행과 배포 전 검증

Python 작업이 필요하면 프로젝트 규칙에 따라 가상환경 또는 `conda activate codex` 환경을 사용합니다. 이 Jekyll 사이트 자체의 빌드에는 Ruby와 Bundler가 필요합니다.

```bash
bundle install
bundle exec jekyll serve --livereload
```

로컬 주소는 기본적으로 `http://localhost:4000`입니다. 배포 전에는 다음 명령으로 정적 빌드를 검증합니다.

```bash
bundle exec jekyll build
```

GitHub Pages에서는 **Settings → Pages**에서 기본 브랜치의 `/(root)`를 배포 대상으로 선택합니다. `url`과 `baseurl`을 실제 배포 형태에 맞게 설정한 뒤, 상대 URL을 만드는 Liquid 필터 `relative_url`을 유지합니다. 스타일시트 URL에는 빌드 버전을 쿼리로 추가해, 배포 직후에도 브라우저가 이전 CSS를 재사용하지 않도록 합니다.

## 변경 전 점검표

- [ ] CV 사실 정보는 `_data/cv.yml`만 수정했는가?
- [ ] 새 이미지·로고는 `assets/images/`에 로컬로 저장했고 공개 사용 조건을 확인했는가?
- [ ] 테마 변경 시 시스템 기본값과 저장된 사용자 선택이 모두 유지되는가?
- [ ] 영문·한국어의 대응 콘텐츠와 UI 문구가 같은 사실과 의미를 전달하는가?
- [ ] 라이트·다크, 데스크톱·모바일에서 색상 대비와 레이아웃을 확인했는가?
- [ ] `bundle exec jekyll build`가 성공하는가?
- [ ] 미공개 특허, 비공개 URL 등 민감한 정보가 추가되지 않았는가?
