import { NextPage } from 'next'
import { Intro } from './Intro/intro'
import Projects from './Projects'
import Experience from './Experience'

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
  return <div>
    <Intro />
    <Projects />
    <Experience />
  </div>
}

export {HomePage}