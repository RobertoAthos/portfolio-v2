import React from 'react'
import ProjetoItem from './ProjetoItem'
import tesla from '../../Assets/tesla ui.png'
import travel from '../../Assets/travel.png'
import colegio from '../../Assets/colegio.png'
import SectionTitle from '../../Components/SectionTitle'
import {MainContainer} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper'
import {AiOutlineGithub} from 'react-icons/ai';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Fade from 'react-reveal'

function index({title,desc,img}) {
  return (
   <Fade left cascade>
      <MainContainer id='Projetos'>
        <SectionTitle title="Projetos" description="landing pages, sistemas, etc"/>
        
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <ProjetoItem
                title="Colégio Batista"
                desc="-Landing Page"
                img={colegio}
              />
      </SwiperSlide>
      <SwiperSlide>
            <ProjetoItem
                title="Travel Agency"
                desc="-Landing Page"
                img={travel}
              />
      </SwiperSlide>
      <SwiperSlide>
      <ProjetoItem
            title="Tesla Ui Clone"
            desc="-WebApp"
            img={tesla}
          />
      </SwiperSlide>
    </Swiper>

    <div className='btn-project'>
      <button><a href='https://github.com/RobertoAthos'>Ver Mais Projetos</a><AiOutlineGithub/></button>
    </div>
   </MainContainer>
   </Fade>
  )
}

export default index