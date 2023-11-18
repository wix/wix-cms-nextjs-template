import { CarouselClient } from '@app/components/Carousel/Carousel';
import { ImageCarousel } from '@app/components/Carousel/ImageCarousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
          <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-4xl mb-4">GUIDING GROWTH,</h2>
          <h1 className="sm:text-[90px] sm:leading-[90px]">
            MAXIMISING POTENTIAL
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Take action to make your team razor sharp
          </h3>
          <a
            href="/contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            CALL US
          </a>
        </div>
      </div>


      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3 relative">
          <div
            className="ml-48 h-[370px] relative"
            style={{
              backgroundImage: 'url(/images/rhodes.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our CEO</h3>
            <p className="my-6 text-sm">
              A versatile HR professional who drives strategic learning and
              development initiatives, creates intentional and engaging learning
              experiences that prioritize the learner.
            </p>
            <a
              href="/projects"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Read More
            </a>
          </div>
        </div>

        <div className="basis-2/3">
          <div
            className="h-[370px] relative"
            style={{
              backgroundImage: 'url(/images/training1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
              To transform generations with meaningful and high impact learning
              Our Values solutions. To transform generations with meaningful and
              high impact learning Our Values solutions. To transform
              generations with meaningful and high impact learning Our Values
              solutions.
            </p>
            <a href="/about" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3 relative">
          <div
            className="ml-48 h-[370px] relative"
            style={{
              backgroundImage: 'url(/images/rhodes.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">
              PERSONAL EFFECTIVENESS TRAINING
            </h3>
            <p className="my-6 text-sm">
              • Time Management
              <br />
              • Effective Communication & Business Etiquette
              <br />
              • Personal Branding and Image
              <br />• Emotional Intelligence
            </p>
            <a
              href="/projects"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Read More
            </a>
          </div>
        </div>

        <div className="basis-1/3 relative">
          <div
            className="ml-48 h-[370px] relative"
            style={{
              backgroundImage: 'url(/images/rhodes.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">FINANCIAL WELLNESS TRAINING</h3>
            <p className="my-6 text-sm">
              • Debt management <br />
              • Budgeting
              <br />
              • Saving
              <br />• Investment
            </p>
            <a
              href="/projects"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="basis-1/3 relative">
          <div
            className="ml-48 h-[370px] relative"
            style={{
              backgroundImage: 'url(/images/rhodes.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">LEADERSHIP SKILLS</h3>
            <p className="my-6 text-sm">
              • Leadership &Management styles
              <br />
              • Effective leadership qualities
              <br />• Levels of leadership
            </p>
            <a
              href="/projects"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Read More
            </a>
          </div>
        </div>
      </div>

 

      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
            <h3 className="text-2xl font-site">Recent News</h3>
            <p className="my-6 text-sm">
              Get caught up on recent news, new programmes and our latest
              achievements in the at Razor Talent.
            </p>
            <a href="/news" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-530px]">
            <h3 className="text-2xl font-site">Take Part</h3>
            <p className="my-6 text-sm">
              How people can take part in Razor Talents activities.
              How people can take part in Razor Talents activities.
              How people can take part in Razor Talents activities.
              How people can take part in Razor Talents activities.
              How people can take part in Razor Talents activities.
            </p>
            <a href="/contact" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      <ImageCarousel />
      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site mt-4">
        2023 in Numbers
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] block sm:leading-[200px] text-purple-site">
            600
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px]">
            Staff
            <br />
            Trained
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            16
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px] bg-white">
            Clients
            <br />
            Onboarded
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            100
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px] bg-white">
            Courses
            <br />
            Certified
          </span>
        </div>
      </div>
      <CarouselClient />
    </div>
  );
}
