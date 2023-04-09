import React, { useState, useRef } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Button, Col, Form, Input, message, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import SvgIcon from '@/components/svgIcon';
import { http_user_captcha, http_user_login } from '@/api/system/user';
import { connect } from 'react-redux';
import { setToken } from '@/redux/module/user/action';
import { useMount } from 'ahooks';
import { validateMobile } from '@/utils/validate';
import md5 from 'js-md5';

const LoginForm = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<string>('');

  const { setToken, children } = props;

  const navigate = useNavigate();

  const { t } = useTranslation();
  const formRef = useRef<any>(null);

  const [form] = Form.useForm();

  useMount(async () => {
    await getCaptcha();
    formRef.current.setFieldsValue({
      phone: '18888888888',
      password: '123456'
    });
  });

  // 获取验证码
  const getCaptcha = async () => {
    const res = await http_user_captcha();
    setCaptcha(res.data.captcha);
  };

  // 用户登录
  const userLogin = async () => {
    try {
      await form.validateFields();
      setLoading(true);
      const params = form.getFieldsValue();
      params.password = md5(params.password);
      const res: any = await http_user_login(params);
      if (res.code == 200) {
        const { token, userInfo } = res.data;
        const { phone, nickname, avatarUrl, roleType } = userInfo;
        setToken(token);
        localStorage.setItem('phone', phone);
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('avatar', avatarUrl);
        localStorage.setItem('roleType', roleType);
        navigate('/home/index');
      } else {
        await getCaptcha();
        message.error(res.message);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} ref={formRef} onFinish={userLogin}>
      <Form.Item
        name="phone"
        rules={[
          { required: true, message: t('login.userPhone')! },
          { max: 11, message: '手机长度不合格!' },
          {
            pattern: new RegExp(validateMobile.rule(), 'g'),
            message: '请输入正确格式的手机号码!'
          }
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder={t('login.phoneHolder')!} />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: t('login.userPassword')! }]}>
        <Input.Password
          prefix={<LockOutlined />}
          autoComplete="false"
          type="password"
          placeholder={t('login.passwordHolder')!}
        />
      </Form.Item>

      <Form.Item name={'captcha'} rules={[{ required: true, message: t('login.captcha')! }]}>
        <Row gutter={4}>
          <Col span={18}>
            <Input
              prefix={<SvgIcon width={15} height={15} iconClass={'verifyCode'} />}
              placeholder={t('login.captchaHolder')!}
            />
          </Col>
          <Col className={'captcha'} span={6}>
            <div dangerouslySetInnerHTML={{ __html: captcha }} onClick={getCaptcha} />
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button type="primary" loading={loading} className="login-button" htmlType={'submit'}>
          {t('login.login')}
        </Button>
      </Form.Item>
      <Form.Item>{children}</Form.Item>
    </Form>
  );
};

const mapStateToProps = (state: any) => {
  return state.user;
};

const mapDispatchToProps = { setToken };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm) as any;
