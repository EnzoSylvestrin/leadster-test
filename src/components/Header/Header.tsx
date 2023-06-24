import { HeaderStyled, ImageStyled } from "./HeaderStyled";

import Logo from '@/assets/elements/logo.png';

const Header = () => {
    return (
        <HeaderStyled>
            <ImageStyled src={Logo} alt="Logo leadster" />
        </HeaderStyled>
    );
}

export default Header;