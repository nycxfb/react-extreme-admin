import React, { useState, useEffect } from 'react';
import { setToken } from '@/redux/module/user/action';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { connect } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/components/svgIcon';
import Language from '@/components/language';
import LoginForm from './component/loginForm';
import SignupForm from './component/signupForm';
import style from './index.module.less';
import Tips from '@/components/tips';

const Login = function (props: any) {
  const [formType, setFormType] = useState<string>('login');

  const { setToken } = props;
  const [form] = Form.useForm();
  const { t, i18n } = useTranslation();

  const toggleForm = (type: string) => {
    setFormType(type);
  };

  return (
    <div className={style['login-container']}>
      <div className={'left-part'}>
        <SvgIcon iconClass={'logo_react'} width={270} height={270} />
        <h1>{t('login.slogan')}</h1>
      </div>
      {formType === 'login' ? (
        <div className="login-form">
          <h1 style={{ width: '60%', padding: '15px 0' }}>
            <SvgIcon height={35} width={35} iconClass={'logo-new'} />
            {t('login.welcome')}
          </h1>
          <LoginForm>
            <div>
              {t('login.account')}
              <a
                href="javascript:void(0)"
                onClick={() => {
                  toggleForm('signup');
                }}
                style={{ marginLeft: '5px' }}
              >
                {t('login.register')}
              </a>
            </div>
          </LoginForm>
        </div>
      ) : (
        <div className="login-form">
          <h1 style={{ width: '60%', padding: '15px 0' }}>{t('login.register')}</h1>
          <SignupForm
            onToggleForm={() => {
              toggleForm('login');
            }}
          />
        </div>
      )}
      <Language />
    </div>
  );
};
export default Login;
