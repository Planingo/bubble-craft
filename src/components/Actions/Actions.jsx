import { useIntl } from 'react-intl';
import { Link } from "react-router-dom";
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined, ExportOutlined } from "../Icon/icon";
import { Tooltip } from "../Tooltip/Tooltip";

export const Actions = ({to,
downloadTitle,
cloudTitle,
deleteTitle,
disabledDownload = false,
disabledSend = false,
downloadTitleOnClick,
...props}) => {
    const { formatMessage } = useIntl()
    return <div className='actions'>
        <Link to={to} replace={true}>
            <Tooltip title={formatMessage({id: 'detail'})} placement='bottom'>
                <ExportOutlined className='download to-click'/>
            </Tooltip>
        </Link>
        <Tooltip title={formatMessage({id: downloadTitle.id}, {values: downloadTitle.values}) || formatMessage({id: 'download'})} placement='bottom'>
            <DownloadOutlined className={`download ${disabledDownload ? 'disabled' : 'to-click'}`} onClick={downloadTitleOnClick} />
        </Tooltip>
        <Tooltip title={formatMessage({id: cloudTitle.id}, {values: cloudTitle.values}) || formatMessage({id: 'send'})} placement='bottom'>
            <CloudUploadOutlined className={`cloud ${disabledSend ? 'disabled' : 'to-click'}`}/>
        </Tooltip>
        <Tooltip title={formatMessage({id: deleteTitle.id}, {values: deleteTitle.values}) || formatMessage({id: 'delete'})} placement='bottom'>
            <DeleteOutlined className='delete to-click' onClick={props.deleteOnClick} />
        </Tooltip>
    </div>
}