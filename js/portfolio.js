const htmlProjects = [
  {
    link: 'https://iampratiktandel.github.io/omnifood/',
    src: './img/omnifood.jpg',
    alt: 'Omnifood website designed by Pratik Tandel',
    name: 'Omnifood'
  },
  {
    link: 'https://iampratiktandel.github.io/uHost/',
    src: './img/uHost.jpg',
    alt: 'uHost website designed by Pratik Tandel',
    name: 'uHost'
  },
  {
    link: 'https://iampratiktandel.github.io/lisbon-chair-shop/',
    src: './img/lisbon-chair-shop.jpg',
    alt: 'Lisbon-Chair-Shop website designed by Pratik Tandel',
    name: 'Lisbon Chair Shop'
  },
  {
    link: 'https://iampratiktandel.github.io/components-and-layout/',
    src: './img/components-and-layout.jpg',
    alt: 'Components-and-Layout website designed by Pratik Tandel',
    name: 'Components and Layout'
  },
  {
    link: 'https://iampratiktandel.github.io/technical-documentation-page',
    src: './img/technical-documentation.jpg',
    alt: 'Technical-Documentation website designed by Pratik Tandel',
    name: 'Technical Documentation'
  },
];

const bootstrapProjects = [
  {
    link: 'https://lbry.org/',
    src: './img/lbry-org.jpg',
    alt: 'lbry.org website designed by Pratik Tandel',
    name: 'lbry.org'
  },
  {
    link: 'https://lbry.co/',
    src: './img/lbry-co.jpg',
    alt: 'lbry.co website designed by Pratik Tandel',
    name: 'lbry.co'
  },
  {
    link: 'https://iampratiktandel.github.io/WanderersHub/',
    src: './img/wanderers-hub.jpg',
    alt: 'Wanderers-Hub website designed by Pratik Tandel',
    name: 'Wanderers Hub'
  },
  {
    link: 'https://iampratiktandel.github.io/resume/',
    src: './img/resume.jpg',
    alt: 'Resume website designed by Pratik Tandel',
    name: 'Resume'
  },
  {
    link: 'https://iampratiktandel.github.io/InstantArtwork/',
    src: './img/instant-artwork.jpg',
    alt: 'Instant-Artwork website designed by Pratik Tandel',
    name: 'Instant Artwork'
  }
];

const jsProjects = [
  {
    link: 'https://iampratiktandel.github.io/QuotesGenerator/',
    src: './img/quotes-generator.jpg',
    alt: 'Quotes-Generator website designed by Pratik Tandel',
    name: 'Quotes Generator'
  }
];

const angularProjects = [
  {
    link: 'https://todo-angular-app.vercel.app/',
    src: './img//todo-angular-app.jpg',
    alt: 'ToDo angular app developed by Pratik Tandel',
    name: 'To Do'
  }
];

const reactProjects = [
  {
    link: 'https://expense-tracker-react.vercel.app/',
    src: './img/expense-tracker.jpg',
    alt: 'Expense-Tracker react app developed by Pratik Tandel',
    name: 'Expense Tracker'
  }
];

const nodeJsProjects = [
  {
    link: 'https://iampratiktandel.glitch.me/',
    src: './img/api-and-microservices.jpg',
    alt: 'APIs-and-Microservice developed by Pratik Tandel',
    name: 'APIs and Microservice'
  }
];

const htmlCssGrid = document.querySelector('#html-css');
const bootstrapGrid = document.querySelector('#bootstrap');
const jsGrid = document.querySelector('#js');
const angularGrid = document.querySelector('#angular');
const reactGrid = document.querySelector('#react');
const nodeJsGrid = document.querySelector('#nodeJs');

const createProjectTile = (project) => {
  const div = document.createElement('div');
  div?.classList?.add('project-tile');

  const a = document.createElement('a');
  a?.classList?.add('project-link');
  a.href = project?.link;
  a.target = '_blank';

  const img = document.createElement('img');
  img.classList?.add('project-image');
  img.src = project?.src;
  img.alt = project?.alt;

  const p = document.createElement('p');
  p?.classList?.add('project-name');
  p.textContent = project?.name;

  if (div && a && img && p) {
    a?.appendChild(img);
    a?.appendChild(p);
    div?.appendChild(a);
  }

  return div;
}

htmlCssGrid && htmlProjects.forEach((project) => {
  htmlCssGrid.appendChild(createProjectTile(project));
});

bootstrapGrid && bootstrapProjects.forEach((project) => {
  bootstrapGrid.appendChild(createProjectTile(project));
});

jsGrid && jsProjects.forEach((project) => {
  jsGrid.appendChild(createProjectTile(project));
});

angularGrid && angularProjects.forEach((project) => {
  angularGrid.appendChild(createProjectTile(project));
});

reactGrid && reactProjects.forEach((project) => {
  reactGrid.appendChild(createProjectTile(project));
});

nodeJsGrid && nodeJsProjects.forEach((project) => {
  nodeJsGrid.appendChild(createProjectTile(project));
});
