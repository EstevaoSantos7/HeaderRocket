import stlye from './style.module.css'
import Perfil from '../../images/centralImg/Male User.png'
import Coins from '../../images/centralImg/Coins.png'
import Key from '../../images/centralImg/Key.png'
import { FaCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';

export default function CentralDeAjuda() {
    const [conta, setConta] = useState(false)
    const [carteira, setCarteira] = useState(false)
    const [seguranca, setSeguranca] = useState(false)
    return (
        <>
            <div className={stlye.centralContainer}>
                <h1>Central de ajuda</h1>
                <div className={stlye.barraPesquisa}>
                    <IoSearchSharp size={38} />
                    <input type="search" placeholder='Deixe sua pergunta...' />
                </div>
                <h2>Mais Perguntados</h2>
                <div className={stlye.maisGrid}>
                    <div className={stlye.maisCardConta}>
                        <div className={stlye.maisImage}>
                            <img src={Perfil} alt="" />
                        </div>
                        <div className={stlye.cardText}>
                            <h3>Conta e Verificação</h3>
                            <p>Recursos sobre as configurações gerais e recuperação da sua conta.</p>
                        </div>
                        {
                            conta ? (
                                <div className={stlye.cardLerMais}>
                                    <div className={stlye.LerMaisText}>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Cadastro:</h4>
                                            <p>Informações pessoais e métodos de pagamento.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Verificação de identidade:</h4>
                                            <p>Envio de documentos como RG, CPF e comprovante de residência.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Verificação KYC:</h4>
                                            <p>Confirmação da maioridade e prevenção de fraudes.
                                                Segurança: Autenticação de dois fatores (2FA) e proteção de dados pessoais.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                    </div>
                                    <div className={stlye.cardBotao}>
                                        <button onClick={() => setConta(false)}>Ler menos</button>
                                    </div>
                                </div>
                            ) :
                                (

                                    <div className={stlye.cardBotao}>
                                        <button onClick={() => setConta(true)}>Ler mais</button>
                                    </div>

                                )
                        }
                    </div>

                    <div className={stlye.maisCardCarteira}>
                        <div className={stlye.maisImage}>
                            <img src={Coins} alt="" />
                        </div>
                        <div className={stlye.cardText}>
                            <h3>Carteira</h3>
                            <p>Informações e recursos relacionados ao saldo da conta, depósitos e retiradas.</p>
                        </div>
                        {
                            carteira ? (
                                <div className={stlye.cardLerMais}>
                                    <div className={stlye.LerMaisText}>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Definição:</h4>
                                            <p>A carteira de um site de apostas é a área onde o usuário gerencia seus saldos, depósitos e retiradas.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Depósitos: </h4>
                                            <p>Opções para adicionar fundos, como cartões de crédito, transferências bancárias, e carteiras digitais.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Retiradas:</h4>
                                            <p>Solicitação de saque dos ganhos para métodos de pagamento registrados.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Saldo:</h4>
                                            <p>Exibe o valor disponível para apostas ou retiradas.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Histórico de transações:</h4>
                                            <p>Registro detalhado de depósitos, retiradas e apostas feitas.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Segurança: </h4>
                                            <p>Proteção de dados financeiros com criptografia e autenticação de dois fatores (2FA).</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Limites:</h4>
                                            <p>Alguns sites impõem limites de depósito ou saque, de acordo com a política da plataforma.</p>
                                        </div>
                                    </div>
                                    <div className={stlye.cardBotao}>
                                        <button onClick={() => setCarteira(false)}>Ler menos</button>
                                    </div>
                                </div>
                            ) :
                                (

                                    <div className={stlye.cardBotao}>
                                        <button onClick={() => setCarteira(true)}>Ler mais</button>
                                    </div>

                                )
                        }

                    </div>

                    <div className={stlye.maisCardChave}>
                        <div className={stlye.maisImage}>
                            <img src={Key} alt="" />
                        </div>
                        <div className={stlye.cardText}>
                            <h3>Segurança</h3>
                            <p>Informações e recursos de segurança.</p>
                        </div>
                        {
                            seguranca ? (
                                <div className={stlye.cardLerMais}>
                                    <div className={stlye.LerMaisText}>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Cadastro:</h4>
                                            <p>Informações pessoais e métodos de pagamento.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Verificação de identidade:</h4>
                                            <p>Envio de documentos como RG, CPF e comprovante de residência.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Verificação KYC:</h4>
                                            <p>Confirmação da maioridade e prevenção de fraudes.
                                                Segurança: Autenticação de dois fatores (2FA) e proteção de dados pessoais.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                        <div className={stlye.LerMaisDesc}>
                                            <FaCircle color='#406493' />
                                            <h4>Validação de conta:</h4>
                                            <p>Após verificação, conta liberada para apostas e transações.</p>
                                        </div>
                                    </div>
                                    <div className={stlye.cardBotao}>
                                        <button onClick={() => setSeguranca(false)}>Ler menos</button>
                                    </div>
                                </div>
                            ) :
                                (

                                    <div className={stlye.cardBotao}>
                                        <button onClick={() => setSeguranca(true)}>Ler mais</button>
                                    </div>

                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}