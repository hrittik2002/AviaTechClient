import React, { useState } from "react";
import styles from './HomePage.module.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            { /* Navbar */}
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>AviaTech</div>
                <div className={styles.navItems}>
                    <Link className={styles.navItem} onClick={() => setShowModal(true)} to="/">
                        login
                    </Link>
                    <Link className={styles.navItem} to="/search">
                        register
                    </Link>
                </div>
            </div>
            {/* Modal */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        hi
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default HomePage;