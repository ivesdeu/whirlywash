import { lazy, Suspense } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { SocialProof } from './components/social-proof';
import { PlanComparison } from './components/plan-comparison';
import { Services } from './components/services';
import { Footer } from './components/footer';

// Lazy load below-the-fold components for better performance
const WhyChoose = lazy(() => import('./components/why-choose').then(m => ({ default: m.WhyChoose })));
const Process = lazy(() => import('./components/process').then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import('./components/testimonials').then(m => ({ default: m.Testimonials })));
const ServiceArea = lazy(() => import('./components/service-area').then(m => ({ default: m.ServiceArea })));
const CTASection = lazy(() => import('./components/cta-section').then(m => ({ default: m.CTASection })));

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <PlanComparison />
        <Services />
        <Suspense fallback={<div className="h-96" />}>
          <WhyChoose />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Process />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <ServiceArea />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
