// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "You can find my latest publications here",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-have-given-a-talk-at-the-zurich-ai-alignment-zaia-on-jailbreaking-llms-and-why-it-matters-for-ai-safety-you-can-find-the-slides-here",
          title: 'I have given a talk at the Zurich AI Alignment (ZAIA) on jailbreaking...',
          description: "",
          section: "News",},{id: "news-happy-to-have-attended-acl-2025-in-vienna-austria",
          title: 'Happy to have attended ACL 2025 in Vienna, Austria 🇦🇹.',
          description: "",
          section: "News",},{id: "news-excited-to-be-going-to-emnlp-2025-in-suzhou-china",
          title: 'Excited to be going to EMNLP 2025 in Suzhou, China 🇨🇳!',
          description: "",
          section: "News",},{id: "news-happy-to-have-attended-iaseai-26-at-unesco-house-in-paris-france",
          title: 'Happy to have attended IASEAI’26 at UNESCO House in Paris, France 🇫🇷.',
          description: "",
          section: "News",},{id: "news-happy-to-have-attended-the-chai-2026-workshop-in-asilomar-california",
          title: 'Happy to have attended the CHAI 2026 workshop in Asilomar, California 🇺🇸.',
          description: "",
          section: "News",},{id: "news-excited-to-be-at-icml-2026-in-seoul-south-korea-presenting-training-with-honeypots",
          title: 'Excited to be at ICML 2026 in Seoul, South Korea 🇰🇷, presenting Training...',
          description: "",
          section: "News",},{id: "news-happy-to-have-taken-part-in-the-mars-5-0-research-sprint-in-oxford-uk",
          title: 'Happy to have taken part in the MARS 5.0 research sprint in Oxford,...',
          description: "",
          section: "News",},{id: "news-excited-to-be-starting-my-ellis-phd-advised-by-prof-bernhard-schölkopf-and-prof-zhijing-jin",
          title: 'Excited to be starting my ELLIS PhD, advised by Prof. Bernhard Schölkopf and...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D%75%65%6C@%73%69%6D%6B%6F.%69%6E%66%6F", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/samuelsimko", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/samuelsimko", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8a9YOF4AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SimkoSamuel", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
