import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = id => {
		if (window.confirm('Are you sure if you want to delete?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
							</>
						}
					/>

					<Route exact path='/about' element={<AboutPage />} />
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	);
}

export default App;
