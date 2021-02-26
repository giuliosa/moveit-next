import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/giuliosa.png" alt="profile picture"/>
            <div>
                <strong>Giulio Sá</strong>
                <p>
                    <img src="icons/level.svg" alt="Icone de level up"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}