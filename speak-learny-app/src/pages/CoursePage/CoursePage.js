import React from 'react'
import styles from './CoursePage.module.scss'
import arrowRightAlt2 from '@iconify/icons-dashicons/arrow-right-alt2';
import bxLike from '@iconify/icons-bx/bx-like';
import roundPeopleAlt from '@iconify/icons-ic/round-people-alt';
import yesAlt from '@iconify/icons-dashicons/yes-alt';
import coursePreview from '../../images/course_preview.svg'
import Icon from '@iconify/react';

function CoursePage() {
    return (
        <div>
            <div className={styles.navLinks}>
                <div className={styles.box}>
                    <p className={styles.prev}>Education</p>
                    <Icon icon={arrowRightAlt2} className={styles.arrow}/>
                </div>
                <div className={styles.box}>
                    <p className={styles.prev}>Programming</p>
                    <Icon icon={arrowRightAlt2} className={styles.arrow}/>
                </div>
                <p className={styles.active}>Some topicads</p>
            </div>
            <div className={styles.course}>
                <div className={styles.courseHeader}>
                                <svg width="31" height="47" className={styles.typeIcon} viewBox="0 0 31 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10H26V30H6V10ZM11.2604 26.7188C11.7812 27.8646 12.7188 28.4375 14.0729 28.4375C14.941 28.4375 15.6267 28.2031 16.1302 27.7344C16.6337 27.2656 16.8854 26.5625 16.8854 25.625V19.1667H15.0104V25.5729C15.0104 26.3715 14.6806 26.7708 14.0208 26.7708C13.5694 26.7708 13.1528 26.441 12.7708 25.7812L11.2604 26.7188ZM17.875 26.5104C18.5347 27.7951 19.6806 28.4375 21.3125 28.4375C22.25 28.4375 23.0052 28.2031 23.5781 27.7344C24.151 27.2656 24.4375 26.6319 24.4375 25.8333C24.4375 25.0694 24.2378 24.4792 23.8385 24.0625C23.4392 23.6458 22.8056 23.2465 21.9375 22.8646L21.4688 22.6562C21.0521 22.4826 20.7569 22.3177 20.5833 22.1615C20.4097 22.0052 20.3229 21.7882 20.3229 21.5104C20.3229 21.3021 20.401 21.1198 20.5573 20.9635C20.7135 20.8073 20.9306 20.7292 21.2083 20.7292C21.7292 20.7292 22.1458 20.9896 22.4583 21.5104L23.8646 20.5729C23.309 19.566 22.4236 19.0625 21.2083 19.0625C20.375 19.0625 19.7066 19.2969 19.2031 19.7656C18.6997 20.2344 18.4479 20.8333 18.4479 21.5625C18.4479 22.2917 18.6389 22.8646 19.0208 23.2812C19.4028 23.6979 19.9757 24.0625 20.7396 24.375L21.2083 24.5833C21.5556 24.7569 21.8073 24.8785 21.9635 24.9479C22.1198 25.0174 22.2587 25.1302 22.3802 25.2865C22.5017 25.4427 22.5625 25.625 22.5625 25.8333C22.5625 26.1111 22.4497 26.3368 22.224 26.5104C21.9983 26.684 21.6944 26.7708 21.3125 26.7708C20.5139 26.7708 19.8889 26.3889 19.4375 25.625L17.875 26.5104Z" fill="white"/>
                                    <path d="M0.5 0.5V34.25L15.217 45.5L30.5 34.25V0.5" stroke="white"/>
                                </svg>                            
                                <div className={styles.text}>JavaScript for Everyone</div>
                    <div className={`${styles.btnBlue} ${styles.courseBtnHeader}`}>Enroll</div>
                </div>
                <div className={styles.courseBody}>
                <div className={styles.iconsBox}>
                                    <div className={styles.iconBox}>
                                        <Icon icon={bxLike} className={styles.icon} />
                                        <p className={styles.text}>4,5</p>
                                    </div>
                                    <div className={styles.iconBox}>
                                        <Icon icon={roundPeopleAlt} className={styles.icon} />
                                        <p className={styles.text}>46K</p>
                                    </div>
                                    <div className={styles.iconBoxLevel}>
                                        <div className={styles.levelIcon}></div>
                                        <p className={styles.text}>Intermediate</p>
                                    </div>
                                </div>
                    <h1 className={styles.title}>About this Course</h1>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse sem maecenas sit cras. Velit 
                        vitae pellentesque sit accumsan nibh egestas leo. Vulputate at mus eleifend dictum pretium 
                        dictum. Blandit integer semper placerat risus. Amet vehicula elit justo sed maecenas.dictum
                        pretium dictum. Blandit integer semper placerat risus. Amet vehicula elit justo sed maecenas.</p>
                    <h1 className={styles.title}>What will you Learn</h1>
                    <div className={styles.featureCoursesBox}>
                        <div className={styles.courseBoxFeature}>
                            <Icon icon={yesAlt} className={styles.icon} style={{color: '#16d398', fontSize: '24px'}} />
                            <p className={styles.text}>Language structure and OOP</p>
                        </div>
                        <div className={styles.courseBoxFeature}>
                        <Icon icon={yesAlt} className={styles.icon} style={{color: '#16d398', fontSize: '24px'}} />
                            <p className={styles.text}>Creating web apps</p>
                        </div>
                    </div>
                    <div className={styles.title}>Course structure</div>
                    <div className={styles.structureCoursesBox}>
                        <div className={styles.courseBoxStructure}>
                            <img src={coursePreview} alt="preview" className={styles.coursePreview} />
                            <div className={styles.description}>
                                <h1 className={styles.title}>Lesson 1. Some title</h1>
                                <p className={styles.text}>What will you learn in this lesson</p>
                            </div>
                        </div>
                        <div className={styles.courseBoxStructure}>
                            <img src={coursePreview} alt="preview" className={styles.coursePreview} />
                            <div className={styles.description}>
                                <h1 className={styles.title}>Lesson 1. Some title</h1>
                                <p className={styles.text}>What will you learn in this lesson</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.endCourseBox}>
                        <div className={styles.btnBlue}>Enroll</div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default CoursePage
