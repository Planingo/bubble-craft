import { Link } from "react-router-dom"
import { Tooltip } from "../Tooltip/Tooltip"
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined, ExportOutlined } from "../Icon/icon"
import { useIntl } from 'react-intl';

export const Actions = ({to,
downloadTitle,
cloudTitle,
deleteTitle}) => {
    const { formatMessage } = useIntl()
    return <div className='actions'>
        <Link to={to} replace={true}>
            <Tooltip title='Détail' placement='bottom'>
                <ExportOutlined className='download' />
            </Tooltip>
        </Link>
        <Tooltip title={formatMessage({id: downloadTitle}) || formatMessage({id: 'download'})} placement='bottom'>
            <DownloadOutlined className='download' />
        </Tooltip>
        <Tooltip title={formatMessage({id: cloudTitle}) || formatMessage({id: 'send'})} placement='bottom'>
            <CloudUploadOutlined className='cloud' />
        </Tooltip>
        <Tooltip title={formatMessage({id: deleteTitle}) || formatMessage({id: 'delete'})} placement='bottom'>
            <DeleteOutlined className='delete' />
        </Tooltip>
    </div>
}