import React from 'react';
import './loginpage.css';
import { useIntl } from 'react-intl';
import { DrawPart } from './DrawPart/DrawPart';
import { Form as FinalForm, Field } from 'react-final-form'
import { Form } from 'antd';
import { Link } from 'react-router-dom'
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { InputPassword } from '../Input/InputPassword/InputPassword';
import { toCapitalized } from '../../utils/formatText';

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
export const ResetPage = ({
  children,
  onSubmit,
  loading,
  ...props }) => {

  const { formatMessage } = useIntl()

	const requiredEmail = value =>
		value ? undefined : formatMessage({ id: 'error.required' })

  return (
    <div className='storybook-login-page' {...props} >
      <div className='form-login'>
        <h1 className="title">{formatMessage({ id: 'form.reset' }).toUpperCase()}</h1>
        <FinalForm
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <Form onFinish={handleSubmit} layout="vertical">
              <Field name="email" validate={requiredEmail}>
                {({ input, meta }) => (
                  <Form.Item
                    label={toCapitalized(formatMessage({ id: 'form.login.username' }))}
                    validateStatus={
                      meta.touched && meta.error ? 'error' : undefined
                    }
                    help={meta.touched && meta.error}
                  >
                    <Input
                      {...input}
                      type="email"
                      placeholder={formatMessage({
                        id: 'form.login.username.placeholder',
                      })}
                    />
                  </Form.Item>
                )}
              </Field>
              <div className="create-forget">
                <Link className="light-text" to="/signup">
                  {toCapitalized(formatMessage({id: 'form.login.signup'}))}
                </Link>
                <Link className="light-text" to="/login">
                  {toCapitalized(formatMessage({id: 'form.login.login'}))}
                </Link>
              </div>
              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                shape="round"
                size="large"
              >
                {toCapitalized(formatMessage({ id: 'form.send' }))}
              </Button>
            </Form>
          )}
        />
      </div>
      <div className='draw-part'>
        <DrawPart />
      </div>
    </div>
  );
};

ResetPage.propTypes = {
};

ResetPage.defaultProps = {
};
