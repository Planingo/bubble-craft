import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { NoData } from "../NoData/NoData";
import { SkeletonImage } from "../Skeleton/SkeletonImage";
import "./gallery.css";

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
export const Gallery = ({ loading, count, name, Add, datas, ...props }) => {
  const intl = useIntl();

  if (loading)
    return (
      <div className="storybook-gallery-loading">
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(<SkeletonImage key={i} />);
          }
          return rows;
        })([], 0, count)}
      </div>
    );

  if (datas?.length === 0)
    return (
      <NoData
        Add={Add}
        cta={intl.formatMessage({ id: `app.add.${name}` })}
        description={intl.formatMessage({ id: `no.data.${name}` })}
        title={intl.formatMessage({ id: `app.add.${name}` })}
      />
    );

  return (
    <div className="storybook-gallery">
      {datas &&
        datas?.map((data) => (
          <div className="container-gallery" key={data.id}>
            <Link to={`/${name}/${data?.id}`}>
              <Card
                tags={data?.tags}
                downloadTitle={data?.actions?.downloadTitle}
                cloudTitle={data?.actions?.cloudTitle}
                deleteTitle={data?.actions?.deleteTitle}
                link={data?.link}
                title={data?.name}
                archived={data?.archived}
                alt={data?.alt}
                src={data?.photo}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

Gallery.propTypes = {};

Gallery.defaultProps = {};
