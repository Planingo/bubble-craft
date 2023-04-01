import React from 'react';
import PropTypes from 'prop-types';
import './loginpage.css';
import { useIntl } from 'react-intl';
import { DrawPart } from './DrawPart/DrawPart';
import { Form as FinalForm, Field } from 'react-final-form'
import { Form } from 'antd';
import { Link } from 'react-router-dom'
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { InputPassword } from '../Input/InputPassword/InputPassword';

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
export const LoginPage = ({
  children,
  onSubmit,
  loading,
  ...props }) => {

  const { formatMessage } = useIntl()

	const requiredEmail = value =>
		value ? undefined : formatMessage({ id: 'error.required' })

	const requiredPassword = value => {
		if (!value) return formatMessage({ id: 'error.required' })

		if (value.length < 9)
			return formatMessage({ id: 'error.password.character' })

		return undefined
	}

  return (
    <div className='storybook-login-page' {...props} >
      <div className='form-part'>
        <h1>{formatMessage({ id: 'form.login' })}</h1>
        <FinalForm
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <Form onFinish={handleSubmit} layout="vertical">
              <Field name="email" validate={requiredEmail}>
                {({ input, meta }) => (
                  <Form.Item
                    label={formatMessage({ id: 'form.login.username' })}
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
              <Field name="password" validate={requiredPassword}>
                {({ input, meta }) => (
                  <Form.Item
                    label={formatMessage({ id: 'form.login.password' })}
                    validateStatus={
                      meta.touched && meta.error ? 'error' : undefined
                    }
                    help={meta.touched && meta.error}
                  >
                    <InputPassword
                      {...input}
                      placeholder={formatMessage({
                        id: 'form.login.password.placeholder',
                      })}
                    />
                  </Form.Item>
                )}
              </Field>
              <div className="links">
                <Link className="" to="reset">
                  {formatMessage({
                    id: 'form.login.forget',
                  })}
                </Link>
                <Link className="" to="signup">
                  {formatMessage({
                    id: 'form.login.signup',
                  })}
                </Link>
              </div>
              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                shape="round"
                size="large"
              >
                {formatMessage({ id: 'form.login.login' })}
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

LoginPage.propTypes = {
};

LoginPage.defaultProps = {
};
