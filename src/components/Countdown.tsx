import styles from '../styles/components/Countdown.module.css';
import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown, 
    } = useContext(CountdownContext);

    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countDownButton}>
                    Ciclo encerrado  <img src="icons/check_circle.svg" alt="Icone de level up" />                   
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            onClick={resetCountDown}>
                                Abandonar ciclo  <img src="icons/close.svg" alt="Icone de level up" />
                        </button>
                    ) : (
                            <button
                                type="button"
                                className={styles.countDownButton}
                                onClick={startCountDown}>
                                    Iniciar um ciclo  <img src="icons/play.svg" alt="Icone de level up" />
                            </button>
                        )}
                </>
            )}

            

            

            
        </div>
    );
}