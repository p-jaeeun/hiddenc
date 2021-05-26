import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  padding: 20px;
`;
const StyledLink = styled(Link)`
  margin-left: 20px;
  font-weight: bold;
  border-bottom: 1px solid #000;
`;

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <FormWrapper>
      <Form>
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="이메일을 입력하세요."
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
          required
        />

        <Button type="submit" value={newAccount ? '회원가입' : '로그인'} />
      </Form>
      <ToggleBtn onClick={toggleAccount}>
        {newAccount ? (
          <React.Fragment>
            이미 계정이 있으신가요?
            <StyledLink to="/login">로그인</StyledLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            아직 회원이 아니신가요?
            <StyledLink to="/signup">회원가입</StyledLink>
          </React.Fragment>
        )}
      </ToggleBtn>
    </FormWrapper>
  );
};

export default AuthForm;
