import freitas from '../assets/projects/freitas.png'
import imagiflix from '../assets/projects/imagiflix.png'
import magbank from '../assets/projects/magbank.png'
import vsPortfolio from '../assets/projects/portfolio.png'
import cyberPunkPortofolio from '../assets/projects/cyberpunk-portfolio.png'
import fabricaDeMonstros from '../assets/projects/fabrica-de-monstros.png'
import igniteFeed from '../assets/projects/ignite-feed.png'
import imcReact from '../assets/projects/imc-react.png'
import opinaCine from '../assets/projects/opina-cine.png'
import periodicTable from '../assets/projects/periodic-table.png'
import portfolioExemplo from '../assets/projects/portfolio-exemplo.png'
import rickyAndMorty from '../assets/projects/ricy-and-morty.png'
import stateWeb from '../assets/projects/state-web.png'
import wallet from '../assets/projects/wallet.png'
import studion from '../assets/projects/studion.png'

import htmlLogo from '../assets/guides/html.png'
import css from '../assets/guides/css3.jpg'
import sass from '../assets/guides/sass.png'
import bootstrap from '../assets/guides/bootstrap.png'
import materialize from '../assets/guides/materialize.png'
import tailwind from '../assets/guides/tailwind.png'
import git from '../assets/guides/git.png'
import javascript from '../assets/guides/js.png'
import typescript from '../assets/guides/typescript.png'
import json from '../assets/guides/json.jpg'
import react from '../assets/guides/react.png'
import reactHooks from '../assets/guides/react-hooks.png'
import nextJs from '../assets/guides/nextjs.jpeg'
import cssModules from '../assets/guides/css-modules.png'
import styledComponents from '../assets/guides/styled-components.png'
import pugJs from '../assets/guides/pugjs.jpg'
import docker from '../assets/guides/docker.jpg'
import solar2d from '../assets/guides/solar2d.png'



const projects = [
    { id: 1, type: 'frontend', content: 'project.contentImagiflix', background: imagiflix, deploy:'https://fagioni-imagiflix.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Imagiflix'},
    { id: 2, type: 'frontend', content: 'project.contentFreitas', background: freitas, deploy:'https://freitaseletrica.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Freitas-Website'},
    { id: 3, type: 'frontend', content: 'project.contentMagbank', background: magbank, deploy:'https://fagioni-magbank.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Magbank'},
    { id: 4, type: 'frontend', content: 'project.contentPortfolio', background: portfolioExemplo, deploy:'https://portfolio-exemplo-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/portfolio-example'},
    { id: 5, type: 'frontend', content: 'project.contentVsPortfolio', background: vsPortfolio, deploy:'https://luanfagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/vsPortfolio'},
    { id: 6, type: 'frontend', content: 'project.contentStudion', background: studion, deploy:'https://fagioni-studion-eventos.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Studion-Eventos'},
    { id: 8, type: 'frontend', content: 'project.contentPeriodicTableSound', background: periodicTable, deploy:'https://periodic-table-sound.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Periodic-table-sound'},
    { id: 9, type: 'frontend', content: 'project.contentCyberPunkPortfolio', background: cyberPunkPortofolio, deploy:'https://cyber-portfolio-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/CyberPunk-portfolio'},
    { id: 10, type: 'frontend', content: 'project.contentImcReact', background: imcReact, deploy:'https://imc-react-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/imc-react'},
    { id: 11, type: 'frontend', content: 'project.contentOpinaCine', background: opinaCine, deploy:'https://opina-cine.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Opina-cine'},
    { id: 12, type: 'frontend', content: 'project.contentWallet', background: wallet, deploy:'https://wallet-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Wallet'},
    { id: 13, type: 'frontend', content: 'project.contentFabricaDeMonstros', background: fabricaDeMonstros, deploy:'https://fagioni-fabrica-de-monstros.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Fabrica-de-monstros'},
    { id: 14, type: 'frontend', content: 'project.contentRickAndMorty', background: rickyAndMorty, deploy:'https://rick-and-morty-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/rick-and-morty-api'},
    { id: 15, type: 'frontend', content: 'project.contentIgniteFeed', background: igniteFeed, deploy:'', repository: 'https://github.com/DevLuanFagioni/ignite-feed'},
    { id: 16, type: 'frontend', content: 'project.contentStateWeb', background: stateWeb, deploy:'https://fagioni-state.netlify.app/', repository: 'https://github.com/DevLuanFagioni/State-web'},

    { id: 17, type: 'guides', content: 'guides.contentHtml', background: htmlLogo, deploy:'https://artigosluan.notion.site/Html5-4b8bae16758140d0b782304129b349c1', repository: 'https://artigosluan.notion.site/Html5-4b8bae16758140d0b782304129b349c1'},
    { id: 18, type: 'guides', content: 'guides.contentPugJs', background: pugJs, deploy:'https://artigosluan.notion.site/Pug-JS-11628875e9b680f989d3f62ff15b5533', repository: 'https://artigosluan.notion.site/Pug-JS-11628875e9b680f989d3f62ff15b5533'},
    { id: 19, type: 'guides', content: 'guides.contentCss', background: css, deploy:'https://artigosluan.notion.site/Css3-11628875e9b680568a44ee823d243cc9', repository: 'https://artigosluan.notion.site/Css3-11628875e9b680568a44ee823d243cc9'},
    { id: 20, type: 'guides', content: 'guides.contentSass', background: sass, deploy:'https://artigosluan.notion.site/Sass-11628875e9b680388a6af2c6c0ee0807', repository: 'https://artigosluan.notion.site/Sass-11628875e9b680388a6af2c6c0ee0807'},
    { id: 21, type: 'guides', content: 'guides.contentTailwind', background: tailwind, deploy:'https://artigosluan.notion.site/Tailwind-11628875e9b68074a414cd59bd8212d2', repository: 'https://artigosluan.notion.site/Tailwind-11628875e9b68074a414cd59bd8212d2'},
    { id: 22, type: 'guides', content: 'guides.contentBootstrap', background: bootstrap, deploy:'https://artigosluan.notion.site/Bootstrap-11628875e9b68016bd06faac95987775', repository: 'https://artigosluan.notion.site/Bootstrap-11628875e9b68016bd06faac95987775'},
    { id: 23, type: 'guides', content: 'guides.contentMaterialize', background: materialize, deploy:'https://artigosluan.notion.site/Materialize-11628875e9b680e995a9f909e8ef4d40', repository: 'https://artigosluan.notion.site/Materialize-11628875e9b680e995a9f909e8ef4d40'},
    { id: 24, type: 'guides', content: 'guides.contentGit', background: git, deploy:'https://artigosluan.notion.site/Git-11628875e9b6806ab7efebb4f13ef33c', repository: 'https://artigosluan.notion.site/Git-11628875e9b6806ab7efebb4f13ef33c'},
    { id: 25, type: 'guides', content: 'guides.contentJson', background: json, deploy:'https://artigosluan.notion.site/Json-23328875e9b68020b8edcfe042465e13', repository: 'https://artigosluan.notion.site/Json-23328875e9b68020b8edcfe042465e13'},
    { id: 26, type: 'guides', content: 'guides.contentJavaScript', background: javascript, deploy:'https://artigosluan.notion.site/JavaScript-11628875e9b68046824bee2af040a5e7', repository: 'https://artigosluan.notion.site/JavaScript-11628875e9b68046824bee2af040a5e7'},
    { id: 27, type: 'guides', content: 'guides.contentTypeScript', background: typescript, deploy:'https://artigosluan.notion.site/TypeScript-11628875e9b68024ac07cb35a002c61e', repository: 'https://artigosluan.notion.site/TypeScript-11628875e9b68024ac07cb35a002c61e'},
    { id: 28, type: 'guides', content: 'guides.contentReact', background: react, deploy:'https://artigosluan.notion.site/React-11628875e9b680d29d3fcd69fa1e11b2', repository: 'https://artigosluan.notion.site/React-11628875e9b680d29d3fcd69fa1e11b2'},
    { id: 29, type: 'guides', content: 'guides.contentReactHooks', background: reactHooks, deploy:'https://artigosluan.notion.site/React-Hooks-13528875e9b680aca7bdf89980c2600f', repository: 'https://artigosluan.notion.site/React-Hooks-13528875e9b680aca7bdf89980c2600f'},
    { id: 30, type: 'guides', content: 'guides.contentNext', background: nextJs, deploy:'https://artigosluan.notion.site/Next-11628875e9b680f29263f1e72e5292d6', repository: 'https://artigosluan.notion.site/Next-11628875e9b680f29263f1e72e5292d6'},
    { id: 31, type: 'guides', content: 'guides.contentCssModules', background: cssModules, deploy:'https://artigosluan.notion.site/Css-Modules-11628875e9b68078a231f0aa2c136d07', repository: 'https://artigosluan.notion.site/Css-Modules-11628875e9b68078a231f0aa2c136d07'},
    { id: 32, type: 'guides', content: 'guides.contentStyledComponents', background: styledComponents, deploy:'https://artigosluan.notion.site/Styled-components-11628875e9b680608937e8c6d2a65a17', repository: 'https://artigosluan.notion.site/Styled-components-11628875e9b680608937e8c6d2a65a17'},
    { id: 33, type: 'guides', content: 'guides.contentDocker', background: docker, deploy:'https://artigosluan.notion.site/docker-54c265579b89414797dd686f7aa4d12e', repository: 'https://artigosluan.notion.site/docker-54c265579b89414797dd686f7aa4d12e'},
    { id: 34, type: 'guides', content: 'guides.contentSolar2d', background: solar2d, deploy:'https://artigosluan.notion.site/Solar2d-a87bb48029144bb9a671e972bc59c429', repository: 'https://artigosluan.notion.site/Solar2d-a87bb48029144bb9a671e972bc59c429'},
];

export default projects