import { motion } from 'framer-motion';
import '../PortfolioPage.css';
import './ProfessionalExperience.css';

interface Experience {
  company: string;
  role: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  highlights: string[];
}

// Professional experience data
const experiences: Experience[] = [
  {
    company: 'Norra Inc. (YC F25)',
    role: 'Software Developer',
    location: 'San Diego, CA',
    dateStart: '09/2025',
    dateEnd: 'Present',
    highlights: [
      'Engineered equipment search system with sub-50ms data retrieval and zero-latency client-side filtering, featuring custom pinch-zoom map using PanResponder/RAF debouncing and schema-driven dynamic filters.',
      'Refactored cross-platform React Native app by rerouting direct Supabase calls through shared service API endpoints, reducing component complexity by 40% while preserving full equipment tracking functionality.',
      'Implemented secure Bearer token authentication between mobile app and web app across 8+ endpoints, ensuring consistent data access and preventing unauthorized equipment management operations.',
      'Addressed API and schema mismatches from production merges by fixing equipment type transformations and location parameters, restoring reliability for equipment management operations.',
    ],
  },
  {
    company: 'AAKO',
    role: 'Software Developer Intern',
    location: 'San Diego, CA',
    dateStart: '02/2025',
    dateEnd: '08/2025',
    highlights: [
      'Debugged and enhanced key features in a Swift-iOS social media app that enables sharing of AR content.',
      'Designed and deployed a landing site in Svelte for the social media platform — shipped MVP in just 3 days.',
      'Standardized UI/UX across 15+ SwiftUI views (Search, Profile, Echo creation) by refining spacing, alignment, and component placement, enhancing overall app polish and user experience.',
      'Implemented comprehensive dark mode support for core components including ProfilePicker, EmojiPicker, and SearchBar by architecting adaptive color schemes across the application.',
      'Resolved SwiftUI rendering issues including misaligned TextEditor cursor bugs by developing custom component structs, improving text input reliability in metadata entry flows.',
      'Enhanced AR onboarding experience by redesigning camera permission and tutorial views with consistent UI patterns, streamlining first-time user adoption of AR features.',
    ],
  },
  {
    company: 'PIMCO',
    role: 'AI Studio Fellow Intern',
    location: 'Newport Beach, CA',
    dateStart: '08/2024',
    dateEnd: '12/2024',
    highlights: [
      'Spearheaded the development of an end-to-end NLP system using Large Language Models (LLMs) to convert natural language questions into SQL queries, accelerating decision-making for 20+ financial specialists by 25%.',
      'Integrated persistent memory capabilities within the LLM to retain context from previous conversations, enhancing the model\'s ability to provide more accurate and contextually relevant queries by 50%.',
      'Engineered an ETL pipeline to extract and clean financial datasets, standardizing data formats across service layers and automating database insertion; reduced processing time by 30% and improved system scalability.',
    ],
  },
];

const ProfessionalExperience = () => {
  return (
    <section className="cp-professional-experience">
      <motion.h2
        className="cp-section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Journey
      </motion.h2>

      <div className="cp-experience-container">
        <div className="cp-experience-line"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="cp-experience-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="cp-experience-dot"></div>

            <div className="cp-experience-card">
              <div className="cp-experience-header">
                <div className="cp-experience-meta">
                  <h3 className="cp-experience-role">{experience.role}</h3>
                  <div className="cp-experience-company">{experience.company}</div>
                  <div className="cp-experience-location">{experience.location}</div>
                </div>
                <div className="cp-experience-date">
                  {experience.dateStart} - {experience.dateEnd}
                </div>
              </div>

              <ul className="cp-experience-highlights">
                {experience.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    className="cp-experience-highlight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
