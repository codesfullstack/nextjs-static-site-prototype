'use client'
import { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

export default function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentLogoCicleIndex, setCurrentLogoCicleIndex] = useState(0);

    const imagesList = [
        'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const textList = [
        "Custom tools to optimize your business.",
        "Strategic solutions aligning technology with goals.",
        "Driving business forward with innovation.",
        "Connecting platforms for efficient operations."
    ];

    const logoCicle = [
        "〄M&C",
        "〄M&C",
        "〄M&C",
        "〄M&C"
    ];

    const prevImage = () => {
        setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
        setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1); 

        setCurrentLogoCicleIndex(prevValue => prevValue === 0 ? logoCicle.length - 1 : prevValue - 1); 
    };

    const nextImage = () => {
        setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
        setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1); 

        setCurrentLogoCicleIndex(prevValue => prevValue === logoCicle.length - 1 ? 0 : prevValue + 1); 

    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['image-container']}>
                <div className={styles['custom-image']}>
                    <Image
                        src={imagesList[currentImage]}
                        width={1024}
                        height={540}
                        alt="Carousel image"
                        layout="responsive"
                    />
                </div>

                <div className={styles['loading-bar']}></div>

                <div className={styles['split-text-container']}>
                    <span
                        className={`${styles['text-part']} ${styles['fade-in']}`}
                        key={currentTextIndex}
                    >
                        {textList[currentTextIndex]}
                    </span>
                </div>

                
                <div className={styles['split-logo']}>
                    <span
                        className={`${styles['text-part']} ${styles['fade-top']}`}
                        key={currentLogoCicleIndex}
                    >
                        {logoCicle[currentLogoCicleIndex]}
                      
                    </span>
                </div>


                <div className={styles['arrow-container']}>
                

                    {/* fa fa-arrow-left  */}

                    <i
                        className={`${styles['arrow-left']} fa fa-chevron-left`}
                        onClick={prevImage}
                    ></i>
                    <i
                        className={`${styles['arrow-right']} fa fa-chevron-right`}
                        onClick={nextImage}
                    ></i>
                </div>
            </div>
        </div>
    );
}


// 'use client'
// import { useEffect, useState } from 'react';
// import styles from './Carousel.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Carousel() {

//     const [currentImage, setCurrentImage] = useState(0);
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);

//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];
 
//     const textList = [
//         "Custom tools to optimize your business.",
//         "Strategic solutions aligning technology with goals.",
//         "Driving business forward with innovation.",
//         "Connecting platforms for efficient operations."
//     ];

//     const prevImage = () => {
//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//     }

//     const nextImage = () => {
//         setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
//     }

//     const prevText = () => {
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);
//     }

//     const nextText = () => {
//         setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//             nextText();
//         }, 8000);  

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 {/* <div className={styles['text-container']}>
//                 </div> */}          

//                 <div className={styles['custom-image']}>
//                     <Image
//                         src={imagesList[currentImage]}
//                         width={1024}
//                         height={540}
//                         alt="Carousel image"
//                         layout="responsive"
//                      />
//                 </div>

//                <div className={styles['loading-bar']}></div>

//                 <div className={styles['split-text-container']}>
//                      <span className={`${styles['text-part']} ${styles['fade-in']}`} key={currentTextIndex}>
//                         {textList[currentTextIndex]}
//                     </span> 
               
//                 </div>
 
//                 <div className={styles['arrow-container']}>
//                     <i
//                         className={`${styles['arrow-left']} fa fa-arrow-left`}
//                         onClick={prevImage}
//                     ></i>
//                     <i
//                         className={`${styles['arrow-right']} fa fa-arrow-right`}
//                         onClick={nextImage}
//                     ></i>
//                 </div>
    
                
//             </div>
//         </div>
//     );
// }
 