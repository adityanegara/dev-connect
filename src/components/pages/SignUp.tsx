import React from 'react'
import styled from '@emotion/styled'
import registerImage from '../../assets/images/register.jpg'
import Container from '../atoms/Container'
import Title from '../atoms/Title'
import AuthenticationHeader from '../organisms/AuthenticationHeader'
import SignupForm from '../organisms/SignupForm'

const SingupFormWrapper = styled.div({
  marginTop: '5vh'
})

const SignupPage = styled.section(({ theme }) => ({
  // marginTop: '3vh',
  // paddingBottom: '8vh',
  display: 'flex',
  flex: 1,
  height: '100%',
  '.test': {
    width: '50vw',
    height: 'inherit',
    backgroundColor: 'red',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  '.wele': {
    marginTop: '3vh',
    width: '50vw'
  }
}))

const SignUp = (): JSX.Element => {
  return (
    <SignupPage>
      <div className='test'>
        <img src={registerImage}/>
      </div>
      <div className='wele'>
      <Container size={90}>
        <>
          <Title text="<Dev Connect/>" />
          <AuthenticationHeader
            header="Sign up"
            paragraph="If you already have an account You can"
            linkText="Login here!"
          />
          <SingupFormWrapper>
            <SignupForm />
          </SingupFormWrapper>
        </>
      </Container>
      </div>

    </SignupPage>
  )
}

export default SignUp
