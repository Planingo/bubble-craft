import { useIntl } from "react-intl";
import { Empty } from "../Empty/Empty";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import "./globalpage.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 *
 *
 */
export const GlobalPage = ({
  navigation,
  header,
  footer,
  children,
  ...props
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className="storybook-global-page" {...props}>
      <Navigation {...navigation} />
      <div className="right-part">
        <div className="top-part">
          <Header {...header} />
        </div>
        <div className="bottom-part">
          {children || (
            <Empty description={<p>{formatMessage({ id: "app.empty" })}</p>} />
          )}
        </div>
        <div className="footer">
          <p>{footer}</p>
        </div>
      </div>
    </div>
  );
};

GlobalPage.propTypes = {};

GlobalPage.defaultProps = {};
