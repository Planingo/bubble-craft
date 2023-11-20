import { Calendar } from "../Calendar/Calendar"
import { Constraints } from "../Constraints/Constraints"

export const Details = ({constraints, ...props}) => {
    return <div className="flex w-full">
        <Constraints constraints={constraints} className="w-1/3"/>
        <Calendar className="w-2/3 h-full" />
    </div>
}