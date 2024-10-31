import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import AboutMilton from './AboutMilton';
import AboutOlho from './AboutOlho';
import FacultyBanner from './FacultyBanner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import LabPillars from './LabPillars';
import { Sponsors } from './Sponsors';
import Statistics from './Statistics';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <AboutOlho />
    <LabPillars />
    <Sponsors />
    <AboutMilton />
    <Statistics />
    <FacultyBanner />
    <Footer />
  </div>
);

export { Base };
