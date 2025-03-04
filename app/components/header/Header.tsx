'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  const displayMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para el desplazamiento suave a cada sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Ajusta 60 al tamaño de tu header
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles['header-container']}>
      <h3 className={styles['logo']}>〄M&C</h3>

      {/* Barra de navegación para desktop */}
      <nav className={styles['nav']}>
        <div className={styles['ul-list']}>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('home')}
          >
            Home
          </div>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('ourbusiness')}
          >
            Our Company
          </div>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('services')}
          >
            Services
          </div>
          <div
            className={styles['a-item']}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </div>
        </div>
      </nav>

      {/* Menú de hamburguesa para móvil */}
      <div className={styles['hamburger']}>
        <i
          ref={menuRef}
          className="fa fa-bars"
          style={{ fontSize: '30px', cursor: 'pointer' }}
          onClick={displayMenu}
        ></i>
      </div>

      {/* Menú de hamburguesa desplegable */}
      {/* <div
        ref={drawerRef}
        className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}
      >
        <div
          className={styles['item-menu']}
          onClick={() => scrollToSection('home')}
        >
          <p className={styles['texto-mobile']}>Home</p>
        </div>
        <div
          className={styles['item-menu']}
          onClick={() => scrollToSection('ourbusiness')}
        >
          <p className={styles['texto-mobile']}>Our Company</p>
        </div>
        <div
          className={styles['item-menu']}
          onClick={() => scrollToSection('services')}
        >
          <p className={styles['texto-mobile']}>Services</p>
        </div>
        <div
          className={styles['item-menu']}
          onClick={() => scrollToSection('contact')}
        >
          <p className={styles['texto-mobile']}>Contact</p>
        </div>
      </div> */}

      {/* Menú de hamburguesa desplegable */}
      {open && (
        <div
          ref={drawerRef}
          className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}
        >
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('home')}
          >
            <p className={styles['texto-mobile']}>Home</p>
          </div>
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('ourbusiness')}
          >
            <p className={styles['texto-mobile']}>Our Company</p>
          </div>
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('services')}
          >
            <p className={styles['texto-mobile']}>Services</p>
          </div>
          <div
            className={styles['item-menu']}
            onClick={() => scrollToSection('contact')}
          >
            <p className={styles['texto-mobile']}>Contact</p>
          </div>
        </div>
      )}

    </div>
  );
}


// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import styles from './Header.module.css';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Header() {
//     const [open, setOpen] = useState(false);
//     const drawerRef = useRef<HTMLDivElement | null>(null);
//     const menuRef = useRef<HTMLButtonElement | null>(null);

//     const displayMenu = () => setOpen(!open);

//     useEffect(() => {
//         const handleClickOutside = (event: { target: any }) => {
//             if (
//                 drawerRef.current &&
//                 !drawerRef.current.contains(event.target) &&
//                 !menuRef.current.contains(event.target)
//             ) {
//                 setOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     // useEffect(() => {
//     //     const handleClickOutside = (event: { target: any }) => {
//     //         if (
//     //             drawerRef.current &&
//     //             !drawerRef.current.contains(event.target) &&
//     //             !menuRef.current.contains(event.target)
//     //         ) {
//     //             setOpen(false);
//     //         }
//     //     };

//     //     const handleKeyDown = (event: KeyboardEvent) => {
//     //         if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
//     //             setOpen(false);
//     //         }
//     //     };

//     //     const handleScroll = () => {
//     //         setOpen(false);
//     //     };

//     //     document.addEventListener('mousedown', handleClickOutside);
//     //     document.addEventListener('keydown', handleKeyDown);
//     //     document.addEventListener('scroll', handleScroll);

//     //     return () => {
//     //         document.removeEventListener('mousedown', handleClickOutside);
//     //         document.removeEventListener('keydown', handleKeyDown);
//     //         document.removeEventListener('scroll', handleScroll);
//     //     };
//     // }, []);


//     return (
//         <div className={styles['header-container']}>
//             <h3 className={styles['logo']}>〄M&C</h3>
//             {/* <nav className={styles['nav']}>
//                 <ul className={styles['ul-list']}>
//                 <li className={styles['a-item']}><a>Home</a></li>
//                 <li className={styles['a-item']}><a>Products</a></li>
//                 <li className={styles['a-item']}><a>Services</a></li>
//                 <li className={styles['a-item']}><a>Contact</a></li>
//                 </ul>
//             </nav> */}

//             {/* <nav className={styles['nav']}>
//                 <div className={styles['ul-list']}>
//                     <div className={styles['a-item']}>
//                         <span><a>Home</a></span>
//                     </div>
//                     <div className={styles['a-item']}>
//                         <span><a>Our Company</a></span>
//                     </div>
//                     <div className={styles['a-item']}>
//                         <span><a>Services</a></span>
//                     </div>
//                     <div className={styles['a-item']}>
//                         <span><a>Contact</a></span>
//                     </div>
//                 </div>
//             </nav> */}

//             <nav className={styles['nav']}>
//                 <div className={styles['ul-list']}>
//                     <div className={styles['a-item']} onClick={() => window.location.href = '#home'}>
//                         Home
//                     </div>
//                     <div className={styles['a-item']} onClick={() => window.location.href = '#ourbusiness'}>
//                         Our Company
//                     </div>
//                     <div className={styles['a-item']} onClick={() => window.location.href = '#services'}>
//                         Services
//                     </div>
//                     <div className={styles['a-item']} onClick={() => window.location.href = '#contact'}>
//                         Contact
//                     </div>
//                 </div>
//             </nav>




//             <div className={styles['hamburger']}>
//                 <i
//                     ref={menuRef}
//                     className="fa fa-bars"
//                     style={{ fontSize: '30px', cursor: 'pointer' }}
//                     onClick={displayMenu}
//                 ></i>
//             </div>

//             {/* <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>
//                 <div className={styles['item-menu']}><p className={styles['texto-mobile']}>Home</p></div>
//                 <div className={styles['item-menu']}><p className={styles['texto-mobile']}>Products</p></div>
//                 <div className={styles['item-menu']}><p className={styles['texto-mobile']}>Services</p></div>
//                 <div className={styles['item-menu']}><p className={styles['texto-mobile']}>Contact</p></div>
//             </div> */}

//             <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>
//                 <div className={styles['item-menu']} onClick={() => window.location.href = '#home'}><p className={styles['texto-mobile']}>Home</p></div>
//                 <div className={styles['item-menu']} onClick={() => window.location.href = '#ourbusiness'}><p className={styles['texto-mobile']}>Products</p></div>
//                 <div className={styles['item-menu']} onClick={() => window.location.href = '#services'}><p className={styles['texto-mobile']}>Services</p></div>
//                 <div className={styles['item-menu']} onClick={() => window.location.href = '#contact'}><p className={styles['texto-mobile']}>Contact</p></div>
//             </div>
//         </div>
//     );
// }




// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import styles from './Header.module.css';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Header() {
//     const [open, setOpen] = useState(false);

//     const drawerRef = useRef<HTMLDivElement | null>(null);  // Definir el tipo del ref como div
//     const menuRef = useRef<HTMLButtonElement | null>(null);

//     const displayMenu = () => {
//         setOpen(!open);
//         console.log(open);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event: { target: any; }) => {
//             if (drawerRef.current && !drawerRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
//                 setOpen(false);  // Cerrar el drawer si el clic fue fuera
//             }
//         };

//         // Detectar clic fuera del drawer
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className={styles['header-container']}>
//             <h3 className={styles['logo']}>〄M&C</h3>
//             <nav className={styles['nav']}>
//                 <ul className={styles['ul-list']}>
//                     <li className={styles['a-item']}><a>Home</a></li>
//                     <li className={styles['a-item']}><a>Products</a></li>
//                     <li className={styles['a-item']}><a>Services</a></li>
//                     <li className={styles['a-item']}><a>Contact</a></li>
//                 </ul>
//             </nav>

//             <div className={styles['hamburger']} >
//                 <i ref={menuRef} className="fa fa-bars" style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => displayMenu()}></i>
//             </div>

//             {/* {open && ( */}





//             <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>



//                 {/* <nav className={styles['nav-mobile']}>
//                         <ul className={styles['ul-list']}>
//                             <li className={styles['a-item']}><a>Home</a></li>
//                             <li className={styles['a-item']}><a>Products</a></li>
//                             <li className={styles['a-item']}><a>Services</a></li>
//                             <li className={styles['a-item']}><a>Contact</a></li>
//                         </ul>
//                     </nav> */}

//                 <div className={styles['item-menu']}>
//                     <p className={styles['texto-mobile']}>Home</p>
//                 </div>

//                 <div className={styles['item-menu']}>
//                     <p className={styles['texto-mobile']}>Home</p>
//                 </div>

//                 <div className={styles['item-menu']}>
//                     <p className={styles['texto-mobile']}>Home</p>
//                 </div>

//                 <div className={styles['item-menu']}>
//                     <p className={styles['texto-mobile']}>Home</p>
//                 </div>





//             </div>
//             {/* )} */}

//         </div>
//     );

// }