import {Component} from 'react'

import {
  Heading,
  GenerateBtn,
  CustomInput,
  GenerateForm,
  CustomLabel,
  CustomOption,
  CustomSelect,
  AppDivContainer,
  FormAndImgContainer,
  BgMemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    bgImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeOption: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackGroundImg = event => {
    this.setState({bgImageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeText = event => {
    this.setState({fontSizeOption: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      bgImageInput,
      topTextInput,
      bottomTextInput,
      fontSizeOption,
    } = this.state

    this.setState({
      topText: topTextInput,
      bottomText: bottomTextInput,
      backgroundImageUrl: bgImageInput,
      activeFontSizeId: fontSizeOption,
    })
  }

  generateForm = () => {
    const {
      bgImageInput,
      bottomTextInput,
      topTextInput,
      fontSizeOption,
    } = this.state

    return (
      <GenerateForm onSubmit={this.onSubmitForm}>
        <div>
          <CustomLabel htmlFor="backGroundImageUrl">Image Url</CustomLabel>
          <br />
          <CustomInput
            type="text"
            value={bgImageInput}
            id="backGroundImageUrl"
            placeholder="Enter the Image URL"
            onChange={this.onChangeBackGroundImg}
          />
        </div>
        <div>
          <CustomLabel htmlFor="topText">Top Text</CustomLabel>
          <br />
          <CustomInput
            placeholder="Enter the Top Text"
            type="text"
            id="topText"
            onChange={this.onChangeTopText}
            value={topTextInput}
          />
        </div>
        <div>
          <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
          <br />
          <CustomInput
            value={bottomTextInput}
            type="text"
            id="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />
        </div>
        <div>
          <CustomLabel htmlFor="select">Font Size</CustomLabel>
          <br />
          <CustomSelect
            value={fontSizeOption}
            id="select"
            onChange={this.onChangeFontSizeText}
          >
            {fontSizesOptionsList.map(eachItem => (
              <CustomOption key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
        </div>
        <div>
          <GenerateBtn type="submit">Generate</GenerateBtn>
        </div>
      </GenerateForm>
    )
  }

  generateImgAndTextForm = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <BgMemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </BgMemeContainer>
    )
  }

  render() {
    return (
      <AppDivContainer>
        <Heading>Meme Generator</Heading>
        <FormAndImgContainer>
          {this.generateImgAndTextForm()}
          {this.generateForm()}
        </FormAndImgContainer>
      </AppDivContainer>
    )
  }
}
export default MemeGenerator
