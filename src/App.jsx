import { Suspense, lazy } from 'react';
import { WorldWrapper } from './components/WorldWrapper';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';

// Lazy load heavier sections
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then(module => ({ default: module.Certifications })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Education = lazy(() => import('./components/Education').then(module => ({ default: module.default })));

function App() {
  return (
    <WorldWrapper>
      <Nav />
      <main>
        <Hero />
        <TechStrip />
        <Suspense fallback={<div className="h-screen flex items-center justify-center px-6 text-center font-mono text-2xl sm:text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white">ADITYA SHARMA</div>}>
          <About />
          <TechStrip />
          <Education />
          <TechStrip />
          <Skills />
          <TechStrip />
          <Projects />
          <TechStrip />
          <Certifications />
          <TechStrip />
          <Contact />
        </Suspense>
      </main>
    </WorldWrapper>
  );
}

export default App;
