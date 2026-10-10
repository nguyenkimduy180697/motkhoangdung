import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-cream">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-5 py-6 sm:gap-10">
        <Image
          src="/images/logo-mkd.png"
          alt="Logo Một Khoảng Dừng"
          width={160}
          height={80}
          priority
          className="h-16 w-auto sm:h-20 object-contain"
        />
        <Image
          src="/images/logo-mcp.png"
          alt="Logo Cha Mẹ Trắc Ẩn Việt Nam"
          width={120}
          height={48}
          priority
          className="h-10 w-auto sm:h-12 object-contain"
        />
        <Image
          src="/images/lean-in-vietnam.png"
          alt="Logo Lean In VietNam"
          width={120}
          height={48}
          priority
          className="h-10 w-auto sm:h-12 object-contain"
        />
        <Image
          src="/images/pisel.png"
          alt="Logo PiSEL"
          width={120}
          height={48}
          priority
          className="h-10 w-auto sm:h-12 object-contain"
        />
      </div>
    </header>
  );
}
