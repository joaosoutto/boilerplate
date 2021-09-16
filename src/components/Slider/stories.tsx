import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { Settings } from 'react-slick'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: rgb(30, 30, 30);
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid rgb(150, 0, 0);
  color: white;
  text-align: center;
`

export const Horizontal: Story = () => (
  <Slider settings={settings}>
    <Slide>One</Slide>
    <Slide>Two</Slide>
    <Slide>Three</Slide>
    <Slide>Four</Slide>
    <Slide>Five</Slide>
    <Slide>Six</Slide>
  </Slider>
)

const verticalSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>One</Slide>
    <Slide>Two</Slide>
    <Slide>Three</Slide>
    <Slide>Four</Slide>
    <Slide>Five</Slide>
    <Slide>Six</Slide>
  </Slider>
)
