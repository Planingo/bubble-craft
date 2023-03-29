import { theme } from 'antd'
import { useEffect } from 'react'

const { useToken } = theme

export const Colors = () => {
    const { token } = useToken()

    useEffect(() => {
        document.body.style.setProperty('--PRIMARY', token.colorPrimary)
        document.body.style.setProperty('--SECONDARY', token.orange5)
        document.body.style.setProperty('--RED', token.red5)
        document.body.style.setProperty('--WHITE', token.colorWhite)
        document.body.style.setProperty('--TITLE', `${token.fontSizeXL}px`)
    },[token.colorPrimary])


    return <></>

}