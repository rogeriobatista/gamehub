import './App.css'
import discord from './assets/images/social/discord.png'
import instagram from './assets/images/social/instagram.png'
import twitch from './assets/images/social/twitch.png'
import youtube from './assets/images/social/youtube.png'
import { Space, Layout, Col } from 'antd'
const { Header, Footer, Sider, Content } = Layout


const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'rgba(82, 25, 81, 0.8)',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'rgba(82, 25, 81, 0.8)',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'rgba(82, 25, 81, 0.8)',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'rgba(82, 25, 81, 0.8)',
};

function App() {

  return (
    <Space direction="vertical" style={{ width: '100%' }} >
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Sider style={siderStyle}>
          <iframe src="https://discord.com/widget?id=1145439085226369194&theme=dark" width="350" height="100%" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </Sider>
        <Layout style={{ backgroundColor: 'transparent' }}>
          <Header style={headerStyle}>
            <Col span={16} offset={5}>
              <h1>Game Hub: O Coração da Comunidade Gamer</h1>
            </Col>
          </Header>
          <Content style={contentStyle}>
            <Col span={16} offset={5}>
              <p>Bem-vindo à Game Hub, o epicentro da comunidade gamer onde jogadores, streamers e administradores de servidores privados se reúnem para celebrar a paixão pelos jogos!</p>

              <h2>O que é a Game Hub?</h2>
              <p>A Game Hub é mais do que apenas uma plataforma; é um espaço criado para conectar entusiastas de games de todos os cantos do mundo. Aqui, você encontrará:</p>

              <p>🎮 Jogadores compartilhando suas experiências, dicas e truques.</p>
              <p>🎙 Streamers mostrando seus gameplays, interagindo com seus seguidores e expandindo suas comunidades.</p>
              <p>🌍 Servidores Privados dos mais variados jogos, oferecendo experiências únicas e personalizadas.</p>

              <h2>Nossa Missão</h2>
              <p>Unir a Comunidade! Na Game Hub, acreditamos que, juntos, somos mais fortes. Seja você um gamer casual, um streamer em ascensão ou um administrador de servidor dedicado, há um lugar para você aqui.</p>

              <h2>Por que se juntar à Game Hub?</h2>
              <p>Conexão Global: Conecte-se com jogadores de todo o mundo e expanda seus horizontes.</p>
              <p>Aprendizado Contínuo: Troque dicas, truques e conselhos com outros membros para melhorar suas habilidades.</p>
              <p>Descubra Novos Jogos: Com uma variedade tão ampla de servidores e jogadores, sempre há algo novo para descobrir.</p>
              <p>Apoio da Comunidade: Seja ouvindo os conselhos de um veterano ou apoiando um streamer iniciante, a Game Hub é sobre dar e receber apoio.</p>

              <h2>Junte-se a Nós!</h2>
              <p>Pronto para mergulhar no mundo da Game Hub? Se você é apaixonado por games e busca uma comunidade que compartilha da mesma paixão, você encontrou o lugar certo.</p>
            </Col>
          </Content>
          <Footer style={footerStyle}>
            <Col>
              <h3>Conheça nossas redes sociais</h3>
              <a href="https://discord.com/invite/gamehub-br" target='_blank'><img src={discord} className="social-icon" /></a>
              <a href="https://www.instagram.com/game_hub_oficial" target='_blank'><img src={instagram} className="social-icon" /></a>
              <a href="https://www.twitch.tv/gamehubtvoficial" target='_blank'><img src={twitch} className="social-icon" /></a>
              <a href="https://www.youtube.com/@GameHubTVOficial" target='_blank'><img src={youtube} className="social-icon" /></a>
            </Col>
          </Footer>
        </Layout>
      </Layout>
    </Space>
  )
}

export default App
