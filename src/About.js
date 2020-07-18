import React from 'react';
import CGNavbar from "./Components/Navbar/CGNavbar";

const About = () => {
    return (
        <div>
            <CGNavbar/>
            <div className="mx-3 mt-3">
                <h4>Aplicação Web desenvolvida por Gonçalo Nunes nº20079 LEI 2ºano</h4>
                <p>Email: aluno20079@ipt.pt</p>
                <p>O CineGest trata-se de uma aplicação web que serve para gerir um aglomerado de cinemas. Também
                    tem a
                    capacidade de servir como ponto de venda de bilhetes para filmes.<br/>
                    O método de pagamento não está a encaminhar para nenhuma entidade externa pelo que só serve de
                    simulação.
                    Com o cargo de Admin é possível gerir a aplicação de modo a gerir cinemas, sessões, filmes e
                    utilizadores.<br/>
                    O utilizador registado pode apenas ver os filmes atuais e se houver uma sessão para o filme,
                    comprar o bilhete.</p>
                <p>Bibliotecas:</p>
                <ul>
                    <li>Bootstrap -
                        <a href="https://fonts.google.com/specimen/Inter">
                            https://react-bootstrap.github.io/
                        </a>
                    </li>
                    <li>React Recoil -
                        <a href="https://recoiljs.org/">
                            https://recoiljs.org/
                        </a>
                    </li>
                    <li>Axios -
                        <a href="https://github.com/axios/axios">
                            https://github.com/axios/axios
                        </a>
                    </li>
                    <li>React multi carousel -
                        <a href="https://www.npmjs.com/package/react-multi-carousel">
                            https://www.npmjs.com/package/react-multi-carousel</a>
                    </li>
                    <li>Google Inter font -
                        <a href="https://fonts.google.com/specimen/Inter">
                            https://fonts.google.com/specimen/Inter
                        </a>
                    </li>
                </ul>
                <p>Frameworks:</p>
                <ul>
                    <li>
                        React
                    </li>
                </ul>
                <p>Dados de acesso na seed:</p>
                <ul>
                    <li>Admin
                        <ul>
                            <li>Email: admin@admin</li>
                            <li>Password: admin</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;