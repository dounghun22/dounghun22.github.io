---
layout: default
title: "Donghun Jeong | Computer Architecture & Digital Logic Design"
description: "Donghun Jeong's experience in computer architecture, digital logic design, and CXL SoC development."
---

{% assign cv = site.data.cv %}

<article class="cv-page">
  <header class="hero" aria-labelledby="page-title">
    <img class="hero__cover" src="{{ '/assets/images/hero-cover.png' | relative_url }}" alt="An illustration of an engineer analyzing a semiconductor chip" width="1536" height="1024">
    <div class="hero__content">
      <img class="profile-photo" src="{{ '/assets/images/profile.png' | relative_url }}" alt="Profile photo of {{ cv.name }}" width="128" height="165">
      <p class="eyebrow">Curriculum Vitae</p>
      <h1 id="page-title">{{ cv.name }}</h1>
      <p class="hero__role">{{ cv.role }}</p>
    </div>
  </header>

  <section class="contact-grid" aria-label="Contact and profiles">
    <div class="contact-grid__group">
      <p class="contact-item"><span class="contact-item__icon">{% include icon.html name='location' %}</span>{{ cv.location }}</p>
      <p class="contact-item"><span class="contact-item__icon">{% include icon.html name='email' %}</span><a href="mailto:{{ cv.email }}">{{ cv.email }}</a></p>
    </div>
    <nav class="profile-links" aria-label="External profiles">
      {% for profile in cv.profiles %}
        <a href="{{ profile.url }}" rel="noopener noreferrer" target="_blank">
          <span class="profile-links__icon">{% include icon.html name=profile.icon %}</span>
          <span>{{ profile.label }}</span>
          <span class="profile-links__value">{{ profile.value }}</span>
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      {% endfor %}
    </nav>
  </section>

  <section class="cv-section" aria-labelledby="about-heading">
    <h2 id="about-heading"><span class="section-heading__icon">{% include icon.html name='about' %}</span>About Me</h2>
    <div class="section-rule"></div>
    <p class="summary">{{ cv.summary }}</p>
  </section>

  <section class="cv-section" aria-labelledby="education-heading">
    <h2 id="education-heading"><span class="section-heading__icon">{% include icon.html name='education' %}</span>Education</h2>
    <div class="section-rule"></div>
    <div class="education-list">
      {% for item in cv.education %}
        <article class="education-card">
          <img class="education-card__logo" src="{{ '/assets/images/' | append: item.logo | relative_url }}" alt="Sungkyunkwan University logo" width="268" height="268">
          <div>
            <h3>{{ item.degree }}</h3>
            <p class="education-card__department">{{ item.department }}</p>
            {% if item.research %}<p class="education-card__research">{{ item.research }}</p>{% endif %}
            {% if item.advisor %}<p class="education-card__advisor">{{ item.advisor }}</p>{% endif %}
          </div>
          <dl class="education-card__meta">
            <div><dt>Period</dt><dd>{{ item.period }}</dd></div>
            <div><dt>GPA</dt><dd>{{ item.score }}</dd></div>
          </dl>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="cv-section" aria-labelledby="experience-heading">
    <h2 id="experience-heading"><span class="section-heading__icon">{% include icon.html name='experience' %}</span>Work Experience</h2>
    <div class="section-rule"></div>
    <div class="experience-list">
      {% for item in cv.experience %}
        <article class="experience-item">
          <p class="experience-item__period">{{ item.period }}</p>
          <div class="experience-item__body">
            <div class="experience-item__heading">
              <img class="experience-item__logo" src="{{ '/assets/images/' | append: item.logo | relative_url }}" alt="SK hynix logo" width="92" height="48">
              <div>
                <h3>{{ item.role }}</h3>
                <p class="experience-item__company">{{ item.company }}</p>
              </div>
            </div>
            <ul>
              {% for highlight in item.highlights %}
                <li>{{ highlight }}</li>
              {% endfor %}
            </ul>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="cv-section projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading"><span class="section-heading__icon">{% include icon.html name='projects' %}</span>Contributed Projects</h2>
    <div class="section-rule"></div>
    <div class="project-list">
      {% for project in cv.projects %}
        <article class="project-card">
          <div class="project-card__heading">
            <h3>{{ project.title }}</h3>
            <p>{{ project.period }}</p>
          </div>
          <p class="project-card__description">{{ project.description }}</p>
          <ul class="project-card__contributions">
            {% for contribution in project.contributions %}
              <li><span aria-hidden="true">✦</span>{{ contribution }}</li>
            {% endfor %}
          </ul>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="cv-section" aria-labelledby="patents-heading">
    <h2 id="patents-heading"><span class="section-heading__icon">{% include icon.html name='patents' %}</span>Patents</h2>
    <div class="section-rule"></div>
    {% assign registered_patents = cv.patents | where: "is_registered", true | sort: "registration_date" | reverse %}
    {% assign pending_patents = cv.patents | where: "is_registered", false | sort: "filing_date" | reverse %}
    {% assign ordered_patents = registered_patents | concat: pending_patents %}
    <div class="patent-list">
      {% for patent in ordered_patents %}
        <article class="patent-card">
          <h3>{{ patent.title }}</h3>
          {% if patent.is_public %}
            <p class="patent-card__abstract"><strong>Abstract</strong>{{ patent.abstract }}</p>
          {% else %}
            <p class="patent-card__unpublished">Unpublished</p>
          {% endif %}
          <dl class="patent-card__meta">
            <div><dt>Status</dt><dd>{{ patent.status }}</dd></div>
            <div><dt>{% if patent.registration_date %}{{ patent.registration_date_label | default: 'Registration Date' }}{% else %}Filing Date{% endif %}</dt><dd>{{ patent.registration_date | default: patent.filing_date }}</dd></div>
            {% if patent.publication_date %}<div><dt>Publication Date</dt><dd>{{ patent.publication_date }}</dd></div>{% endif %}
            <div><dt>KR</dt><dd>{{ patent.kr_number }}</dd></div>
            <div><dt>US</dt><dd>{{ patent.us_number }}</dd></div>
            {% if patent.publication_number %}<div><dt>Publication</dt><dd>{{ patent.publication_number }}</dd></div>{% endif %}
            <div><dt>Contribution</dt><dd>{{ patent.contribution }}</dd></div>
          </dl>
          {% if patent.is_public and patent.url %}<a class="resource-link" href="{{ patent.url }}" rel="noopener noreferrer" target="_blank">{{ patent.link_label | default: 'Patent link' }} <span class="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>{% endif %}
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="cv-section" aria-labelledby="papers-heading">
    <h2 id="papers-heading"><span class="section-heading__icon">{% include icon.html name='papers' %}</span>Papers</h2>
    <div class="section-rule"></div>
    {% assign first_author_papers = cv.papers | where: "is_first_author", true | sort: "year" | reverse %}
    {% assign coauthor_papers = cv.papers | where: "is_first_author", false | sort: "year" | reverse %}
    {% assign ordered_papers = first_author_papers | concat: coauthor_papers %}
    <div class="paper-list">
      {% for paper in ordered_papers %}
        <article class="paper-card">
          <h3>{{ paper.title }}</h3>
          <p class="paper-card__venue">{{ paper.venue }}</p>
          {% if paper.authors %}<p class="paper-card__authors">{{ paper.authors }}</p>{% endif %}
          {% if paper.description %}<p>{{ paper.description }}</p>{% endif %}
          {% if paper.doi %}<p class="paper-card__doi">DOI: <a href="https://doi.org/{{ paper.doi }}" rel="noopener noreferrer" target="_blank">{{ paper.doi }}<span class="sr-only">(opens in a new tab)</span></a></p>{% endif %}
          {% if paper.keywords %}<p class="paper-card__keywords">{{ paper.keywords }}</p>{% endif %}
          <a class="resource-link" href="{{ paper.url }}" rel="noopener noreferrer" target="_blank">Paper link <span class="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a>
        </article>
      {% endfor %}
    </div>
  </section>
</article>
