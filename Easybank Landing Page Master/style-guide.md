# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Blue: hsl(233, 26%, 24%)
- Lime Green: hsl(136, 65%, 51%)
- Bright Cyan: hsl(192, 70%, 51%)

### Neutral

- Grayish Blue: hsl(233, 8%, 62%)
- Light Grayish Blue: hsl(220, 16%, 96%)
- Very Light Gray: hsl(0, 0%, 98%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Public Sans](https://fonts.google.com/specimen/Public+Sans)
- Weights: 300, 400, 700




:root {
    --Dark-Blue: hsl(233, 26%, 24%);
    --Lime-Green: hsl(136, 65%, 51%);
    --Bright-Cyan: hsl(192, 70%, 51%);
    --Grayish-Blue: hsl(233, 8%, 62%);
    --Light-Grayish-Blue: hsl(220, 16%, 96%);
    --Very-Light-Gray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
}

*, *::before, *::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

button {
    cursor: pointer;
}

#root, #__next {
    isolation: isolate;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Public Sans', sans-serif;
}

/* Header */

.hamburger,
.mobile-background-image,
.sidenav,
.close {
    display: none;
}

.hidden {
    display: none;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 8rem;
    background-color: white;
}
 
header nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
}

header nav a {
    text-decoration: none;
    color: var(--Grayish-Blue);
}

header nav a:hover {
    color: black;
    padding-bottom: 1.4rem;
    border-width: 5px;
    border-image: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%) );
    border-image-slice: 1;
    border-bottom: 5px solid transparent;
}

.invite-button {
    border-radius: 999vw;
    border: 0;
    padding: .7rem 2rem;
    background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%) );
    color: white;
}

.invite-button:hover {
    opacity: .5;
}

/* Next generation container */

.next-generation {
    display: flex;
}

.left-text h1 {
   font-size: 4rem;
   font-weight: 400;
   color: var(--Dark-Blue);
   line-height: 4rem;
   margin-bottom: 2rem;
}

.left-text p {
    color: var(--Grayish-Blue);
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.background-image {
    z-index: -1;
    position: absolute;
    margin-left: 50rem;
}

.right-images img {
    position: relative;
    top: -9rem;
    z-index: -1;
    width: 58rem;
}

.text-content {
    margin: 14rem auto;
    width: 45%;

}

/* Why EasyBank Contaier */






/* Media Query Header */

@media screen and (max-width: 844px) {
    .hamburger {
        display: block;
    }

    .hamburger {
        cursor: pointer;
    }

    header nav,
    header button {
        display: none;
    }

    header {
        padding: 1.4rem;
    }

    /* Sidenav */

    .sidenav {
        width: 90%;
        margin-left: 1.2rem;
        background-color: white;
        position: absolute;
        top: 5rem;
        text-align: center;
        padding: 6rem 1rem;  
        font-size: 1.2rem; 
        border-radius: 10px;
        box-shadow: 8px 138px 300px 35px rgba(45,49,77,0.75);

    }

    .sidenav nav ul{
        margin-top: -3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-weight: 400;
        color: var(--Dark-Blue);
    }

    .sidenav a {
        color: var(--Dark-Blue);
        text-decoration: none;
    }

    .sidenav li {
        list-style: none;
        margin-right: 2rem;
    }
}

/* MEdia Query Next Generation container */

@media screen and (max-width: 844px) {
    .next-generation {
        flex-direction: column-reverse;
    }

    .background-image {
        display: none;
    }

    .mobile-background-image {
        display: block;
        position: absolute;
        top: 1rem;
        right: 0;
        width: 30rem;
        z-index: -1;
    }

    .right-images img {
        top: -9.2rem;
        left: 0;
        z-index: -1;
        scale: .9;
    }

    .text-content {
        width: 90%;
        text-align: center;
        margin-top: -6rem;
    }

    .text-content h1 {
        font-size: 2.7rem;
        margin-bottom: 1rem;
        line-height: 3.3rem;
    }

    .text-content p {
        padding: 0;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        line-height: 2rem;
    }

}

/* Why Easybank Container */








