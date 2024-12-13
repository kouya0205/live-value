import Image from 'next/image';
import Link from 'next/link';

export default async function Footer() {
  return (
    <footer className="bg-black-100">
      <div>
        <div className="mx-auto">
          <div className="flex flex-col items-center bg-slate-950 pb-[30px] pt-[30px] lg:flex-row lg:justify-between lg:pb-[20px] lg:pt-[15px]">
            <div className="my-[20px] flex flex-col items-center lg:flex-row">
              <div className="lg:pr-[50px]">
                <Image
                  width={140}
                  height={40}
                  src="/images/top/logo.webp"
                  alt="company icon"
                  className="mb-[10px] ml-[0px] mt-[20px] w-[140px] lg:my-0 lg:ml-[40px] lg:w-[210px]"
                />
              </div>
              <div className="flex flex-col items-center lg:flex lg:flex-row">
                <div className="my-[5px] transition duration-[1000ms] hover:text-[#999] hover:duration-[200ms] lg:mx-[10px]">
                  <Link href="/privacy" className="text-[10px] text-white lg:text-[13px]">
                    プライバシーポリシー
                  </Link>
                </div>
                <p className="my-[15px] text-[11px] text-white lg:mx-[10px] lg:text-[14px]">
                  ©2025 Hack GALA Team: カレー
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="lg:px-[8px]">
                <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    width={30}
                    height={30}
                    src="/images/top/facebook-logo.webp"
                    alt="facebook icon"
                    className="w-[30px] cursor-pointer lg:w-[35px]"
                  />
                </Link>
              </div>
              <div className="px-[10px] lg:pl-[8px] lg:pr-[20px]">
                <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    width={30}
                    height={30}
                    src="/images/top/x-logo.webp"
                    alt="x icon"
                    className="w-[30px] cursor-pointer lg:w-[35px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
