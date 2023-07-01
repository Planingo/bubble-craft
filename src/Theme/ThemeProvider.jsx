import { ConfigProvider, theme } from "antd"
import { Colors } from "./Colors";
import './index.css'

const { compactAlgorithm } = theme;

const themeAntd = {
  algorithm: [compactAlgorithm, ],
  token: {
      colorPrimary: '#005C91',
      fontSize: 20,
      fontFamily: 'Montserrat'
  },
};

export const ThemeProvider = ({children}) => {
    return <ConfigProvider theme={themeAntd}>
        <Colors />
        {children}
    </ConfigProvider>
}