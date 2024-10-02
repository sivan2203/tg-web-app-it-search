import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const VacancyListItem = ({
                             id,
                             company_name,
                             companyLogo,
                             work_experience,
                             work_format,
                             location,
                             title,
                             short_description,
                             description
}) =>  {
    const navigate = useNavigate();
    return (
        <div className={styles.itemBox} onClick={() => navigate(`/vacancy/${id}`)}>
            <div className={styles.itemHeader}>
                <div className={styles.logoBox}>
                    <img src="/images/ya_logo.png" alt="yandex_logo" height="30" />
                    <span className={styles.logoTitle}>{company_name}</span>
                </div>
                <div className={styles.tags}>
                    <div className={styles.tag}>{location}</div>
                    <div className={styles.tag}>{work_format}</div>
                    <div className={styles.tag}>{work_experience}</div>
                </div>
            </div>
            <div className={styles.title}>
            {title}
            </div>
            <div className={styles.description}>
                {short_description}
            </div>
        </div>
    )
}

export default VacancyListItem;