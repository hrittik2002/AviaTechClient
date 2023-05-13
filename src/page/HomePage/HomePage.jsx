import React, { useState } from "react";
import styles from "./HomePage.module.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,

    ModalBody,

    Button,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        // handle login logic
        console.log("Username:", username);
        console.log("Password:", password);
        setShowModal(false);
    };

    return (
        <div>
            {/* Navbar */}
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>AviaTech</div>
                <div className={styles.navItems}>
                    <div className={styles.navItem} onClick={() => setShowModal(true)}>
                        Login
                    </div>
                    <Link className={styles.navItem} to="/search">
                        Register
                    </Link>
                </div>
            </div>
            {/* Modal */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} isCentered className={styles.modal}>
                <ModalOverlay />
                <ModalContent className={styles.modalDialog}>
                    <ModalHeader className={styles.modalHeader}>
                        <div className={styles.modalTitle}>Login</div>
                        <button className={styles.modalClose} onClick={() => setShowModal(false)}>
                            &times;
                        </button>
                    </ModalHeader>
                    <ModalBody className={styles.modalBody}>
                        <form onSubmit={handleLogin}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Password</FormLabel>
                                <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </FormControl>
                            <Button  type="submit" className={styles.modalButton}>
                                Login
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>
    );
};

export default HomePage;
