import VacancyListItem from "./VacancyListItem";
import { vacancies } from "../../shared/mock";

const VacancyList = () =>  {
    return (
        <>
            {vacancies?.map(vacancy => {
                return <VacancyListItem key={vacancy.id} {...vacancy}  />
            })}
        </>
    )
}

export default VacancyList;