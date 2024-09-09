import "./template.css";

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
export const Template = ({ children, ...props }) => {
  return (
    <template className="storybook-template" {...props}>
      {children}
    </template>
  );
};

Template.propTypes = {
  /**
   * TODO property
   */
};

Template.defaultProps = {};
