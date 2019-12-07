import React from 'react'
import '../../styles/styles.css'

import NauticusBlurred from '../../images/nauticus-blurred.jpg'
import Close from '../../images/close.svg'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Navbar from '../../components/Navbar'

const BG_COLOR = 'blue-nauticus'
const IMAGE = NauticusBlurred

export default () => {
  return (
    <div className="bg-gray-100 font-roboto">
      <Navbar
        visible={true}
        activeNav={0}
        scrollbarWidth={0}
        fixed={false}
        onClick={() => {}}
      />

      <div
        className={
          'pt-32 md:pt-40 pb-6 md:pb-16 px-8 md:px-24 mb-10' + ` bg-${BG_COLOR}`
        }
        style={{ backgroundImage: `url(${IMAGE})` }}
      >
        <div className="flex justify-between items-end text-white">
          <div className="flex flex-col max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-wider leading-none uppercase">
              Nauticus
            </h1>
            <p className="mb-5 tracking-wide">
              A global crypto-currency exchange app built with a team across the
              world using a huge variety of technologies.
            </p>
          </div>

          <div>
            <AniLink fade to="/#case-studies" duration={0.2}>
              <a
                href="#"
                className="flex items-center text-xs tracking-wide hover:underline"
              >
                {/* <img className="mr-2 w-3 h-3" src={Close} /> */}
                Browse More Projects
              </a>
            </AniLink>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl pb-8 px-8 text-md md:text-lg tracking-wide leading-relaxed">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          tincidunt tellus. Pellentesque congue, ipsum id ornare volutpat, lacus
          elit vestibulum eros, quis faucibus nunc felis ac metus. Aliquam erat
          volutpat. Proin ut tortor eu erat facilisis convallis et in lorem. Sed
          efficitur pretium velit sed gravida. Integer id ultricies sapien. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum non volutpat risus, ac scelerisque diam.
        </p>
        <p className="mb-4">
          Nulla volutpat ultricies nisl at ultrices. Etiam dapibus maximus dui
          sed auctor. Nulla vitae arcu mattis, feugiat massa sed, volutpat
          libero. In sit amet sapien purus. Integer eu molestie purus, sed
          iaculis arcu. Vestibulum nec purus egestas, tincidunt nibh in,
          pellentesque nisl. Quisque feugiat lorem eget malesuada viverra.
          Aenean libero ipsum, convallis sed posuere ac, volutpat nec tortor.
          Pellentesque fringilla eleifend volutpat. Pellentesque posuere, nibh
          in iaculis imperdiet, ex neque posuere sem, a posuere lacus neque a
          turpis.
        </p>
        <p className="mb-4">
          Suspendisse potenti. In tempor ipsum risus, a elementum turpis
          suscipit quis. Quisque ut nunc nec justo ornare fermentum. Quisque
          euismod mi metus, eu feugiat ex feugiat at. Nunc porta auctor
          ultrices. In maximus lacus nisl, eu elementum enim tempus ut.
          Pellentesque vulputate interdum neque, sed tincidunt elit ullamcorper
          a. Ut non magna velit. Maecenas cursus sagittis metus, vel commodo
          odio vehicula at. Phasellus tincidunt purus velit, id fringilla quam
          efficitur in. Fusce sit amet leo lectus. Proin cursus accumsan tellus
          a dignissim. Suspendisse ac risus dolor.
        </p>
      </div>
    </div>
  )
}
