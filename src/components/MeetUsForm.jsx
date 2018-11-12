import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { withRouter, Redirect } from 'react-router-dom'
import IMAGES from '../utils/ImagesProvider'
import { COME_FROM } from '../content/meetusContent'
import { submitMeetUsRequest } from '../redux/reducer'

const Form = styled.form`
  display: flex;
  text-align: left;
  max-width: 100%;
  justify-content: flex-start;
  
  >div:first-child {
    margin: 0 6.112% 0 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
    max-width: 344px;
    width: 100%;
    margin: 0;
  }
  @media (max-width: 560px) {
    max-width: 100%;
  }
`

const FormCol = styled.div`
    max-width: 360px;
    width: 46%;
  @media (max-width: 1000px) {
    max-width: 344px;
    width: 100%;
    min-width: auto;
  }
  @media (max-width: 560px) {
    max-width: 100%;
  }
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;

  label {
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: 6px;
    line-height: 1.29;
  }
  
  input {
    height: 50px;
    border: 0;
    border-radius: 0;
    background: ${({ theme }) => theme.colors.snow};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 0.88;
    color: ${({ theme }) => theme.colors.grey};
    padding: 19px 13px 15px 13px;
  }
  
   input[id='name'] {
     text-transform: capitalize;
   }
    
  textarea {
    border: 0;
  }
`

const StageTxtArea = styled.textarea`
  height: 100px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.38;
  letter-spacing: normal;
  padding: 15px 14px 20px 13px;
  @media (max-width: 560px) {
     height: 120px;
  }
`

const StageTxtAreaLabel = styled.label`
  line-height: 13px;
  margin-bottom: 13px !important;
`

const HelpTxtAreaLabel = styled.label``

const HelpTxtArea = styled.textarea`
  height: 193px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.38;
  letter-spacing: normal;
  padding: 15px 14px 20px 13px;
`

const LabelHint = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

const Select = styled.div`
  position: relative;
`

const SelectHeader = styled.div`
  height: 50px;
  border: none;
  outline: none;
  border-radius: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px 18px 13px 13px;
  background: ${({ theme }) => theme.colors.snow};
  cursor: pointer;
  
  >div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${({ theme }) => theme.fontSize.medium};
`

const SelectOptions = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 5px;
  padding-top: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.19), 0 4px 20px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  border: solid 1px #e0e0e0;
  z-index: 10;
`

const Option = styled.div`
  width: 100%;
  height: 40px;
  padding: 12px 10px 12px 13px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  
  &.selected {
    background: ${({ theme }) => theme.colors.bg};
  }
`

const ArrowIconWrapper = styled.div`
  height: 100%;
`

const ArrowIcon = styled.img`
  width: 6px;
  height: 11px;
  transform: rotate(90deg);

  &.pointToTop {
    transform: rotate(-90deg);
    animation: open 300ms linear;
  }
  
  @keyframes open {
    from {
      transform: rotate(90deg)
    }
    to {
      transform: rotate(-90deg)
    }
  }
`

const SelectWrapper = styled.div`
  margin-bottom: 25px;
`

const SelectLabel = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-bottom: 6px;
  line-height: 1.29;
  margin-top: 5px;
`

const BookBtn = styled.button`
  width: 160px;
  height: 40px;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.yellow};
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium}; 
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  @media (min-width: 1000px) {
    width: 172px;
    height: 40px;
  }
  @media (max-width: 560px) {
    height: 48px;
  }
`

const BackBtn = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.text_darker};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  background: transparent;
  margin-right: 10px;
  
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (min-width: 561px) {
    display: none;
  }
`

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 376px) {
    margin-top: -12px;
  }
`

const ErrorMsg = styled.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.alert};
  margin: 5px 0 10px 0;
  display: none;
`

class MeetUsForm extends Component {
  static propTypes = {
    history: PropTypes.shape({}),
    daySelected: PropTypes.shape({}),
    credentials: PropTypes.shape({}),
    submitMeetusForm: PropTypes.func,
    meetusForm: PropTypes.shape({
      fetching: PropTypes.bool,
      submitFailed: PropTypes.bool,
      send: PropTypes.bool
    })
  }

  componentDidUpdate (prevProps, prevState) {
    const { fields } = this.state
    if (fields !== prevState.fields) {
      this.checkFormValid()
    }
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
      phone: {
        value: '',
        isValid: true
      },
      stage: {
        value: '',
        isValid: false
      },
      industry: {
        value: '',
        isValid: false
      },
      helpWith: {
        value: '',
        isValid: false
      },
      cameFrom: {
        value: '',
        isValid: false
      }
    },
    formValid: false,
    selectOpen: false
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

  toggleSelect = () => {
    this.setState(prevState => ({
      selectOpen: !prevState.selectOpen
    }))
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
    errorMsg.style.display = validity ? 'none' : 'block'

    this.checkFormValid()
  }

  handleSubmit = (e) => {
    const { credentials, daySelected, submitMeetusForm } = this.props
    const { fields, formValid } = this.state
    e.preventDefault()

    const inputData = {}
    inputData.name = fields.name.value
    inputData.email = fields.email.value
    inputData.phone = fields.phone.value
    inputData.stage = fields.stage.value
    inputData.industry = fields.industry.value
    inputData.help_with = fields.helpWith.value
    inputData.came_from = fields.cameFrom.value
    inputData.start = daySelected.start.date
    inputData.end = daySelected.end.date

    credentials && formValid && submitMeetusForm(inputData)
  }

  selectOption = (option) => {
    const { fields } = this.state
    this.setState({
      fields: {
        ...fields,
        cameFrom: {
          value: option,
          isValid: option !== ''
        }
      },
      selectOpen: false
    })
  }

  handleBack = () => {
    const { history } = this.props
    history.push('/booking')
  }

  render () {
    const { fields, formValid, selectOpen } = this.state
    const { meetusForm } = this.props
    const { fetching, submitFailed, send } = meetusForm
    const {
      name, email, phone, stage, industry, helpWith, cameFrom
    } = fields
    const ErrorMsgContainer = () => <div>Server connection failed...</div>

    return (
      <Fragment>
        {!send &&
        (
          <Form noValidate>
            <FormCol>
              <FormRow>
                <label htmlFor='name'>
                  Your name*
                </label>
                <input
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
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                  required
                />
                <ErrorMsg id='emailError'>
                  Invalid email address
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <label htmlFor='phone'>
                  Phone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  pattern={'' || '^[0-9-+s()]*$'}
                  value={phone.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                />
                <ErrorMsg id='phoneError'>
                  Invalid phone number
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <StageTxtAreaLabel htmlFor='stage'>
                  What stage is your business in?*
                  <LabelHint>
                    Idea, Planning, Launch, Growth, Established
                  </LabelHint>
                </StageTxtAreaLabel>
                <StageTxtArea
                  id='stage'
                  name='stage'
                  value={stage.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                  required
                />
                <ErrorMsg id='stageError'>
                  Please fill out this field
                </ErrorMsg>
              </FormRow>
            </FormCol>
            <FormCol>
              <FormRow>
                <label htmlFor='industry'>
                  What industry is your business in?*
                </label>
                <input
                  type='text'
                  id='industry'
                  name='industry'
                  value={industry.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                  required
                />
                <ErrorMsg id='industryError'>
                  Please fill out this field
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <HelpTxtAreaLabel>
                  What are the three things you feel you need the most help
                  with?*
                </HelpTxtAreaLabel>
                <HelpTxtArea
                  id='helpWith'
                  name='helpWith'
                  value={helpWith.value}
                  onChange={this.handleChange}
                  onBlur={this.checkIsFieldValid}
                  required
                />
                <ErrorMsg id='helpWithError'>
                  Please fill out this field
                </ErrorMsg>
              </FormRow>
              <FormRow>
                <SelectLabel>
                  Where did you hear about us?*
                </SelectLabel>
                <SelectWrapper>
                  <Select>
                    <SelectHeader onClick={this.toggleSelect}>
                      <Title>
                        {cameFrom.value}
                      </Title>
                      <ArrowIconWrapper>
                        <ArrowIcon
                          src={IMAGES.icon_arrow_to}
                          className={selectOpen ? 'pointToTop' : ''}
                          alt='arrow'
                        />
                      </ArrowIconWrapper>
                    </SelectHeader>
                    {selectOpen && (
                      <SelectOptions>
                        {
                          COME_FROM.sources.map(source => (
                            <Option
                              key={source.name}
                              className={cameFrom.value === source.name ? 'selected' : ''}
                              value={source.name}
                              onClick={() => this.selectOption(source.name)}
                            >
                              {source.name}
                            </Option>))
                        }
                      </SelectOptions>)
                    }
                  </Select>
                </SelectWrapper>
              </FormRow>
              <BtnsWrapper>
                <BackBtn onClick={this.handleBack}>
                  Back
                </BackBtn>
                <BookBtn type='submit' disabled={!formValid} onClick={this.handleSubmit}>
                  Book now
                </BookBtn>
              </BtnsWrapper>
            </FormCol>
          </Form>
        )}
        {!fetching && send && !submitFailed && <Redirect to='/booking-thank-you' />}
        {!fetching && send && submitFailed && <ErrorMsgContainer />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  daySelected: state.daySelected,
  credentials: state.credentials,
  meetusForm: state.meetusForm
})

const mapDispatchToProps = dispatch => ({
  submitMeetusForm: inputData => dispatch(submitMeetUsRequest(inputData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MeetUsForm))
