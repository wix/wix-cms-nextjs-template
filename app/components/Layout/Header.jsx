import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import LogoImage from '../../../public/images/placeholder.jpg'

const Header = () => (
  <>
    <header
      className="w-full my-6 px-0 sm:px-8"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex sm:px-6 sm:px-14 h-header sm:items-center sm:gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a
            href="/"
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
          >
            <img src="/images/logoimg.png" alt="Razor Talent" style={{ width: '100px', height: 'auto' }}/>
            {/* <Logo /> */}
            <div>
              <span className="block font-site">Razor Talent</span>
              <span className="text-xs" style={{ color: '#BE9704' }}>Upskill Simply</span>
            </div>
          </a>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
