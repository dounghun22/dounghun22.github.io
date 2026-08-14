---
name: build-jekyll-cv
description: Create, migrate, or improve a personal CV or portfolio website built with Jekyll and GitHub Pages. Use when moving a public Notion CV to a searchable static site, implementing its visual design, configuring GitHub Pages, or validating Jekyll builds and deployment readiness.
---

# Build Jekyll CV

Create a polished, accessible, and search-indexable CV site while preserving the source CV’s factual content and visual hierarchy.

## Workflow

1. Read the repository’s `AGENTS.md` and inspect the existing site before editing.
2. If a public source page is supplied, retrieve it and extract only public CV content: identity, summary, experience, education, projects, skills, and approved links. Do not invent dates, employers, metrics, or credentials. Ask for missing or ambiguous information.
3. Identify whether the target is a user site (`<owner>.github.io`, `baseurl: ""`) or a project site (`baseurl: "/<repo>"`). Do not claim a site is deployed unless GitHub access or an observable deployment result confirms it.
4. Preserve the source’s information architecture and visual intent, but implement original HTML/CSS. Do not copy proprietary stylesheets, images, or text beyond user-authorized CV content.
5. Keep CV data editable. Use front matter or `_data/` for repeated entries; use `_layouts/` for page shells, `_includes/` for reusable sections, and `assets/css/` for styles.
6. Add responsive layouts, semantic landmarks, a descriptive page title and meta description, accessible link labels, image `alt` text, visible keyboard focus, and sufficient color contrast.
7. Configure GitHub Pages-compatible dependencies. Prefer the `github-pages` gem and plugins supported by GitHub Pages. Include a production `url` and the correct `baseurl` in `_config.yml`.
8. Run `bundle install` and `bundle exec jekyll build`. Inspect the generated site locally with `bundle exec jekyll serve`; test desktop and narrow mobile widths, navigation, links, and rendered Markdown. Do not commit `_site/`, `.jekyll-cache/`, or `vendor/bundle/`.

## Content and Design Decisions

Use concise accomplishment-oriented bullets and retain the source language unless the user asks for translation. Prefer system fonts and locally controlled CSS to reduce fragile dependencies. Use original assets only when the user supplies or authorizes them; otherwise use neutral layout and typography rather than substituting a person’s image or logo.

## Handoff

Report changed files, build results, and the exact GitHub Pages settings still required. For a user site, explain that the repository name must be `<GitHub username>.github.io`; for a project site, explain the resulting subpath and `baseurl` requirement.
