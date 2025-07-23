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

    { id: 17, type: 'guides', content: 'guides.contentHtml', background: htmlLogo, deploy:'', repository: ''},
    { id: 18, type: 'guides', content: 'guides.contentPugJs', background: pugJs, deploy:'', repository: ''},
    { id: 19, type: 'guides', content: 'guides.contentCss', background: css, deploy:'', repository: ''},
    { id: 20, type: 'guides', content: 'guides.contentSass', background: sass, deploy:'', repository: ''},
    { id: 21, type: 'guides', content: 'guides.contentTailwind', background: tailwind, deploy:'', repository: ''},
    { id: 22, type: 'guides', content: 'guides.contentBootstrap', background: bootstrap, deploy:'', repository: ''},
    { id: 23, type: 'guides', content: 'guides.contentMaterialize', background: materialize, deploy:'', repository: ''},
    { id: 24, type: 'guides', content: 'guides.contentGit', background: git, deploy:'', repository: ''},
    { id: 26, type: 'guides', content: 'guides.contentJson', background: json, deploy:'', repository: ''},
    { id: 26, type: 'guides', content: 'guides.contentJavaScript', background: javascript, deploy:'', repository: ''},
    { id: 27, type: 'guides', content: 'guides.contentTypeScript', background: typescript, deploy:'', repository: ''},
    { id: 28, type: 'guides', content: 'guides.contentReat', background: react, deploy:'', repository: ''},
    { id: 29, type: 'guides', content: 'guides.contentReactHooks', background: reactHooks, deploy:'', repository: ''},
    { id: 30, type: 'guides', content: 'guides.contentNext', background: nextJs, deploy:'', repository: ''},
    { id: 31, type: 'guides', content: 'guides.contentCssModules', background: cssModules, deploy:'', repository: ''},
    { id: 32, type: 'guides', content: 'guides.contentStyledComponents', background: styledComponents, deploy:'', repository: ''},
    { id: 33, type: 'guides', content: 'guides.contentDocker', background: docker, deploy:'', repository: ''},
    { id: 34, type: 'guides', content: 'guides.contentSolar2d', background: solar2d, deploy:'', repository: ''},
];

export default projects