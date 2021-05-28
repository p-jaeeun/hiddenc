import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { login, signUp } from '../services/auth';

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 250px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  outline: none;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.input`
  outline: none;
  background: #000;
  border: 1px solid #000;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
`;

const ToggleBtn = styled.div`
  font-size: 0.8rem;
  cursor: pointer;
  padding: 20px 5px;
`;

const StyledLink = styled(Link)`
  margin-left: 10px;
  font-weight: bold;
  border-bottom: 1px solid #000;
`;

const AuthForm = ({ authType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      if (authType === '회원가입') {
        await signUp(email, password).then((res) => console.log(res));
      } else {
        await login(email, password).then((res) => console.log(res));
      }
    } catch (error) {
      throw alert(error);
    }
  };
  return (
    <FormWrapper>
      <Form onSubmit={handleOnSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="이메일을 입력하세요."
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="비밀번호를 입력하세요."
          required
        />

        <Button type="submit" value={authType} />
      </Form>
      {authType === '회원가입' ? (
        <ToggleBtn>
          <span>이미 계정이 있으신가요?</span>
          <StyledLink to="/login">로그인</StyledLink>
        </ToggleBtn>
      ) : (
        <ToggleBtn>
          <span>아직 회원이 아니신가요?</span>
          <StyledLink to="/signup">회원가입</StyledLink>
        </ToggleBtn>
      )}
    </FormWrapper>
  );
};

export default AuthForm;
