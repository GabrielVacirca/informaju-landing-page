import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Problem from '../../components/Problem/Problem.jsx';
import TrustedGuide from '../../components/TrustedGuide/TrustedGuide.jsx';
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx';
import Sources from '../../components/Sources/Sources.jsx';
import Audience from '../../components/Audience/Audience.jsx';
import About from '../../components/About/About.jsx';
import Governance from '../../components/Governance/Governance.jsx';
import FinalCTA from '../../components/FinalCTA/FinalCTA.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problem />
        <TrustedGuide />
        <HowItWorks />
        <Sources />
        <Audience />
        <About />
        <Governance />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
