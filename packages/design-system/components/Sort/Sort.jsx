import { ArrowDownIcon, ArrowUpIcon } from "../Icon/icon"

export const Sort = ({className, classNameUp, classNameDown, size, ...props}) => {
    return <div className="flex flex-col">
        <ArrowUpIcon {...props.up} className={`${className} ${classNameUp}`} size={size} />
        <ArrowDownIcon {...props.down} className={`${className} ${classNameDown}`} size={size} />
    </div>
}