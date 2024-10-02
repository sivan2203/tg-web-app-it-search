import styles from "./styles.module.css";
import {useNavigate, useParams} from "react-router-dom";
import { vacancies } from "../../shared/mock";
import {useEffect, useState} from "react";

const Vacancy = () =>  {
    const [vacancy, setVacancy] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams()

    const goBack = () => {
        navigate('/')
    }

    useEffect(() => {
            setVacancy(vacancies.find(item => item.id === +id));
    }, [id])

    return (
        <>
            <div className={styles.backButton} onClick={goBack}>
                <img src="/images/left_arrow.png" alt="back_icon" height="24"/>
            </div>
            <div className={styles.itemHeader}>
                <div className={styles.logoBox}>
                    <img src="/images/ya_logo.png" alt="yandex_logo" height="30"/>
                    <span className={styles.logoTitle}>{vacancy?.company_name}</span>
                </div>
                <div className={styles.tags}>
                    <div className={styles.tag}>{vacancy?.location}</div>
                    <div className={styles.tag}>{vacancy?.work_format}</div>
                    <div className={styles.tag}>{vacancy?.work_experience}</div>
                </div>
            </div>
            <div className={styles.title}>
                {vacancy?.title}
            </div>
            <div className={styles.description}>
                {vacancy?.description}
            </div>

            <div className={styles.buttonsBox}>
                <div className={styles.btnRedirect} onClick={() => console.log('redirect')}>
                    Перейти на вакансию
                </div>
                <div className={styles.btnCopy} onClick={() => console.log('copy')}>
                    <img src="/images/copy.png" alt="copy" height="16"/>
                </div>
            </div>
        </>
    )
}

export default Vacancy;