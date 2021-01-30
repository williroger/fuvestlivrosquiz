import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <Widget>
        <Widget.Header>
            <h1>Livros FUVEST</h1>
          </Widget.Header>
        <Widget.Content>
            <h1>Livros FUVEST</h1>
            <p>Leituras obrigatórias para o vestibular da FUVEST 2021</p>
        </Widget.Content>
      </Widget>
        
        <Widget>
        <Widget.Content> 
            <h1>Quiz da Galera</h1>
            <p>Loren Loren Loren Loren Loren</p>
        </Widget.Content>
        </Widget>
        <Footer />
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/williroger" />
  </QuizBackground>
  );
}
