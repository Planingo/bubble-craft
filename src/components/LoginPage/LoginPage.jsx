import { Form } from "antd";

import { Field, Form as FinalForm } from "react-final-form";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { toCapitalized } from "../../utils/formatText";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { InputPassword } from "../Input/InputPassword/InputPassword";
import { DrawPart } from "./DrawPart/DrawPart";
import "./loginpage.css";

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
export const LoginPage = ({ children, onSubmit, loading, ...props }) => {
  const { formatMessage } = useIntl();

  const requiredEmail = (value) =>
    value ? undefined : formatMessage({ id: "error.required" });

  const requiredPassword = (value) => {
    if (!value) return formatMessage({ id: "error.required" });

    if (value.length < 9)
      return formatMessage({ id: "error.password.character" });

    return undefined;
  };

  return (
    <div className="storybook-login-page" {...props}>
      <div className="form-login">
        <h1 className="title">
          {formatMessage({ id: "form.login" }).toUpperCase()}
        </h1>
        <FinalForm
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <Form onFinish={handleSubmit} layout="vertical">
              <Field name="email" validate={requiredEmail}>
                {({ input, meta }) => (
                  <Form.Item
                    label={toCapitalized(
                      formatMessage({ id: "form.login.username" })
                    )}
                    validateStatus={
                      meta.touched && meta.error ? "error" : undefined
                    }
                    help={meta.touched && meta.error}
                  >
                    <Input
                      {...input}
                      type="email"
                      placeholder={formatMessage({
                        id: "form.login.username.placeholder",
                      })}
                    />
                  </Form.Item>
                )}
              </Field>
              <Field name="password" validate={requiredPassword}>
                {({ input, meta }) => (
                  <Form.Item
                    label={toCapitalized(
                      formatMessage({ id: "form.login.password" })
                    )}
                    validateStatus={
                      meta.touched && meta.error ? "error" : undefined
                    }
                    help={meta.touched && meta.error}
                  >
                    <InputPassword
                      {...input}
                      placeholder={formatMessage({
                        id: "form.login.password.placeholder",
                      })}
                    />
                  </Form.Item>
                )}
              </Field>
              <div className="create-forget">
                <Link className="light-text" to="/reset">
                  {toCapitalized(formatMessage({ id: "form.login.forget" }))}
                </Link>
                <Link className="light-text" to="/signup">
                  {toCapitalized(formatMessage({ id: "form.login.signup" }))}
                </Link>
              </div>
              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                shape="round"
                size="large"
              >
                {toCapitalized(formatMessage({ id: "form.login.login" }))}
              </Button>
            </Form>
          )}
        />
      </div>
      <div className="draw-part">
        <DrawPart />
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};
