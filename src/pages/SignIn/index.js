import React, { useRef } from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import { Form } from '@unform/web';
import Input from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedinIn } from 'react-icons/fa'
import Button from '../../components/Button'
import Logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import api from '../../services/api'
import GoogleLogin from 'react-google-login'
import { signInRequest } from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'

const SignIn = (props) => {

  const dispatch = useDispatch()

  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Esse campo é obrigatório.'),
        password: Yup.string().min(6).required('Esse campo é obrigatório.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      dispatch(signInRequest(data))
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

  const responseGoogle = async (res) => {
    console.log(res.tokenId)
    const response = await api.post('/session/google', res.tokenId)
    console.log(response)
  }

  return(
    <S.Container>
      <S.Header>
        <img src={Logo} />
      </S.Header>
     <S.Form>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <S.Title>Faça login no Antial</S.Title>
          </Grid>
          <Grid item xs={12}>
            <Input Icon={MdEmail} name="email" type="email" autocomplete="off" placeholder="Digite o email" />
          </Grid>
          <Grid item xs={12}>
            <Input Icon={MdLock} name="password" type="password" autocomplete="off" placeholder="Insira a senha" />
          </Grid>
          <Grid item xs={12}>
          <S.Text>Esqueceu sua senha?</S.Text>
          </Grid>
          <Grid item xs={12}>
            <Button fullwidth>Entrar</Button>
          </Grid>
          <Grid item xs={12}>
          <p style={{ textAlign: "center"}}>Ou</p>
          </Grid>
          <Grid item xs={12}>
          <GoogleLogin 
              clientId="401477861342-koiphmpa9gif1bqruuk7re1q7bpsv2kp.apps.googleusercontent.com"
              render={renderProps => (
                <S.Button onClick={renderProps.onClick}>
              <FcGoogle style={{ marginRight: 15 }} color="#0274B3" size={16} />
              Entrar com Google
            </S.Button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="btn btn-outline-danger"
            />
          </Grid>
          <Grid item xs={12}>
            <S.Button>
              <FaLinkedinIn style={{ marginRight: 15 }} color="#0274B3" size={16} />
              Entrar com Linkedin
            </S.Button>
          </Grid>
        </Grid>
      </Form>
     </S.Form>
     <S.Bottom>
        <p>Não tem uma conta ainda? <Link to="/cadastrar"><span>Cadastre-se.</span></Link></p>
      </S.Bottom>
    </S.Container>
  )
}

export default SignIn
