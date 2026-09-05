# Donghun Jeong CV

Jekyll과 GitHub Pages로 배포하는 개인 CV 사이트입니다.

## 로컬 실행

Ruby 2.7 이상과 Bundler를 설치한 뒤 실행합니다.

```bash
bundle install
bundle exec jekyll serve --livereload
```

브라우저에서 `http://localhost:4000`을 엽니다. 배포용 정적 파일 검증은 아래 명령을 사용합니다.

```bash
bundle exec jekyll build
```

## GitHub Pages 설정

GitHub의 **Settings → Pages**에서 배포 방식을 **Deploy from a branch**로 선택하고, 현재 기본 브랜치인 `master`의 `/(root)`를 배포 대상으로 지정합니다. 이후 기본 브랜치를 `main`으로 바꾸면 Pages 설정도 함께 변경합니다. 사용자 사이트는 저장소 이름을 `<GitHub 사용자명>.github.io`로 하고 `_config.yml`의 `baseurl`을 빈 문자열로 유지합니다. 프로젝트 사이트는 `baseurl: "/저장소명"`으로 바꿉니다.

## Google 검색 등록

배포 후 Google Search Console에서 `https://dounghun22.github.io` URL 접두어 속성을 추가한다. HTML 태그 방식으로 검증할 경우 표시되는 `content` 값만 `_config.yml`의 `webmaster_verifications.google`에 입력하고 다시 배포한다. 검증이 완료되면 `https://dounghun22.github.io/sitemap.xml`을 제출한다.
