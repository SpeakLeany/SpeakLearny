import React, { useContext, useEffect } from 'react'
import styles from './Home.module.scss'
import CourseBox from '../../components/usedComponents/CourseBox/CourseBox'
import RightArrow from '../../components/usedComponents/Arrows/RightArrow/RightArrow';
import LeftArrow from '../../components/usedComponents/Arrows/LeftArrow/LeftArrow';
import SliderBox from '../../components/usedComponents/SliderBox/SliderBox';
import FriendBox from '../../components/usedComponents/FriendBox/FriendBox';
import BlogBox from '../../components/usedComponents/BlogBox/BlogBox';
import { FriendContext } from '../../context/friend/FriendContext';

function Home() {
    const {fullPage, showFullPage} = useContext(FriendContext)
    useEffect(() => showFullPage(), [fullPage.value])

    const settingsCourses = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: `${styles.sliders}`,
        nextArrow: <RightArrow hideArrow={true}  />,
        prevArrow: <LeftArrow hideArrow={true} />,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: () => (
            <div className="ft-slick__dots--custom"></div>
        ),
        responsive: [
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 1020,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 752,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
          ]
    };
    
    const settingsBlogs = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: `${styles.sliders}`,
        nextArrow: <RightArrow hideArrow={true}  />,
        prevArrow: <LeftArrow hideArrow={true} />,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: () => (
            <div className="ft-slick__dots--custom"></div>
        ),
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 910,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
          ]
    };
    
    const settingsFriends = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll:7,
        className: `${styles.sliders}`,
        nextArrow: <RightArrow hideArrow={false} />,
        prevArrow: <LeftArrow hideArrow={false} />,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: () => (
            <div className="ft-slick__dots--custom"></div>
        ),
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    arrows: false
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
          ]
    };

    const courses = [
        <CourseBox />,
        <CourseBox />,
        <CourseBox />,
        <CourseBox />,
        <CourseBox />,
        <CourseBox />,
        <CourseBox />,
        <CourseBox />
    ]

    const friends = [
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
        <FriendBox />,
    ]

    const blogs = [
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
        <BlogBox margin='20px 10px' />,
    ]

    return (
        <>
        <SliderBox title={'My Courses'} settings={settingsCourses} items={courses} />
        <SliderBox title={'Want to learn with friends ?'} settings={settingsFriends} items={friends} />
        <SliderBox title={'Our best courses'} settings={settingsCourses} items={courses} />
        <SliderBox title={'New articles'} settings={settingsBlogs} items={blogs} />
        </>
    )
}

export default Home
