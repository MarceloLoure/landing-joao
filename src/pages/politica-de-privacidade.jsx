export default function PoliticaPrivacidade() {
  return (
    <div style={{ maxWidth: "800px", margin: "80px auto", padding: "20px", color: "white" }}>
      <h1>Política de Privacidade</h1>

      <p>
        Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos
        as informações fornecidas pelos usuários do programa Dessa Vez Vai.
      </p>

      <h2>1. Coleta de Informações</h2>
      <p>
        Coletamos informações como nome, e-mail, telefone e dados de pagamento
        no momento da compra ou cadastro na página.
      </p>

      <h2>2. Uso das Informações</h2>
      <p>
        As informações são utilizadas para:
      </p>
      <ul>
        <li>Processamento de pagamento</li>
        <li>Liberação de acesso ao programa</li>
        <li>Suporte ao cliente</li>
        <li>Envio de comunicações relacionadas ao produto</li>
      </ul>

      <h2>3. Compartilhamento de Dados</h2>
      <p>
        Não vendemos ou compartilhamos seus dados com terceiros,
        exceto quando necessário para processamento de pagamento
        ou cumprimento de obrigações legais.
      </p>

      <h2>4. Segurança</h2>
      <p>
        Utilizamos medidas técnicas e organizacionais para proteger
        seus dados contra acesso não autorizado.
      </p>

      <h2>5. Seus Direitos</h2>
      <p>
        Nos termos da LGPD (Lei nº 13.709/2018), você pode solicitar
        acesso, correção ou exclusão de seus dados a qualquer momento
        pelo e-mail: suporte@dessavezvai.com
      </p>

      <h2>6. Alterações</h2>
      <p>
        Esta política pode ser atualizada a qualquer momento.
      </p>

      <p>
        Última atualização: {new Date().getFullYear()}
      </p>
    </div>
  );
}
