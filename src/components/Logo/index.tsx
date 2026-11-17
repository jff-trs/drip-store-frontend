import logoHeader from '../../assets/logo-header.svg'; 
import logoFooter from '../../assets/logo-footer.svg';

interface LogoProps {
  variant?: 'header' | 'footer';
}

export default function Logo({ variant = 'header' }: LogoProps) {
  const logoSrc = variant === 'header' ? logoHeader : logoFooter;

  return (
    <div>
      <img src={logoSrc} alt="Logo" width={253} height={44} />
    </div>
  );
}