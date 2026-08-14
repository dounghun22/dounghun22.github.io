# Repository Guidelines

## 프로젝트 개요

이 저장소는 GitHub Pages에서 제공하는 개인 CV 사이트입니다.

재사용 가능한 에이전트 임시 산출물만 `.agents-tmp/`에 보관하고, 일회용 파일은 즉시 삭제합니다.

Notion 원본을 옮길 때는 공개 가능한 경력, 학력, 프로젝트, 연락처만 사용합니다. 토큰, 개인 전화번호, 비공개 문서 URL 등 민감한 내용은 저장소에 추가하지 않습니다.

## 작업 라우팅

- Jekyll 기반 CV 생성·수정, Notion CV 마이그레이션, GitHub Pages 설정·배포 준비에는 `$build-jekyll-cv`를 사용합니다.
- 공개 페이지 콘텐츠, 페이지 구성, 자산, 테마, 반응형을 변경하거나 빌드·배포를 준비할 때는 `$verify-cv-site-content`로 콘텐츠를 점검합니다.
- 특허·논문 현행화 또는 신규 연구성과 추가에는 `$refresh-cv-research`를 사용합니다.
- GitHub 커밋·push 또는 GitHub Pages 배포에는 `$publish-cv-to-github`을 사용합니다.

## 코딩 스타일과 명명 규칙

Markdown의 경력 날짜·역할·성과 표기는 일관되게 유지합니다. YAML front matter와 CSS는 2칸 들여쓰기를 사용하며, 파일명은 `kebab-case`로 작성합니다. include는 역할을 나타내는 이름(예: `project-card.html`)을 사용합니다. 코드 주석은 영어로 작성합니다.

## 웹사이트 운영 문서

웹사이트를 수정하거나 검증하기 전에 [doc/site-guide.md](doc/site-guide.md)를 읽습니다. 페이지 구성, 콘텐츠 데이터 구조·표시 순서, 특허·논문 정렬, 자산, 테마, 반응형·접근성, 로컬 실행과 배포 절차는 이 문서를 단일 기준으로 사용합니다.

위 기준이 바뀌면 같은 변경에 `doc/site-guide.md`를 반드시 최신 상태로 수정합니다. 세부 점검 절차와 결과 보고 형식은 `$verify-cv-site-content`를 따릅니다.

## 커밋과 Pull Request 지침

커밋 이력이 없으므로 `Add experience timeline`, `Fix mobile navigation`처럼 짧은 명령형 제목을 사용합니다. 한 커밋에는 하나의 목적만 담습니다. Pull Request에는 변경 목적, 검증 명령과 결과, 관련 이슈를 기록하고, 사용자에게 보이는 디자인 변경에는 스크린샷을 첨부합니다.
