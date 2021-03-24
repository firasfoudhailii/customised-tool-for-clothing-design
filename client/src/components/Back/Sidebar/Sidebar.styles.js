import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
width: ${p=> p.isSidebarOpen ? '20%' : '5%'};
max-width: 280px;
min-widhth: 80px;
background-image: linear-gradient(
    315deg,
    ${p => p.colorPalette.bgColor1}0%,
    ${p => p.colorPalette.bgColor2}74%),
    url(${p => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: ${p =>p.colorPalette.fontColorSelected};
    position: relative; // treferenci e Toggler
    transition: .3s ease-in all;
`

export const SidebarHeader =styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 8px;
    font-family: ${p => p.font}, cursive;    
    font-size: 28px
`
export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

// Menu items ---------------------------------------------------

export const MenuItem = styled.div`
    ${p => !p.isSidebarOpen && `
        text-align: center;
        ${p.selected && `background-color: ${p.colorPalette.selectedBackgroundCollapsedMode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)' }` };
    `};
    padding: 6px 20px;
    font-weight: 540;
    font-size: 20px;
    color: ${p => p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
    font-family: ${p => p.font}, cursive;  
    white-space: nowrap;
    position: relative; // trefenci Dropdown icon
    transition: .3s ease-in all;

    &:hover {
        color: ${p => p.colorPalette.fontColorSelected};
        transition: .1s ease-in all;
    }
    
    &:after {
        content: '';
        border: 0.5px solid ${p => p.selected ?  p.colorPalette.fontColorSelected : p.colorPalette.dividerColor};
        display: ${p => p.isSidebarOpen && p.selected && p.isOpen ? 'none' : 'block'};
        margin: 8px 0 4px;
        transition: .3s ease-in all;

    };

    ${p => !p.selected &&`
        &:hover {
            &:after {
                border: 1px solid rgba(0, 200, 255, 0.25);
                transition: .1s ease-in all;
            }
        }
    `}
`; 




export const Text = styled.p`
display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
`
export const Icon = styled.img`
${p => !p.isSidebarOpen && `width: 16px`}
padding-right: 15px;
width: 34px;
transition: .5s ease-in padding-right
` 

// Sub menu items -------------------------------------------------
export const SubMenuItemContainer = styled.div`
        font-size: 17px;
        ${p => p.isSidebarOpen && 'padding-left: 15%;'}
        ${p => !p.isSidebarOpen && 'text-align: center'}

`;
export const SubMenuItem = styled.p`
        color: ${p => p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
        &:hover {
            color: ${p => p.colorPalette.fontColorSelected}
        }
`;


// Dropdown icon --------------------------------------------------
export const DropdownIcon = styled.span`
        position: absolute;
        top: ${p => p.isOpen ? '16px' : '12px'};
        right: 28px;
        border: solid ${p => p.selected ? p.colorPalette.fontColorSelected : p.colorPalette.fontColor};
        border-width: 0 2px 2px 0;
        padding: 3px;
        transform: ${p => p.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
        transition: .4s;
`;



// Toggler -------------------------------------------------------
export const TogglerContainer = styled.div`
        position: absolute;
        width: 30%;
        bottom: 10%;
        left: 0;
        right: 0;
        margin: 0 auto;
`

export const Toggler = styled.div`
        height: 40px;
        cursor: pointer;
        position: relative; // treference l horizental lines

        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: .25em;
            height: .1em;
            width: 100%;
            background: #00CCFF;
            box-shadow:
              0 0.75em 0 0 #00CCFF,
              0 1.5em 0 0 #00CCFF;
        }
`
