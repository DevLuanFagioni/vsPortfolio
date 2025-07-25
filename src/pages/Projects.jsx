import TabFiles from './Layout/TabFiles'
import styled, { keyframes } from 'styled-components'
import CardProject from '../components/CardProject'
import { useTranslation } from "react-i18next";
import { useState } from 'react'
import projects from '../helpers/projects'

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