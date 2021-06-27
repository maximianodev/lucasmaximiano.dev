import React, { ReactElement } from 'react';
import * as S from "../styles/pages/About/styles";
import Head from "next/head"
interface Props {

}

export default function About({ }: Props): ReactElement {

    return (
        <S.AboutMk>
            <Head>
                <title>Sobre</title>
            </Head>
            <div className="container">
                <section className="section-1">
                    <h2>Minha trajetória 🌎</h2>
                    <p>
                        Nasci em <a href="https://pt.wikipedia.org/wiki/Atibaia" target="_blank" rel="noopener noreferrer">Atibaia</a> interior de
                        São Paulo e morei lá até meus 17 anos, então fui para uma cidade mais afastada da Capital, <a href="https://pt.wikipedia.org/wiki/Joanopolis" target="_blank" rel="noopener noreferrer">Joanópolis-SP</a>.
                        Me casei aos 20 e hoje estou em transição para <a href="https://pt.wikipedia.org/wiki/Bragança_Paulista" target="_blank" rel="noopener noreferrer">Bragança Paulista - SP</a>.
                    </p>
                    <div className="images">
                        <div>
                            <img src="https://media.graphcms.com/WYbKHIDTyKSfiiImVtWg" alt="Atibaia" />
                            <small>Atibaia - SP <span>1997 - 2015</span></small>
                        </div>
                        <div>
                            <img src="https://media.graphcms.com/u13WQY5RWyDSBLGCBPOj" alt="Joanópolis" />
                            <small>Joanópolis - SP <span>2015 - 2021</span></small>
                        </div>
                        <div>
                            <img src="https://media.graphcms.com/cYlT8DE4SZWi2XemxQuf" alt="Bragança Paulista " />
                            <small>Bragança Paulista - SP <span>2021</span></small>
                        </div>
                    </div>
                </section>

                <section className="section-2">
                    <h2>Trabalho 🔨</h2>
                    <p>Comecei a trabalhar aos 14 anos em uma pastelaria, tive um infância bem simples e de muito esforço. Passei por vários trabalhos, dês de Atendimento como no McDonald´s até onde estou hoje como Programador.</p>
                </section>

                <section className="section-3">
                    <h2>Tecnologia e Eu 💻</h2>
                    <p>Dês de pequeno amei computadores, aos meus 10 anos tive meu primeiro contato, foi fascinante e ao mesmo tempo divertido.</p>
                    <p>Levava esse lado mais como um <i>Hobbie</i> e não como um lado <strong>profissional</strong>, nunca me imaginava trabalhando com tecnologia.</p>
                    <p>Aos <strong>18 anos</strong>, quando sai do Ensino Médio, estava perdido, não sabia em qual área aplicar. Neste meio termo eu já estava me divertindo com <strong>programação</strong>, porém onde eu morava era muito distante da capital e as chances de achar uma vaga de emprego eram muito poucas.</p>
                    <p>Então aos 22 anos, peguei firme nos estudos de programação e comecei minha faculdade EAD, hoje estou em fase de conclusão do curso e estou trabalhando na área como <strong>Desenvolvedor</strong>.</p>
                </section>

                <section className="section-4">
                    <h2>Hobbies & Culturas 🚴‍♀️</h2>
                    <img src="https://media.graphcms.com/QsHG82ydTteieIHK2btf" alt="" />
                    <p>Gosto muito da cultura <strong>Minimalismo</strong>, tento aplicar ela em tudo na minha vida. </p>
                    <p>Ando bastante de <strong>Bike</strong>, <i>gosto de mais da conta hahah. 😂</i> </p>
                    <p>Gosto bastante de musica <strong>Clássica</strong> e toco <strong>Violino</strong>.</p>
                </section>
            </div>
        </S.AboutMk>
    )
}
