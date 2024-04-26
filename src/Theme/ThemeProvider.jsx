import { ConfigProvider, theme } from "antd";
import React from "react";
import { Colors } from "./Colors";
import './index.css';

const { compactAlgorithm } = theme;

const themeAntd = {
  algorithm: [compactAlgorithm, ],
  token: {
    colorPrimary: '#005C91',
    colorPrimary200: '#001E27',
    colorPrimary180: '#003B4E',
    colorPrimary160: '#005874',
    colorPrimary140: '#00769B',
    colorPrimary120: '#0193C2',
    colorPrimary100: '#0198C3',
    colorPrimary080: '#66BEDA',
    colorPrimary060: '#99D4E7',
    colorPrimary040: '#CCE9F3',
    colorPrimary020: '#E5F4F9',
    colorSecondary: '#EEB341',
    colorSecondary200: '#2F2003',
    colorSecondary180: '#5D4007',
    colorSecondary160: '#8C600A',
    colorSecondary140: '#BB800E',
    colorSecondary120: '#EAA013',
    colorSecondary100: '#EEB341',
    colorSecondary080: '#F2C671',
    colorSecondary060: '#F7D9A0',
    colorSecondary040: '#FBECD0',
    colorSecondary020: '#FDF6E7',
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