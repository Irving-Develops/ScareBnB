import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpot from '../SpotPage/EditSpot';

export default function EditSpotModal ({spot}) {
    const [showModal, setShowModal] = useState(false)

    function handleChange() {
        setShowModal(false)
    }

    return (
        <div>
            <button style={{width: '100px', height: '36px', backgroundColor: 'var(--main)', border: 'none', borderRadius: ' 8px', marginTop: '45px', color: 'white'}} onClick={() => setShowModal(true)}>Edit Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpot spot={spot} setShowModal={setShowModal}/>
                </Modal>
            )}
        </div>
    )
}