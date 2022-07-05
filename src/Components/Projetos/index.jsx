import React from 'react'
import ProjetoItem from './ProjetoItem'
import tesla from '../../Assets/tesla ui.png'
import SectionTitle from '../../Components/SectionTitle'
import {MainContainer} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function index({title,desc,img}) {
  return (
   <MainContainer>
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
            title="Tesla Ui Clone"
            desc="-WebApp"
            img={tesla}
          />
      </SwiperSlide>
      <SwiperSlide>
            <ProjetoItem
                title="Tesla Ui Clone"
                desc="-WebApp"
                img={tesla}
              />
      </SwiperSlide>
      <SwiperSlide>
            <ProjetoItem
                title="Tesla Ui Clone"
                desc="-WebApp"
                img={tesla}
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
      <button>Ver mais Projetos</button>
    </div>
   </MainContainer>
  )
}

export default index