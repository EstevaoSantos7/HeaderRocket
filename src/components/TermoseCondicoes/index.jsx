import style from './style.module.css'
export default function TermoseCondicoes (){
    return(
        <section>
            <div className={style.TermoseCondicoes}>
            <div className={style.titulo}>
                <h1>Termos e Condições</h1>
            <div className={style.cor}>
                <h1>Rocket Bet</h1>
            </div>
            <div className={style.introducao}>
                <h1>Introdução</h1>
            </div>
            </div>
            <div className={style.texto}>
               <span>Bem-vindo ao Rocket Bett! Estes Termos e Condições regulam o uso do nosso site e dos serviços de apostas fornecidos. Ao acessar e utilizar o site, você concorda com todas as disposições estabelecidas neste documento. Caso não concorde com os termos, recomendamos que não continue utilizando nossos serviços.</span>
               <div className={style.texto1}>
                <h2> Requisitos de Idade</h2>
                <h1>Para participar das apostas no Rocket Bet, é necessário ser maior de idade, conforme as leis do seu país de residência. O uso do site por menores de idade é estritamente proibido. A Rocket Bet reserva-se o direito de solicitar documentos que comprovem a idade do usuário e bloquear o acesso a usuários menores de idade.</h1>
               </div>
               <div className={style.texto1}>
                <h2> Cadastro e Conta do Usuário</h2>
                <h1>Para realizar apostas, você deve criar uma conta no Rocket Bet. O processo de cadastro exige a fornecimento de informações verídicas, completas e atualizadas. Você é o único responsável por manter a confidencialidade dos dados da sua conta, incluindo a senha, e por todas as atividades realizadas nela.</h1>
               </div>
               <div className={style.texto1}>
                <h2>Responsabilidade do Usuário</h2>
                <h1>O usuário é responsável por todas as apostas feitas em sua conta, independentemente de serem feitas por ele ou por terceiros. A Rocket Bet não se responsabiliza por quaisquer perdas ou danos decorrentes do uso indevido da conta ou de falhas no sistema de segurança.</h1>
               </div>
               <div className={style.texto1}>
                <h2>Apostas e Pagamentos</h2>
                <h1>As apostas realizadas no Rocket Bet são processadas em tempo real, conforme os valores definidos no momento da transação. O valor mínimo de depósito, os métodos de pagamento e os limites de apostas podem variar, e você deverá consultar a seção correspondente do site para mais informações. A Rocket Bet não se responsabiliza por transações realizadas de forma equivocada ou fraudulentas.</h1>
               </div>
               <div className={style.texto1}>
                <h2> Política de Bônus e Promoções</h2>
                <h1>Quaisquer bônus ou promoções oferecidos pela Rocket Bet são sujeitos a termos e condições específicos, que estarão claramente descritos no momento da oferta. A Rocket Bet reserva-se o direito de alterar ou encerrar promoções a qualquer momento, sem aviso prévio, conforme necessário.</h1>
               </div>
               <div className={style.texto1}>
                <h2>Jogo Responsável</h2>
                <h1>A Rocket Bet promove o jogo responsável e disponibiliza ferramentas para que os usuários controlem seus hábitos de apostas, como limites de depósito e autoexclusão. Se você sentir que o jogo está afetando negativamente sua vida, sugerimos que procure ajuda especializada.

</h1>
               </div>
               <div className={style.texto1}>
                <h2>Propriedade Intelectual</h2>
                <h1>Todo o conteúdo presente no site da Rocket Bet, incluindo, mas não se limitando a, gráficos, textos, logotipos, software e designs, são de propriedade exclusiva da Rocket Bet e estão protegidos por leis de propriedade intelectual. O uso não autorizado desses materiais é estritamente proibido.</h1>
               </div>
               <div className={style.texto1}>
                <h2>Modificações nos Termos</h2>
                <h1>A Rocket Bet reserva-se o direito de modificar ou atualizar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor assim que publicadas no site, sendo da responsabilidade do usuário verificar periodicamente as atualizações.</h1>
               </div>
               <div className={style.texto1}>
                <h2>Limitação de Responsabilidade</h2>
                <h1>A Rocket Bet não será responsável por quaisquer danos diretos, indiretos, acidentais, consequenciais ou punitivos decorrentes do uso do site ou da impossibilidade de uso dos serviços. O site é oferecido "no estado em que se encontra" e a Rocket Bet não garante a continuidade ou a ausência de erros nos serviços prestados.</h1>
               </div>
               <div className={style.texto1}>
                <h2>Legislação Aplicável</h2>
                <h1>Estes Termos e Condições serão regidos e interpretados de acordo com as leis do país onde a Rocket Bet está registrada. Quaisquer disputas serão resolvidas nos tribunais competentes da jurisdição correspondente.</h1>
               </div>
            </div>
            <div className={style.footer}>
                <div className={style.footer1}>
                <p>Se tiver dúvidas ou precisar de mais informações, entre em contato com a nossa equipe de suporte ao cliente </p>
                <div className={style.footerText}>
                    <p>através do e-mail</p>
                    <p id={style.suporte}>suporte@rocketbet.com</p>
                    <p>ou pelo nosso</p>
                    <p id={style.central}>Central de ajuda</p>
                    <p>disponível no site.</p>
                </div>
                </div>
                <div className={style.footer2}><p>Ao utilizar os serviços do Rocket Bet, você concorda com os Termos e Condições aqui descritos.</p></div>
            </div>
            </div>
        </section>
    )
}