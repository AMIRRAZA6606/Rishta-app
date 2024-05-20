import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../../components/Card/Card';
import banner2imag2 from '../../assets/images/banner2-image2.png'
import banner2imag from '../../assets/images/banner2-img.png'

const AboutCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='carousel-con'>
            <Carousel responsive={responsive}
                draggable={true}
                swipeable={false}

                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                ssr={true}
            >

                <Card

                    image={banner2imag2}
                    title='Ayan & Maria'
                    para='I found my match on Rishta.com.
                        com on one month.Not yet 
                        married butgoing steady with 
                        him.There cheers to here.Fairy 
                        tales....Read more'
                />
                <Card

                    image={banner2imag2}
                    title='Ayan & Maria'
                    para='I found my match on Rishta.com.
                        com on one month.Not yet 
                        married butgoing steady with 
                        him.There cheers to here.Fairy 
                        tales....Read more'
                />
                <Card

                    image={banner2imag2}
                    title='Ayan & Maria'
                    para='I found my match on Rishta.com.
                        com on one month.Not yet 
                        married butgoing steady with 
                        him.There cheers to here.Fairy 
                        tales....Read more'
                />
                <Card

                    image={banner2imag}
                    title='Wahaj & Yumna'
                    para='I found my match on Rishta.com.
                        com on one month.Not yet 
                        married butgoing steady with 
                        him.There cheers to here.Fairy 
                        tales....Read more'/>
                <Card

                    image={banner2imag2}
                    title='Ayan & Maria'
                    para='I found my match on Rishta.com.
                        com on one month.Not yet 
                        married butgoing steady with 
                        him.There cheers to here.Fairy 
                        tales....Read more'
                />
                <Card

                    image={banner2imag2}
                    title='Ayan & Maria'
                    para='I found my match on Rishta.com.
                        com on one month.Not yet 
                        married butgoing steady with 
                        him.There cheers to here.Fairy 
                        tales....Read more'
                />

            </Carousel>
        </div>
    )
}

export default AboutCarousel