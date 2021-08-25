import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Modal from './components/Shared/Modal/Modal';
import Table from './components/Table/Table';
import Upload from './components/Upload/Upload';
import TableState from './context/table/TableState';

function App() {
	const [modalOpen, setmodalOpen] = useState(false);
	return (
		<TableState>
			<div className='container'>
				<Header />
				<button onClick={() => setmodalOpen(true)}>open</button>
				<div className='base-layout'>
					{modalOpen && (
						<Modal closeModal={setmodalOpen}>
							<Upload />
						</Modal>
					)}
					<Table />
				</div>
			</div>
		</TableState>
	);
}

export default App;
