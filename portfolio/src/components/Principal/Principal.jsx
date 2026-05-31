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
                    Miau Tiago is a front-end developer in Castelo Branco, focusing on web development. His portfolio features a wide range of work, including website creation.
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px] mt-[100px] max-w-[1300px] mx-auto justify-items-center">
                    
                    {/* PROJETO 1 */}
                    <div className="projectBox">
                        <header>
                            <img src="./assets/images/project1.png" alt="" />
                        </header>
                        <div className="projectContent">
                            <h4> Previsão de Popularidade de Noticias </h4>
                            <p> Client : <span>IPCB PROJECT </span></p>
                            <p> Work : <span>Project Creation </span></p>
                            <p> Tech : <span>Python, SQL, HTML/CSS, GitHub Actions</span></p>
                        </div>
                    </div>

                    {/* PROJETO 2 */}
                    <div className="projectBox">
                        <header>
                            <img src="./assets/images/Rectangle_30.png" alt="" />
                        </header>
                        <div className="projectContent">
                            <h4> SOON </h4>
                            <p> Client : <span> </span></p>
                            <p> Work : <span> </span></p>
                            <p> Tech : <span></span></p>
                        </div>
                    </div>

                    {/* PROJETO 3 */}
                    <div className="projectBox">
                        <header>
                            <img src="./assets/images/Rectangle_30.png" alt="" />
                        </header>
                        <div className="projectContent">
                            <h4> SOON </h4>
                            <p> Client : <span> </span></p>
                            <p> Work : <span> </span></p>
                            <p> Tech : <span></span></p>
                        </div>
                    </div>

                    {/* PROJETO 4 */}
                    <div className="projectBox">
                        <header>
                            <img src="./assets/images/Rectangle_30.png" alt="" />
                        </header>
                        <div className="projectContent">
                            <h4> SOON </h4>
                            <p> Client : <span> </span></p>
                            <p> Work : <span> </span></p>
                            <p> Tech : <span></span></p>
                        </div>
                    </div>

                </div> {/* A GRELHA FECHA AQUI */}
            </section>
        </main>
    )
}

export default Principal