import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Venusian",
  EMAIL: "afraanjumsubha@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: " Venusian is a space where I share my writing, projects, and the things that intrigue me",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Github",
    HREF: "https://github.com/Irenity0"
  },
  { 
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/afra-anjum-subha",
  },
  { 
    NAME: "YouTube",
    HREF: "https://www.youtube.com/@SomeoneReader",
  }
];
