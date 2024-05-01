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
const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden; 
`
const ProjectAdjust = styled.div`
    padding: 3rem 4.2rem 3rem 4.2rem;
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    max-height: calc(100vh - 6.3rem); 
    margin-top: 3rem;
    animation: ${showingContent} 1s forwards;
    &::-webkit-scrollbar {
        width: 12px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #505050; 
        border-radius: 6px; 
    }
    &::-webkit-scrollbar-track {
        background-color: #1d1d1d;
    }
    scrollbar-width: thin;
    scrollbar-color: #9c9c9c #1d1d1d;
`
const ProjectSize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 3rem;
    @media (max-width: 420px) {
        margin-left: 55px;
    }
`

const Projects = () => {

    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <ProjectAdjust>
                <ProjectSize>
                    <CardProject
                        codeContentKey='project.codeContent1'
                        backgroundImage={imagiflix}
                        linkDeploy='https://fagioni-imagiflix.netlify.app/'
                        linkRepository='https://github.com/DevLuanFagioni/Imagiflix'
                    />
                    <CardProject
                        codeContentKey='project.codeContent2'
                        backgroundImage={freitas}
                        linkDeploy='https://freitaseletrica.netlify.app/'
                        linkRepository='https://github.com/DevLuanFagioni/Freitas-Website'
                    />
                    <CardProject
                        codeContentKey='project.codeContent3'
                        backgroundImage={magbank}
                        linkDeploy='https://fagioni-magbank.netlify.app/'
                        linkRepository='https://github.com/DevLuanFagioni/Magbank'
                    />
                    <CardProject
                        codeContentKey='project.codeContent4'
                        backgroundImage={studion}
                        linkDeploy='https://fagioni-studion-eventos.netlify.app/'
                        linkRepository='https://github.com/DevLuanFagioni/Studion-Eventos'
                    />
                    <CardProject
                        codeContentKey='project.codeContent5'
                        backgroundImage={portfolio}
                        linkDeploy='https://devluanfagioni.netlify.app/'
                        linkRepository='#'
                    />
                    <CardProject
                        codeContentKey='project.codeContent6'
                        backgroundImage={snake}
                        linkDeploy='https://fagioni-snake-game.netlify.app/'
                        linkRepository='https://github.com/DevLuanFagioni/Snake-game'
                    />
                    <CardProject
                        codeContentKey='project.codeContent7'
                        backgroundImage={vsPortfolio}
                        linkDeploy='#'
                        linkRepository='#'
                    />
                    
                </ProjectSize>
            </ProjectAdjust>
        </ProjectContainer>
    )
}

export default Projects