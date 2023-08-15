import { useIntl } from "react-intl"
import { toCapitalized } from "../../utils/formatText"
import { Button } from "../Button/Button"
import { Empty } from "../Empty/Empty"

export const Constraints = ({constraints, ...props}) => {
    console.log('[C] constraints : ', constraints)
    const {formatMessage} = useIntl()
    return <div {...props}>
        <h1>{toCapitalized(formatMessage({id: "app.details.constraints"}))}</h1>
        {!constraints ? <>
            <Empty description={toCapitalized(formatMessage({id: "app.empty.constraints"}))} />
            <Button className='bg-orangebubblecraft'>Créer une contrainte</Button>
        </> : <>
            {constraints.constraints?.minSchool && <p>Durée de la formation entre {constraints.constraints.minSchool} heures et {constraints.constraints.maxSchool} heures</p>}
            {constraints.constraints?.schoolPlace && <p>Lieux de la formation : {constraints.constraints.schoolPlace}</p>}
        </> }
    </div>
}