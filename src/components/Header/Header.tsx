import { HeaderStyled, ImageStyled } from "./HeaderStyled";

import Logo from '@/assets/elements/logo.png';

const Header = () => {
    return (
        <HeaderStyled>
            <ImageStyled src={Logo} alt="Logo leadster" quality={100} />
        </HeaderStyled>
    );
}

export default Header;