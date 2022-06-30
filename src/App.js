import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
    const [isActived, setIsActived] = useState(false);

    const handleModal = status => {
        setIsActived(status);
    };

    return (
        <div className="App">
            <Modal isActived={isActived} handleModal={handleModal} />
            <button type="button" onClick={() => handleModal(true)}>
                open modal
            </button>
        </div>
    );
}

export default App;
