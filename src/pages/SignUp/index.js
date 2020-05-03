import React, { useState, useRef } from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import { Form } from '@unform/web';
import Input from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedinIn } from 'react-icons/fa'
import Button from '../../components/Button'
import Logo from '../../assets/img/logo.svg'
import * as Yup from 'yup'
import { signUpRequest } from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'


const SignIn = () => {

  const dispatch = useDispatch()
  
  const formRef = useRef(null);

  const [withEmail, setWithEmail] = useState(false)
  const [email, setEmail] = useState('')

  const handleClickEmail = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Esse campo é obrigatório.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      setEmail(data.email)
      reset()
      setWithEmail(true)
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  const handleSubmit = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Esse campo é obrigatório.'),
        password: Yup.string().min(6).required('Esse campo é obrigatório.'),
        confirmPassword: Yup.string().min(6).required('Esse campo é obrigatório.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      dispatch(signUpRequest({
        ...data,
        email
      }))
      reset()
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return(
    <S.Container>
      <S.Header>
        <img src={Logo} />
      </S.Header>
     <S.Form>
        {withEmail ? (
      <Form ref={formRef} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <S.Title>Crie uma conta</S.Title>
          </Grid>
          <Grid item xs={12}>
            <Input name="name" type="text" autocomplete="off" placeholder="Nome completo" />
          </Grid>
          <Grid item xs={12}>
            <Input name="password" type="password" autocomplete="off" placeholder="Senha" />
          </Grid>
          <Grid item xs={12}>
            <Input name="confirmPassword" type="password" autocomplete="off" placeholder="Confirmar senha" />
          </Grid>
          <Grid item xs={12}>
            <S.Confirm>
            Ao se cadastrar, você confirma que leu e aceitou nossos
            Termos de serviço e nossa Política de privacidade.
            </S.Confirm>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullwidth>Cadastrar</Button>
          </Grid>
        </Grid>
      </Form>
        ) : (
        <Form ref={formRef} onSubmit={handleClickEmail}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <S.Title>Crie uma conta</S.Title>
          </Grid>
          <Grid item xs={12}>
            <Input Icon={MdEmail} name="email" type="email" autocomplete="off" placeholder="Digite o email" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullwidth>Continuar</Button>
          </Grid>
          <Grid item xs={12}>
          <p style={{ textAlign: "center"}}>Ou</p>
          </Grid>
          <Grid item xs={12}>
            <S.Button type="submit">
              <FcGoogle style={{ marginRight: 15 }} size={16} />
              Entrar com Google
            </S.Button>
          </Grid>
          <Grid item xs={12}>
            <S.Button type="submit">
              <FaLinkedinIn style={{ marginRight: 15 }} color="#0274B3" size={16} />
              Entrar com Linkedin
            </S.Button>
          </Grid>
        </Grid>
        </Form>
        )}
     </S.Form>
    </S.Container>
  )
}

export default SignIn
