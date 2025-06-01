import { ContentProvider } from './providers/ContentProvider';
import { Analytics } from '@vercel/analytics/react';

import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<ContentProvider>
			<Analytics />
			<Layout>
				<Hero />
				<Experience />
				<Projects />
				<Contact />
			</Layout>
		</ContentProvider>
	);
}

export default App;
