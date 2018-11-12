import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ScrollAnimation from './ScrollAnimation'
import { submitContactRequest } from '../redux/reducer'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  font-family: 'Roboto-Regular', sans-serif;
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  line-height: 1;
  
  label {
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: 6px;
    letter-spacing: 0.2px;
  }

  input[id='name'] {
     text-transform: capitalize;
   }
    
  textarea {
    border: 0;
  }
  
  &.small-indent {
    margin-bottom: 13px;
  }
`

const Input = styled.input`
  height: 50px;
  border: 0;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.bg};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 0.88;
  color: ${({ theme }) => theme.colors.grey};
  padding: 17px 13px 15px 13px;
  letter-spacing: normal;
`

const MsgTxtArea = styled.textarea`
  height: 193px;
  color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.bg};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.38;
  padding: 16px 14px 20px 13px;
`

const BtnWrapper = styled.div`
  display: flex;
  margin-top: 19px;
`

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.yellow};
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  @media (max-width: 768px) {
    height: 48px;
  }
`

const ErrorMsg = styled.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.alert};
  margin: 5px 0 0 0;
  visibility: hidden;
`

class ContactForm extends Component {
  static propTypes = {
    credentials: PropTypes.shape({}),
    submitContactForm: PropTypes.func,
    contactForm: PropTypes.shape({
      fetching: PropTypes.bool,
      submitFailed: PropTypes.bool,
      send: PropTypes.bool
    })
  }

  state = {
    fields: {
      name: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      confirmEmail: {
        value: '',
        isValid: false
      },
      messageSubject: {
        value: '',
        isValid: false
      },
      messageText: {
        value: '',
        isValid: false
      }
    },
    formValid: false
  }

  componentDidUpdate (prevProps, prevState) {
    const { fields } = this.state
    if (fields !== prevState.fields) {
      this.checkFormValid()
    }
  }

  handleChange = (e) => {
    const { fields } = this.state
    const el = document.getElementById(`${e.target.name}`)
    this.setState({
      fields: {
        ...fields,
        [e.target.name]: {
          value: e.target.value,
          isValid: el.validity.valid
        }
      }
    })
  }

  checkFormValid = () => {
    const that = this
    let isFormValid = true
    Object.keys(that.state.fields)
      .forEach((key) => {
        if (!that.state.fields[key].isValid) isFormValid = false
      })
    this.setState({ formValid: isFormValid })
  }

  checkIsFieldValid = (e) => {
    const { fields } = this.state
    const alertBgColor = 'rgba(249, 119, 77, 0.1)'
    const inputElt = document.getElementById(`${e.target.name}`)
    const errorMsg = document.getElementById(`${e.target.name}Error`)
    const validity = fields[e.target.name].isValid

    inputElt.style.background = !validity ? alertBgColor : ''
    errorMsg.style.visibility = validity ? 'hidden' : 'visible'

    this.checkFormValid()
  }

  handleSubmit = (e) => {
    const { fields } = this.state
    const { submitContactForm, credentials } = this.props
    e.preventDefault()

    const inputData = {}
    inputData.name = fields.name.value
    inputData.email = fields.email.value
    inputData.email_confirmation = fields.confirmEmail.value
    inputData.subject = fields.messageSubject.value
    inputData.message = fields.messageText.value
    credentials && submitContactForm(inputData)
  }

  render () {
    const { fields, formValid } = this.state
    const { contactForm } = this.props
    const { fetching, submitFailed, send } = contactForm
    const {
      name, email, confirmEmail, messageSubject, messageText
    } = fields
    return (
      <Fragment>
        {!send &&
        (
          <Form noValidate method='post'>
            <ScrollAnimation name='fadeIn' offset={-10}>
              <FormRow>
                <label htmlFor='name'>
                  Full Name*
                </label>
                <Input
                  type='text'
                  id='name'
                  name='name'
                  value={name.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                  required
                />
                <ErrorMsg id='nameError'>
                  Invalid name
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <label htmlFor='email'>
                  Email*
                </label>
                <Input
                  type='email'
                  id='email'
                  required
                  name='email'
                  value={email.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                />
                <ErrorMsg id='emailError'>
                  Invalid email address
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <label htmlFor='confirmEmail'>
                  Confirm Email*
                </label>
                <Input
                  type='email'
                  id='confirmEmail'
                  required
                  name='confirmEmail'
                  value={confirmEmail.value}
                  pattern={email.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                />
                <ErrorMsg id='confirmEmailError'>
                  Emails do not match
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <label htmlFor='messageSubject'>
                  Subject*
                </label>
                <Input
                  type='text'
                  id='messageSubject'
                  required
                  name='messageSubject'
                  value={messageSubject.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                />
                <ErrorMsg id='messageSubjectError'>
                  Please add a message subject
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <label htmlFor='messageText'>
                  Message*
                </label>
                <MsgTxtArea
                  id='messageText'
                  required
                  name='messageText'
                  value={messageText.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                />
                <ErrorMsg id='messageTextError'>
                  Please add a message
                </ErrorMsg>
              </FormRow>
              <BtnWrapper>
                <SubmitBtn type='submit' disabled={!formValid} onClick={this.handleSubmit}>
                  Submit
                </SubmitBtn>
              </BtnWrapper>
            </ScrollAnimation>
          </Form>)}
        {!fetching && send && !submitFailed && <Redirect to='/contact-thank-you' />}
        {!fetching && send && submitFailed && <div>Server connection failed...</div>}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  credentials: state.credentials,
  contactForm: state.contactForm
})

const mapDispatchToProps = dispatch => ({
  submitContactForm: inputData => dispatch(submitContactRequest(inputData))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactForm))
