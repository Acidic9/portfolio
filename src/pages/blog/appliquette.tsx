import React from 'react'
import '../../styles/styles.css'

import BlogPage from '../../components/BlogPage'

export default () => {
  return (
    <BlogPage project="appliquette" readMinutes={5}>
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
        Nulla volutpat ultricies nisl at ultrices. Etiam dapibus maximus dui sed
        auctor. Nulla vitae arcu mattis, feugiat massa sed, volutpat libero. In
        sit amet sapien purus. Integer eu molestie purus, sed iaculis arcu.
        Vestibulum nec purus egestas, tincidunt nibh in, pellentesque nisl.
        Quisque feugiat lorem eget malesuada viverra. Aenean libero ipsum,
        convallis sed posuere ac, volutpat nec tortor. Pellentesque fringilla
        eleifend volutpat. Pellentesque posuere, nibh in iaculis imperdiet, ex
        neque posuere sem, a posuere lacus neque a turpis.
      </p>
      <p className="mb-4">
        Suspendisse potenti. In tempor ipsum risus, a elementum turpis suscipit
        quis. Quisque ut nunc nec justo ornare fermentum. Quisque euismod mi
        metus, eu feugiat ex feugiat at. Nunc porta auctor ultrices. In maximus
        lacus nisl, eu elementum enim tempus ut. Pellentesque vulputate interdum
        neque, sed tincidunt elit ullamcorper a. Ut non magna velit. Maecenas
        cursus sagittis metus, vel commodo odio vehicula at. Phasellus tincidunt
        purus velit, id fringilla quam efficitur in. Fusce sit amet leo lectus.
        Proin cursus accumsan tellus a dignissim. Suspendisse ac risus dolor.
      </p>
    </BlogPage>
  )
}
