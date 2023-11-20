import { useIntl } from "react-intl"
import { Link } from "react-router-dom"
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined } from "../Icon/icon"
import { Sort } from "../Sort/Sort"
import { Tooltip } from "../Tooltip/Tooltip"
import { List } from "./List"

const Row = ({ index, data, style }) => {
    const { formatMessage } = useIntl()

    return <Link to={`/professors/${data[index].id}`} style={style} className="no-underline text-bluebubblecraft p-1 m-1 flex gap-3 w-full justify-between items-center border-b-4 border-indigo-500 hover:bg-bluebubblecraft hover:bg-opacity-10">
        <div className="w-80">{data[index]?.firstName} {data[index]?.lastName.toUpperCase()}</div>
        <div className="w-80">{data[index]?.modules.map(module => module.module.name).join(", ")}</div>
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

export const ListProfessor = ({data}) => {
    return <>
    <div className="flex gap-3 w-full justify-between bg-bluebubblecraft text-white p-2">
        <>
            <div className="w-80 text-sm flex items-center"><p className="mr-2">Prénom NOM</p><Sort size="20" className="mr-2"/></div>
            <div className="w-80 text-sm flex items-center"><p className="mr-2">Modules</p></div>
        </>
        <div className="w-80 justify-end text-sm items-center"><p>Action</p></div>
    </div>
    <List data={data} Row={Row} />
  </>
}