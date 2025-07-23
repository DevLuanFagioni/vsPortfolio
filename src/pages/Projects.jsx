import TabFiles from './Layout/TabFiles'
import styled, { keyframes } from 'styled-components'
import CardProject from '../components/CardProject'
import freitas from '../assets/projects/freitas.png'
import imagiflix from '../assets/projects/imagiflix.png'
import magbank from '../assets/projects/magbank.png'
import portfolio from '../assets/projects/portfolio.png'
import vsPortfolio from '../assets/projects/vsPortfolio.png'
import snake from '../assets/projects/snake.png'
import studion from '../assets/projects/studion.png'
import { useTranslation } from "react-i18next";
import { useState } from 'react'

const showingContent = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const ContainerButton = styled.div`
    width: 100%;
    min-width: 300px;
    margin: 20px 0px 40px 0px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        gap: 1rem;
        margin-left: 30px;
    };

    @media (max-width: 400px) {
        margin: 0 auto;
        margin-bottom: 40px
    }
   
`

const Button = styled.button`
    font-size: 1.5rem;
    min-width: 150px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #4e4e4e;
    padding: 8px 16px;
    border-radius: 5px;
    color: #fafafa;
    font-family: "Fjalla One", sans-serif;

    &:hover{
        color: #303030;
    };

    @media (max-width: 600px) {
        min-width: 100px;
        font-size: 1rem;
    };

    @media (max-width: 460px) {
        min-width: 100%
    }
`

const ProjectContainer = styled.div`
    width: 100%;
`
const ProjectAdjust = styled.div`
    padding: 3rem 4.2rem 3rem 4.2rem;
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    max-height: calc(100vh); 
    margin-top: 3rem;
    animation: ${showingContent} 1s forwards;
    &::-webkit-scrollbar {
        width: 20px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #505050; 
        border-radius: 6px; 
    }
    &::-webkit-scrollbar-track {
        background-color: #1d1d1d;
    }
    scrollbar-color: #9c9c9c #1d1d1d;
`
const ProjectSize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 3rem;
    @media (max-width: 600px) {
        margin-left: 55px;
    }
`

const Projects = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');

    const projects = [
        { id: 1, type: 'frontend', content: 'project.contentImagiflix', background: imagiflix, deploy:'https://fagioni-imagiflix.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Imagiflix'},
        { id: 2, type: 'frontend', content: 'project.contentFreitas', background: freitas, deploy:'https://freitaseletrica.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Freitas-Website'},
        { id: 3, type: 'frontend', content: 'project.contentMagbank', background: magbank, deploy:'https://fagioni-magbank.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Magbank'},
        { id: 4, type: 'frontend', content: 'project.contentPortfolio', background: portfolio, deploy:'https://portfolio-exemplo-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/portfolio-example'},
        { id: 5, type: 'frontend', content: 'project.contentVsPortfolio', background: vsPortfolio, deploy:'https://luanfagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/vsPortfolio'},
        { id: 6, type: 'frontend', content: 'project.contentStudion', background: studion, deploy:'https://fagioni-studion-eventos.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Studion-Eventos'},
        { id: 8, type: 'frontend', content: 'project.contentPeriodicTableSound', background: imagiflix, deploy:'https://periodic-table-sound.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Periodic-table-sound'},
        { id: 9, type: 'frontend', content: 'project.contentCyberPunkPortfolio', background: imagiflix, deploy:'https://cyber-portfolio-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/CyberPunk-portfolio'},
        { id: 10, type: 'frontend', content: 'project.contentImcReact', background: imagiflix, deploy:'https://imc-react-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/imc-react'},
        { id: 11, type: 'frontend', content: 'project.contentOpinaCine', background: imagiflix, deploy:'https://opina-cine.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Opina-cine'},
        { id: 12, type: 'frontend', content: 'project.contentWallet', background: imagiflix, deploy:'https://wallet-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Wallet'},
        { id: 13, type: 'frontend', content: 'project.contentFabricaDeMonstros', background: imagiflix, deploy:'https://fagioni-fabrica-de-monstros.netlify.app/', repository: 'https://github.com/DevLuanFagioni/Fabrica-de-monstros'},
        { id: 14, type: 'frontend', content: 'project.contentRickAndMorty', background: imagiflix, deploy:'https://rick-and-morty-fagioni.netlify.app/', repository: 'https://github.com/DevLuanFagioni/rick-and-morty-api'},
        { id: 15, type: 'frontend', content: 'project.contentIgniteFeed', background: imagiflix, deploy:'', repository: 'https://github.com/DevLuanFagioni/ignite-feed'},
        { id: 16, type: 'frontend', content: 'project.contentStateWeb', background: imagiflix, deploy:'https://fagioni-state.netlify.app/', repository: 'https://github.com/DevLuanFagioni/State-web'},

        { id: 17, type: 'guides', content: 'guides.contentHtml', background: snake, deploy:'', repository: ''},
        { id: 18, type: 'guides', content: 'guides.contentPugJs', background: snake, deploy:'', repository: ''},
        { id: 19, type: 'guides', content: 'guides.contentCss', background: snake, deploy:'', repository: ''},
        { id: 20, type: 'guides', content: 'guides.contentSass', background: snake, deploy:'', repository: ''},
        { id: 21, type: 'guides', content: 'guides.contentTailwind', background: snake, deploy:'', repository: ''},
        { id: 22, type: 'guides', content: 'guides.contentBootstrap', background: snake, deploy:'', repository: ''},
        { id: 23, type: 'guides', content: 'guides.contentMaterialize', background: snake, deploy:'', repository: ''},
        { id: 24, type: 'guides', content: 'guides.contentJson', background: snake, deploy:'', repository: ''},
        { id: 25, type: 'guides', content: 'guides.contentJavaScript', background: snake, deploy:'', repository: ''},
        { id: 26, type: 'guides', content: 'guides.contentTypeScript', background: snake, deploy:'', repository: ''},
        { id: 27, type: 'guides', content: 'guides.contentReat', background: snake, deploy:'', repository: ''},
        { id: 28, type: 'guides', content: 'guides.contentReactHooks', background: snake, deploy:'', repository: ''},
        { id: 29, type: 'guides', content: 'guides.contentNext', background: snake, deploy:'', repository: ''},
        { id: 30, type: 'guides', content: 'guides.contentCssModules', background: snake, deploy:'', repository: ''},
        { id: 31, type: 'guides', content: 'guides.contentStyledComponents', background: snake, deploy:'', repository: ''},
        { id: 32, type: 'guides', content: 'guides.contentDocker', background: snake, deploy:'', repository: ''},
        { id: 33, type: 'guides', content: 'guides.contentSolar2d', background: snake, deploy:'', repository: ''},
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <ProjectAdjust>
                <ContainerButton>
                    <Button onClick={() => setFilter('frontend')} >{t("project.frontEndTitle")}</Button>
                    <Button onClick={() => setFilter('backend')} >{t("project.backEndTitle")}</Button>
                    <Button onClick={() => setFilter('fullstack')} >{t("project.fullStackTitle")}</Button>
                    <Button onClick={() => setFilter('guides')} >{t("project.guidesTitle")}</Button>
                    <Button onClick={() => setFilter('all')}>{t("project.allTitle")}</Button>
                </ContainerButton>

                <ProjectSize>
                    {filteredProjects.map(project => (
                        <CardProject 
                            key={project.id}
                            codeContentKey={project.content}
                            backgroundImage={project.background}
                            linkDeploy={project.deploy}
                            linkRepository={project.repository}
                        />
                    ))}
                </ProjectSize>
            </ProjectAdjust>
        </ProjectContainer>
    )
}

export default Projects