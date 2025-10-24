import React from 'react';
import './Principal.css';
import '../../_variables.css';

function Principal() {
    return (
        <main>
            <section className="sectionBanner flex justify-between items-center max-w-[1700px] mx-auto mt-35 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <div className="columnLeft w-200">
                    <h1>Let's get know about me closer</h1><br/>
                    <p>
                    Tiago is a front-end developer in Castelo Branco, focusing on web development. His portfolio features a wide range of work, including website creation.
                    </p>
                </div>
                <div className="columnRight mr-50">
                    <div className="box">
                        <img src="./assets/images/pic.jpg" alt="logo banner"/>
                        <div className="badgeTop"></div>
                        <div className="badgeBottom"></div>
                    </div>
                </div>
            </section>
            <section className="sectionStack block justify-center items-center max-w-[1700px] mx-auto mt-50 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <header> 
                    <h2>My Stack</h2>
                    <h3>Tecnologies i work with</h3>
                </header>
                <div className="imageContainer">
                    <img src="assets/images/vscode-icons_file-type-html.png" alt="html" width="120"/>
                    <img src="assets/images/vscode-icons_file-type-css.png" alt="css" width="120"/>
                    <img src="assets/images/vscode-icons_file-type-js-official.png" alt="js" width="120"/>
                    <img src="assets/images/logos_react.png" alt="react" width="120"/>
                    <img src="assets/images/logos_bootstrap.png" alt="bootstrap" width="120"/>
                    <img src="assets/images/logos_git-icon.png" alt="git" width="120"/>
                    <img src="assets/images/vscode-icons_file-type-vscode.png" alt="vscode" width="120"/>
                    <img src="assets/images/akar-icons_github-fill.png" alt="github" width="120"/>
                </div>
            </section>
            <section className="sectionProjects block justify-center items-center max-w-[1700px] mx-auto mt-50 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <header> 
                    <h2>Projects</h2>
                </header>
                <div className="projectContainer">
                    <div className="projectBox">
                        <header>
                            <img src="./assets/images/Rectangle_30.png" alt="" />
                        </header>
                        <div className="projectContent">
                            <h4> Projeto 1</h4>
                            <p> Client : <span>Meow </span></p>
                            <p> Work : <span>Website Creation </span></p>
                            <p> Tech : <span>HMTL,CSS,Javascript, React+Vite </span></p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="sectionProjects flex justify-center items-center max-w-[1700px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">

            </section>
        </main>
    )
}

export default Principal