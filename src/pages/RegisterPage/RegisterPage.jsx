import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import registerTablet1x from '../../images/registerBg-tablet-1x.png';
import registerTablet2x from '../../images/registerBg-tablet-2x.png';
import registerDesk1x from '../../images/registerBg-desktop-1x.png';
import registerDesc2x from '../../images/registerBg-desktop-2x.png';
import {
  Container,
  LeftSide,
  RightSide,
  MainTitle,
  ImgBox,
} from '../LoginPage/LoginPage.styled';

export default function RegisterPage() {
  return (
    <Container>
      <LeftSide>
        <ImgBox>
          <picture>
            <source
              srcSet={`${registerDesk1x} 1x, ${registerDesc2x} 2x`}
              media="(min-width: 1200px)"
              type="image/jpg"
            />
            <source
              srcSet={`${registerTablet1x} 1x, ${registerTablet2x} 2x`}
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src={`${registerTablet2x}`} alt="finance wallet app" />
          </picture>
        </ImgBox>
        <MainTitle>Finance app</MainTitle>
      </LeftSide>
      <RightSide>
        <RegistrationForm />
      </RightSide>
    </Container>
  );
}

