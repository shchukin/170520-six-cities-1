import Logo from '../logo/logo';

type FooterProps = {
  noContainer?: boolean;
}

function Footer(props: FooterProps): JSX.Element {
  return(
    <footer className={ props.noContainer ? 'footer' : 'footer container' }>
      <Logo/>
    </footer>
  );
}

export default Footer;
