import { useIntl } from "react-intl"
import { Link } from "react-router-dom"
import { CancelIcon, CheckIcon, CloudUploadOutlined, DeleteOutlined, DownloadOutlined } from "../Icon/icon"
import { FilterIcon } from "../Icon/icon/FilterIcon"
import { Sort } from "../Sort/Sort"
import { Tooltip } from "../Tooltip/Tooltip"
import { List } from "./List"

const Row = ({ index, data, style }) => {
    const { formatMessage } = useIntl()

    return <Link to={`/students/${data[index].id}`} style={style} className="no-underline text-bluebubblecraft p-1 m-1 flex gap-3 w-full justify-between items-center border-b-4 border-indigo-500 hover:bg-bluebubblecraft hover:bg-opacity-10">
        <div className="w-80">{data[index]?.firstName} {data[index]?.lastName.toUpperCase()}</div>
        <div className="w-40">{data[index]?.pathway.name}</div>
        <div className="w-120">{data[index]?.apprenticeships.map(apprenticeship => apprenticeship.company.name).join(', ')}</div>
        <div className="w-40 text-center">{data[index]?.calendars.length > 0 ? <CheckIcon className="text-greenbubblecraft h-5 w-5" /> : <CancelIcon className='cloud h-5 w-5' />}</div>
        <div className="w-80 flex gap-3">
            <Tooltip placement='left' title={formatMessage({id: "download"})}>
                <DownloadOutlined className='download'/>
            </Tooltip>
            <Tooltip placement='bottom' title={formatMessage({id: "send"})}>
                <CloudUploadOutlined className='cloud'/>
            </Tooltip>
            <Tooltip placement='right' title={formatMessage({id: "delete"})}>
                <DeleteOutlined className='delete'/>
            </Tooltip>
        </div>
    </Link>
}

export const ListStudent = ({data}) => {
    return <>
    <div className="flex gap-3 w-full justify-between bg-bluebubblecraft text-white p-2">
        <>
            <div className="w-80 text-sm flex items-center"><p className="mr-2">Prénom NOM</p><Sort size="20" className="mr-2"/></div>
            <div className="w-40 text-sm flex items-center"><p className="mr-2">Formation</p><Sort size="20" className="mr-2"/><FilterIcon size="20"/></div>
            <div className="w-120 text-sm flex items-center"><p className="mr-2">Entreprise de l'alternance</p><Sort size="20" className="mr-2"/><FilterIcon size="20"/></div>
            <div className="w-40 text-sm flex items-center"><p className="mr-2">Calendrier</p><Sort size="20" className="mr-2"/><FilterIcon size="20"/></div>
        </>
        <div className="w-80 justify-end text-sm items-center"><p>Action</p></div>
    </div>
    <List data={data} Row={Row} />
  </>
}